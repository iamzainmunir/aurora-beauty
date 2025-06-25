'use client';

import { useEffect } from 'react';

import React from 'react'
import Lenis from "lenis"

const SmoothScroll = ({children}: {children: React.ReactNode}) => {
    useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
    
  return (
    <div>{children}</div>
  )
}

export default SmoothScroll