// Netlify Function: initializes a Paystack transaction and returns the
// hosted checkout URL for the client to redirect to.
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Payment provider is not configured' }) };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  const { email, amount, propertyId, propertyTitle, fullName, phone, checkIn, checkOut, notes } = payload;

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'A valid email is required' }) };
  }

  if (!fullName || !String(fullName).trim()) {
    return { statusCode: 400, body: JSON.stringify({ error: 'A full name is required' }) };
  }

  if (!phone || !String(phone).trim()) {
    return { statusCode: 400, body: JSON.stringify({ error: 'A phone number is required' }) };
  }

  const nairaAmount = Number(amount);
  if (!Number.isFinite(nairaAmount) || nairaAmount <= 0) {
    return { statusCode: 400, body: JSON.stringify({ error: 'A valid amount is required' }) };
  }

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
    return { statusCode: 400, body: JSON.stringify({ error: 'A valid check-in and check-out date is required' }) };
  }

  const numDays = Math.round((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));
  if (numDays < 1) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Check-out date must be after the check-in date' }) };
  }

  const siteUrl = process.env.URL || `${event.headers['x-forwarded-proto'] || 'https'}://${event.headers.host}`;

  try {
    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        amount: Math.round(nairaAmount * 100), // Paystack expects kobo
        currency: 'NGN',
        callback_url: `${siteUrl}/payment/callback`,
        metadata: {
          propertyId,
          propertyTitle,
          fullName,
          phone,
          checkIn,
          checkOut,
          days: numDays,
          notes: notes || '',
        },
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.status) {
      return {
        statusCode: response.status || 502,
        body: JSON.stringify({ error: data.message || 'Failed to initialize payment' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        authorization_url: data.data.authorization_url,
        access_code: data.data.access_code,
        reference: data.data.reference,
      }),
    };
  } catch (err) {
    return { statusCode: 502, body: JSON.stringify({ error: 'Could not reach payment provider' }) };
  }
};
