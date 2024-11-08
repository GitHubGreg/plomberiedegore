import { QRCode } from '@/components/QRCode'
import { StyledQRCode } from '@/components/StyledQRCode'

export default function QRCodePage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-8 text-2xl font-bold">QR Code - Plomberie de Gore</h1>
        <QRCode />
        <StyledQRCode />
      </div>
    </div>
  )
}
