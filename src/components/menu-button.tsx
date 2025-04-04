"use client"

import { useState } from "react"

export function MenuButton() {
    const [isOpen, setIsOpen] = useState(false)

    return (
    <nav className="relative">
        <button className="text-black" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label="Menu">
        <span className="flex flex-col gap-1.5">
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
        </span>
        </button>

        {isOpen && (
        <section className="absolute right-0 mt-2 w-48 bg-white rounded shadow-md">
            <span className="py-1">
            <section>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Home
                </a>
            </section>
            <section>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Products
                </a>
            </section>
            <section>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Services
                </a>
            </section>
            <section>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Contact
                </a>
            </section>
            </span>
        </section>
        )}
    </nav>
    )
}
