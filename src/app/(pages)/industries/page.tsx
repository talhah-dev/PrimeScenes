import Wrapper from '@/app/Wrapper'
import HeroSection from '@/components/HeroSection'
import IndustriesShowcase from '@/components/industries/IndustriesShowcase'
import IndustryValueStrip from '@/components/industries/IndustryValueStrip'
import React from 'react'
import IndustryCtaBanner from './IndustryCtaBanner'

export default function IndustryPage() {
    return (
        <Wrapper>
            <HeroSection
                badge="Industries"
                heading="AI video systems built for real teams."
                description="We create AI-powered videos tailored to your industry—so you can train faster, educate clients clearly, and scale communication with consistent, professional content."
                primaryButton={{ label: 'Book a Free Strategy Call', href: '/contact#book' }}
                secondaryButton={{ label: 'Send Your Project Details', href: '/contact#contact-form' }}
            />
            <IndustriesShowcase />
            <IndustryValueStrip />
            <IndustryCtaBanner />
        </Wrapper>
    )
}
