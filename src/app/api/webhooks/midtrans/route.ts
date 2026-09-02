import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyMidtransSignature } from '@/lib/midtrans';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const orderId = body.order_id;
    const statusCode = body.status_code;
    const grossAmount = body.gross_amount;
    const signatureKey = body.signature_key;
    const transactionStatus = body.transaction_status;
    const fraudStatus = body.fraud_status;

    // Verifikasi Keamanan Signature Midtrans (jika diprovide)
    if (signatureKey) {
      const isValid = verifyMidtransSignature(orderId, statusCode, grossAmount, signatureKey);
      if (!isValid) {
        return NextResponse.json({ success: false, message: 'Invalid Signature' }, { status: 403 });
      }
    }

    // Ekstrak ID pendaftaran dari orderId: KODEMIK-{pendaftaranIdPrefix}-{timestamp}
    // Atau cari pendaftaran terkait dari order_id
    if (transactionStatus === 'capture' || transactionStatus === 'settlement') {
      if (fraudStatus === 'challenge') {
        // Fraud verification pending
        return NextResponse.json({ status: 'CHALLENGE' });
      }

      // Pembayaran Sukses! Update statusPembayaran = LUNAS
      const parts = orderId.split('-');
      const pendaftaranPrefix = parts[1];

      if (pendaftaranPrefix) {
        const pendaftaran = await prisma.pendaftaran.findFirst({
          where: {
            id: { startsWith: pendaftaranPrefix },
          },
        });

        if (pendaftaran) {
          await prisma.pendaftaran.update({
            where: { id: pendaftaran.id },
            data: { statusPembayaran: 'LUNAS' },
          });
          console.log(`✅ Webhook Midtrans Sukses: Order ${orderId} Pendaftaran ${pendaftaran.id} diset LUNAS.`);
        }
      }
    }

    return NextResponse.json({ status: 'OK' });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
