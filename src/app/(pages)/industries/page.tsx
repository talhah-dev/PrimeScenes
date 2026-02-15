import Wrapper from '@/app/Wrapper'
import HeroSection from '@/components/HeroSection'
import IndustriesShowcase from '@/components/industries/IndustriesShowcase'
import IndustryValueStrip from '@/components/industries/IndustryValueStrip'
import React from 'react'
import IndustrySteps from '@/components/industries/IndustrySteps'

export default function IndustryPage() {
    return (
        <Wrapper>
            <HeroSection
                badge="Industries"
                heading="Ready to create AI videos for your industry?"
                description="Whether it’s training, client education, or marketing, we help businesses like yours scale
                communication with AI-powered videos fast, easy, and professional."
                primaryButton={{ label: 'Book a Free Strategy Call', href: '/contact#book' }}
                secondaryButton={{ label: 'Send Your Project Details', href: '/contact#contact-form' }}
            />
            <IndustriesShowcase />
            <IndustryValueStrip />
            <IndustrySteps />
        </Wrapper>
    )
}
