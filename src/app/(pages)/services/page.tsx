import Wrapper from '@/app/Wrapper'
import ServicesFAQSection from '@/components/services/ServicesFAQSection'
import ServicesFinalCTASection from '@/components/services/ServicesFinalCTASection'
import ServicesOverviewSection from '@/components/services/ServicesOverviewSection'
import ServicesProcessSection from '@/components/services/ServicesProcessSection'
import HeroSection from '@/components/HeroSection'
import React from 'react'

export default function ServicePage() {
    return (
        <Wrapper>
            <HeroSection
                badge="Our Services"
                heading="AI-powered video solutions for modern teams"
                description="We help businesses create structured, scalable, and professional AI videos using Synthesia and advanced AI production tools—built for training, marketing, and client communication."
                primaryButton={{ label: 'Book a Consultation', href: '/contact#contact-form' }}
                secondaryButton={{ label: 'Discuss Your Project', href: '/contact#contact-form' }}
            />
            <ServicesOverviewSection />
            <ServicesProcessSection />
            {/* <ServicesFinalCTASection /> */}
            <ServicesFAQSection />
        </Wrapper>
    )
}
