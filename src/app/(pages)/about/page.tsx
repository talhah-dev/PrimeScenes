import React from 'react'
import Wrapper from '@/app/Wrapper'
import HeroSection from '@/components/HeroSection'
import AboutHighlightsSection from '@/components/about/AboutHighlightsSection'
import AboutWhyClientsWorkWithUs from '@/components/about/AboutWhyClientsWorkWithUs'
import AboutApproachSection from '@/components/about/AboutApproachSection'
import AboutVisionSection from '@/components/about/AboutVisionSection'

export default function AboutPage() {
    return (
        <Wrapper>
            <HeroSection
                badge="About Us"
                heading="We build AI videos that look human—and work for business."
                description="From training and onboarding to marketing and client education, we create structured, business-ready AI videos using Synthesia and modern AI production tools—designed to scale without the traditional overhead."
                primaryButton={{ label: 'Book a Consultation', href: '/contact#contact-form' }}
                secondaryButton={{ label: 'Discuss Your Project', href: '/contact#contact-form' }}
            />
            <AboutHighlightsSection />
            <AboutWhyClientsWorkWithUs />
            <AboutApproachSection />
            <AboutVisionSection />
        </Wrapper>
    )
}
