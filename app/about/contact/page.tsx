import React from 'react'
import HeroImageSquare from '@/public/hero-image-square.png'


export default function Contact() {
    return (
        <section className="container max-w-4xl px-4 py-8 mx-auto">
            <h1 className="mb-6 text-4xl font-bold text-center">
                Contact PrintForge
            </h1>
            <div className="mb-6 text-center">
                <div>
                    <h2 className="mb-4 text-2xl font-semibold font-montserrat-alternates">
                        Ways to reach us
                    </h2>
                    <ul className="mb-4 text-gray-700">
                        <li>
                            3D Models suggestions: Tell us what we should add to our printers.
                        </li>
                        <li>
                            Corrections: Spotted an error? Let us know so we can fix it.
                        </li>
                        <li>
                            Careers: Interested in joining PrintForge? Send a short note and we'll get back to you.
                        </li>
                    </ul>
                    <p className="font-semibold">
                        Email: info@printforge.com
                    </p>
                </div>
            </div>
        </section>
    )
}
