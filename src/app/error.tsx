'use client'

import { useEffect } from 'react'

 
 

import "./globals.css";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-space-black px-4">
      <div className="text-center max-w-md">
        <div className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-4">Error</div>
        <h1 className="font-display text-4xl font-black text-white mb-4">Something went wrong</h1>
        <p className="text-white/50 text-sm mb-8">{error.message || 'An unexpected error occurred.'}</p>
        
        <button onClick={reset} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Try Again
        </button>
      </div>
    </div>
  )
}
