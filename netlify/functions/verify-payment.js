// Netlify Function: verifies a Paystack transaction by reference.
exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Payment provider is not configured' }) };
  }

  const reference = event.queryStringParameters?.reference;
  if (!reference) {
    return { statusCode: 400, body: JSON.stringify({ error: 'A transaction reference is required' }) };
  }

  try {
    const response = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
      headers: { Authorization: `Bearer ${secretKey}` },
    });

    const data = await response.json();

    if (!response.ok || !data.status) {
      return {
        statusCode: response.status || 502,
        body: JSON.stringify({ error: data.message || 'Failed to verify payment' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: data.data.status, // 'success' | 'failed' | 'abandoned'
        reference: data.data.reference,
        amount: data.data.amount / 100,
        paidAt: data.data.paid_at,
        channel: data.data.channel,
        customerEmail: data.data.customer?.email,
        metadata: data.data.metadata,
      }),
    };
  } catch (err) {
    return { statusCode: 502, body: JSON.stringify({ error: 'Could not reach payment provider' }) };
  }
};
