import Wrapper from '@/app/Wrapper'
import Contact from '@/components/Contact'
import ContactHero from '@/components/contact/ContactHero'
import React from 'react'

export default function ContactPage() {
    return (
        <Wrapper>
            <ContactHero />
            <Contact />
        </Wrapper>
    )
}
