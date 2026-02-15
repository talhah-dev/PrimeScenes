import Wrapper from '@/app/Wrapper'
import ServicesFAQSection from '@/components/contact/services/ServicesFAQSection'
import ServicesFinalCTASection from '@/components/contact/services/ServicesFinalCTASection'
import ServicesOverviewSection from '@/components/contact/services/ServicesOverviewSection'
import ServicesProcessSection from '@/components/contact/services/ServicesProcessSection'
import HeroSection from '@/components/HeroSection'
import React from 'react'

export default function PortfolioPage() {
    return (
        <Wrapper>
            <HeroSection
                badge="Portfolio"
                heading="Premium AI video work—built to scale."
                description="Explore recent training, marketing, and client education videos created with a structured AI production system."
                primaryButton={{ label: 'Request Proposal', href: '/contact#contact-form' }}
                secondaryButton={{ label: 'Book a Consultation', href: '/contact#book' }}
            />
        </Wrapper>
    )
}
