import Wrapper from '@/app/Wrapper'
import ServicesFAQSection from '@/components/contact/services/ServicesFAQSection'
import ServicesFinalCTASection from '@/components/contact/services/ServicesFinalCTASection'
import ServicesOverviewSection from '@/components/contact/services/ServicesOverviewSection'
import ServicesProcessSection from '@/components/contact/services/ServicesProcessSection'
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
            <ServicesFAQSection />
            <ServicesFinalCTASection />
        </Wrapper>
    )
}


// Services Hero

// Title: “Our Services”

// Subtitle: “AI-powered video solutions designed for modern businesses.”

// Short intro paragraph (the Synthesia + tools line)

// CTA buttons: Book a Consultation + Discuss Your Project

// Services Overview (optional but recommended)

// A short “what we do” block (2–4 bullets) or a quick summary

// This can be merged into the Hero if you want the page shorter

// Service #1: Training & E-Learning Videos

// Description + “We create:” bullet list

// Service #2: Marketing & Promotional Videos

// Description + “Ideal for:” bullet list

// Service #3: Client Education & Explainer Videos

// Description + “We work with:” bullet list

// Service #4: Multilingual AI Video Production

// Description + “We provide:” bullet list

// Service #5: Scalable AI Video Systems

// Description + “We build:” bullet list

// Our Process

// 4-step process list

// Final CTA