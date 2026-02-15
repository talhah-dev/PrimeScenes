import Wrapper from '@/app/Wrapper'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ContentSection from '@/components/home/ContentSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import HeroSection from '@/components/home/Hero'
import RecentWork from '@/components/home/RecentWork'
import Testimonials from '@/components/home/Testimonials'
import LogoCloud from '@/components/logo-cloud'
import React from 'react'

export default function HomePage() {
    return (
        <Wrapper>
            <HeroSection />
            <LogoCloud />
            <ContentSection />
            <FeaturesSection />
            <Testimonials />
            <RecentWork />
            <Contact />
        </Wrapper>
    )
}
