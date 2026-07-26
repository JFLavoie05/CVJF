'use client'
import { useEffect } from 'react'

export default function CircularFavicon({ src }) {
  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 64
    canvas.height = 64
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.onload = () => {
      ctx.beginPath()
      ctx.arc(32, 32, 32, 0, Math.PI * 2)
      ctx.closePath()
      ctx.clip()
      ctx.drawImage(img, 0, 0, 64, 64)
      let link = document.querySelector("link[rel='icon']")
      if (!link) {
        link = document.createElement('link')
        link.rel = 'icon'
        document.head.appendChild(link)
      }
      link.href = canvas.toDataURL('image/png')
    }
    img.src = src
  }, [src])
  return null
}
