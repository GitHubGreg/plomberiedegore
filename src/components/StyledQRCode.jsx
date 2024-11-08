'use client'
import { useEffect, useRef } from 'react'
import QRCodeStyling from 'qr-code-styling'

export function StyledQRCode() {
  const qrCodeRef = useRef(null)

  useEffect(() => {
    const qrCode = new QRCodeStyling({
      width: 300,
      height: 300,
      type: 'svg',
      data: 'https://www.plomberiedegore.com',
      image: '../images/logo.svg',
      dotsOptions: {
        color: '#4267b2',
        type: 'rounded',
      },
      backgroundOptions: {
        color: '#e9ebee',
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 20,
      },
    })

    qrCode.append(qrCodeRef.current)
  }, [])

  const handleDownloadSVG = () => {
    const qrCode = new QRCodeStyling({
      width: 300,
      height: 300,
      type: 'svg',
      data: 'https://www.plomberiedegore.com',
      image: '../images/logo.svg',
      dotsOptions: {
        color: '#4267b2',
        type: 'rounded',
      },
      backgroundOptions: {
        color: '#e9ebee',
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 20,
      },
    })

    qrCode.download({ name: 'styled-qr', extension: 'svg' })
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
    </div>
  )
}
