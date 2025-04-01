"use client"

import { useState } from "react"

export function MenuButton() {
    const [isOpen, setIsOpen] = useState(false)

    return (
    <button className="text-black" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label="Menu">
        <span className="flex flex-col gap-1.5">
        <span className="block w-8 h-0.5 bg-black"></span>
        <span className="block w-8 h-0.5 bg-black"></span>
        <span className="block w-8 h-0.5 bg-black"></span>
        </span>
    </button>
    )
}

