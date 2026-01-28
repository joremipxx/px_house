import { useState, useEffect, useRef } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean // For above-the-fold images
  onLoad?: () => void
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  onLoad 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (priority) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '50px' } // Start loading 50px before entering viewport
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [priority])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  return (
    <div className={`relative overflow-hidden ${className.includes('absolute') ? '' : className}`} ref={imgRef}>
      {/* Placeholder - subtle gradient */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
      )}
      
      {/* Actual Image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className.includes('absolute') ? className : 'w-full h-full'} object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={handleLoad}
        />
      )}
    </div>
  )
}
