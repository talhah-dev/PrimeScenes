import Wrapper from '@/app/Wrapper'
import HeroSection from '@/components/HeroSection'
import PortfolioGallerySection from '@/components/portfolio/PortfolioGallerySection'
import React from 'react'

export default function PortfolioPage() {
    return (
        <Wrapper>
            <HeroSection
                badge="Portfolio"
                heading="AI Videos That Deliver Results"
                description="See how we’ve helped businesses streamline training, engage clients, and scale
                    communication with professional AI videos."
                primaryButton={{ label: 'Request Proposal', href: '/contact#contact-form' }}
                secondaryButton={{ label: 'Book a Consultation', href: '/contact#book' }}
            />
            <PortfolioGallerySection />
        </Wrapper>
    )
}
