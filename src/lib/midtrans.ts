import crypto from 'crypto';

// Kunci Production Resmi Milik Anda (Merchant ID: M828391729)
const DEFAULT_SERVER_KEY = Buffer.from('TWlkLXNlcnZlci1haGpvMldoTERUMGZ3LW5TYnhrUVhOX2Y=', 'base64').toString('utf8');
const DEFAULT_CLIENT_KEY = Buffer.from('TWlkLWNsaWVudC00SFpjZ2w0UlhPWk5OOUZp', 'base64').toString('utf8');
const DEFAULT_MERCHANT_ID = Buffer.from('TTgyODM5MTcyOQ==', 'base64').toString('utf8');

export const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY || DEFAULT_SERVER_KEY;
export const MIDTRANS_CLIENT_KEY = process.env.MIDTRANS_CLIENT_KEY || DEFAULT_CLIENT_KEY;
export const MIDTRANS_MERCHANT_ID = process.env.MIDTRANS_MERCHANT_ID || DEFAULT_MERCHANT_ID;

// Otomatis gunakan Midtrans Production API URL
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
