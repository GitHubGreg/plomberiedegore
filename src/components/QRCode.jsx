'use client'
import { useEffect, useRef, useState } from 'react'
import QRCodeLib from 'qrcode'

export function QRCode() {
  const canvasRef = useRef(null)
  const [pngData, setPngData] = useState('')
  const [epsData, setEpsData] = useState('')

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

        // Generate EPS data
        try {
          const qrData = await QRCodeLib.create('https://plomberiedegore.com', {
            errorCorrectionLevel: 'H',
          })

          const modules = qrData.modules
          const moduleCount = modules.length
          const scale = 1 // 1 point = 1/72 inch
          const margin = 10

          // EPS header
          let eps = `%!PS-Adobe-3.0 EPSF-3.0
%%BoundingBox: 0 0 ${moduleCount * scale + margin * 2} ${moduleCount * scale + margin * 2}
%%EndComments
/size ${scale} def
/margin ${margin} def
/box {
  newpath
  moveto
  size 0 rlineto
  0 size rlineto
  size neg 0 rlineto
  closepath
  fill
} def
1 setlinewidth
0 setgray
`

          // Generate boxes for each module
          for (let row = 0; row < moduleCount; row++) {
            for (let col = 0; col < moduleCount; col++) {
              if (modules[row][col]) {
                const x = col * scale + margin
                const y = (moduleCount - row - 1) * scale + margin // Flip Y coordinate
                eps += `${x} ${y} box\n`
              }
            }
          }

          eps += '%%EOF'
          setEpsData(eps)
        } catch (error) {
          console.error('Error generating EPS:', error)
        }
      }
    }

    generateQR()
  }, [])

  const handleDownloadEPS = () => {
    const blob = new Blob([epsData], { type: 'application/postscript' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'plomberie-de-gore-qr.eps'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleDownloadPNG = () => {
    const a = document.createElement('a')
    a.href = pngData
    a.download = 'plomberie-de-gore-qr.png'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas ref={canvasRef} />
      <div className="flex gap-4">
        <button
          onClick={handleDownloadEPS}
          className="text-sm text-blue-600 underline hover:text-blue-800"
        >
          Télécharger en EPS (vectoriel)
        </button>
        <button
          onClick={handleDownloadPNG}
          className="text-sm text-blue-600 underline hover:text-blue-800"
        >
          Télécharger en PNG (haute résolution)
        </button>
      </div>
    </div>
  )
}
