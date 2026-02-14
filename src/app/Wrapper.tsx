import FooterSection from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import React from 'react'

interface Props {
    children: React.ReactNode
}


export default function Wrapper({ children }: Props) {
    return (
        <div>
            <Navbar />
            {children}
            <FooterSection />
        </div>
    )
}
