'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Photo {
  id: number
  src: string
  alt: string
  height: number
}

const photos: Photo[] = [
  { id: 1, src: '/images/fashion1.png', alt: 'Fashion Model 1', height: 400 },
  { id: 2, src: '/images/fashion2.png', alt: 'Fashion Model 2', height: 500 },
  { id: 3, src: '/images/fashion3.png', alt: 'Fashion Model 3', height: 450 },
  { id: 4, src: '/images/fashion4.png', alt: 'Fashion Model 4', height: 520 },
  { id: 5, src: '/images/fashion5.png', alt: 'Fashion Accessories', height: 380 },
  { id: 6, src: '/images/fashion6.png', alt: 'Fashion Collection', height: 480 },
]

export default function PhotoGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="break-inside-avoid mb-4 relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
            onMouseEnter={() => setHoveredId(photo.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={photo.height}
                className={`
                  w-full h-auto object-cover transition-all duration-700 ease-in-out
                  ${hoveredId === photo.id 
                    ? 'filter grayscale-0 saturate-100 brightness-100 scale-105' 
                    : 'filter grayscale-[60%] saturate-75 brightness-95'
                  }
                `}
                style={{
                  filter: hoveredId === photo.id 
                    ? 'grayscale(0%) saturate(100%) brightness(100%)' 
                    : 'grayscale(60%) saturate(75%) brightness(95%)',
                }}
              />
              
              {/* Overlay effect */}
              <div 
                className={`
                  absolute inset-0 transition-opacity duration-500 ease-in-out
                  ${hoveredId === photo.id 
                    ? 'bg-black/0' 
                    : 'bg-black/10'
                  }
                `}
              />
              
              {/* Hover overlay with subtle text */}
              {hoveredId === photo.id && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center">
                    <p className="text-sm font-light tracking-wider">VIEW COLLECTION</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}