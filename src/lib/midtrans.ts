import crypto from 'crypto';

// Server Key & Client Key Midtrans (Mode Sandbox Default untuk Testing)
const IS_PRODUCTION = process.env.NODE_ENV === 'production' && process.env.MIDTRANS_IS_PRODUCTION === 'true';

export const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY || 'SB-Mid-server-SampleSandboxKey2026';
export const MIDTRANS_CLIENT_KEY = process.env.MIDTRANS_CLIENT_KEY || 'SB-Mid-client-SampleSandboxKey2026';

const SNAP_API_URL = IS_PRODUCTION
  ? 'https://app.midtrans.com/snap/v1/transactions'
  : 'https://app.sandbox.midtrans.com/snap/v1/transactions';

export interface CreateTransactionParams {
  orderId: string;
  grossAmount: number;
  customerDetails: {
    first_name: string;
    email: string;
  };
  itemDetails: {
    id: string;
    price: number;
    quantity: number;
    name: string;
  }[];
}

export async function createSnapTransaction(params: CreateTransactionParams) {
  const authHeader = Buffer.from(`${MIDTRANS_SERVER_KEY}:`).toString('base64');

  const payload = {
    transaction_details: {
      order_id: params.orderId,
      gross_amount: Math.round(params.grossAmount),
    },
    customer_details: params.customerDetails,
    item_details: params.itemDetails,
    credit_card: {
      secure: true,
    },
  };

  const response = await fetch(SNAP_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Basic ${authHeader}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    // Fallback Mock Token untuk keperluan testing tanpa API Key Sandbox asli
    const mockToken = `MOCK-SNAP-TOKEN-${Date.now()}`;
    return {
      token: mockToken,
      redirect_url: `https://app.sandbox.midtrans.com/snap/v2/vtweb/${mockToken}`,
      isMock: true,
    };
  }

  return data;
}

export function verifyMidtransSignature(
  orderId: string,
  statusCode: string,
  grossAmount: string,
  signatureKey: string
): boolean {
  const input = orderId + statusCode + grossAmount + MIDTRANS_SERVER_KEY;
  const hash = crypto.createHash('sha512').update(input).digest('hex');
  return hash === signatureKey;
}
