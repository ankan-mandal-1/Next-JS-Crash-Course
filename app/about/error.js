"use client"
import React, { useEffect } from 'react'

export default function Error({ error, reset }) {

    useEffect(() => {
        console.log(error)
    }, [error])

  return (
    <div>Error
        <button onClick={() => reset()}>Try Again</button>
    </div>
  )
}
