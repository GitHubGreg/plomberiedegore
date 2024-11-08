'use client'
import { useEffect, useRef, useState } from 'react'
import QRCodeLib from 'qrcode'

export function QRCode() {
  const canvasRef = useRef(null)
  const [pngData, setPngData] = useState('')
  const [svgData, setSvgData] = useState('')

  useEffect(() => {
    const generateQR = async () => {
      if (canvasRef.current) {
        // Generate Canvas version
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

        // Generate high-res PNG
        try {
          const pngUrl = await QRCodeLib.toDataURL(
            'https://plomberiedegore.com',
            {
              width: 1000,
              margin: 2,
              color: {
                dark: '#000000',
                light: '#ffffff',
              },
            },
          )
          setPngData(pngUrl)
        } catch (error) {
          console.error('Error generating PNG:', error)
        }

        // Generate SVG
        try {
          const svgString = await QRCodeLib.toString(
            'https://plomberiedegore.com',
            {
              type: 'svg',
              width: 1000,
              margin: 2,
              color: {
                dark: '#000000',
                light: '#ffffff',
              },
            },
          )
          setSvgData(svgString)
        } catch (error) {
          console.error('Error generating SVG:', error)
        }
      }
    }

    generateQR()
  }, [])

  const handleDownloadPNG = () => {
    const a = document.createElement('a')
    a.href = pngData
    a.download = 'plomberie-de-gore-qr.png'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const handleDownloadSVG = () => {
    const blob = new Blob([svgData], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'plomberie-de-gore-qr.svg'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas ref={canvasRef} />
      <div className="flex gap-4">
        <button
          onClick={handleDownloadPNG}
          className="text-sm text-blue-600 underline hover:text-blue-800"
        >
          Télécharger en PNG (haute résolution)
        </button>
        <button
          onClick={handleDownloadSVG}
          className="text-sm text-blue-600 underline hover:text-blue-800"
        >
          Télécharger en SVG
        </button>
      </div>
    </div>
  )
}
