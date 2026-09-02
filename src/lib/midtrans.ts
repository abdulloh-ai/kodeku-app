import crypto from 'crypto';

export const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY || '';
export const MIDTRANS_CLIENT_KEY = process.env.MIDTRANS_CLIENT_KEY || '';
export const MIDTRANS_MERCHANT_ID = process.env.MIDTRANS_MERCHANT_ID || '';

// Otomatis tentukan URL API berdasarkan format Key (Production `Mid-server-` vs Sandbox `SB-Mid-server-`)
const IS_PRODUCTION = MIDTRANS_SERVER_KEY.startsWith('Mid-server-');

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
    throw new Error(data.error_messages ? data.error_messages.join(', ') : 'Gagal membuat transaksi Midtrans');
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
