import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

export default function RunConfetti() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 1000)
  }, [])

  const confettiStyle = {
    opacity: visible ? 1 : 0,
    transition: 'opacity 2s'
  }

  return <Confetti style={confettiStyle} width={1920} height={960} />
}