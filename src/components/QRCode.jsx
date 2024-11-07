'use client'
import { useEffect, useRef } from 'react'
import QRCodeLib from 'qrcode'

export function QRCode() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current) {
      QRCodeLib.toCanvas(
        canvasRef.current,
        'https://plomberiedegore.com',
        {
          width: 200,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#ffffff',
          },
        },
        (error) => {
          if (error) console.error('Error generating QR code:', error)
        },
      )
    }
  }, [])

  return (
    <div className="flex justify-center">
      <canvas ref={canvasRef} />
    </div>
  )
}
