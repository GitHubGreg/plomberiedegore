'use client'
import { useEffect, useRef } from 'react'
import QRCodeStyling from 'qr-code-styling'

export function StyledQRCode() {
  const qrCodeRef = useRef(null)
  const qrCode = useRef(null)

  useEffect(() => {
    qrCode.current = new QRCodeStyling({
      width: 5000,
      height: 5000,
      type: 'svg',
      data: 'https://www.plomberiedegore.com',
      image: '/images/logo.svg',
      dotsOptions: {
        color: '#4267b2',
        type: 'dots',
        gradient: {
          type: 'linear',
          rotation: 90,
          colorStops: [
            { offset: 0, color: '#0C5788' },
            { offset: 1, color: '#001847' },
          ],
        },
      },
      backgroundOptions: {
        color: 'transparent',
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 20,
      },
    })

    qrCode.current.append(qrCodeRef.current)
  }, [])

  const handleDownloadSVG = () => {
    qrCode.current.download({ name: 'styled-qr', extension: 'svg' })
  }

  const handleDownloadPNG = () => {
    qrCode.current.download({
      name: 'styled-qr',
      extension: 'png',
      scale: 10,
    })
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div ref={qrCodeRef} />
      <button
        onClick={handleDownloadSVG}
        className="text-sm text-blue-600 underline hover:text-blue-800"
      >
        Télécharger le QR Code stylisé en SVG
      </button>
      <button
        onClick={handleDownloadPNG}
        className="text-sm text-blue-600 underline hover:text-blue-800"
      >
        Télécharger le QR Code stylisé en PNG
      </button>
    </div>
  )
}
