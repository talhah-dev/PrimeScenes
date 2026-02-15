'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/Navbar'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { TextEffect } from '@/components/ui/text-effect'
import { Variants } from 'framer-motion'

type HeroButton = {
    label: string
    href: string
}

export type HeroSectionProps = {
    badge: string
    heading: string
    description: string
    primaryButton: HeroButton
    secondaryButton: HeroButton
    showNavbar?: boolean
}

const transitionVariants: { container: Variants; item: Variants } = {
    container: {
        visible: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.05,
            },
        },
    },
    item: {
        hidden: { opacity: 0, y: 16, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { type: 'spring', bounce: 0.25, duration: 1.1 },
        },
    },
}

export default function HeroSection({
    badge,
    heading,
    description,
    primaryButton,
    secondaryButton,
    showNavbar = true,
}: HeroSectionProps) {
    return (
        <section className="relative overflow-hidden bg-[#0A211F] text-[#E9F3E6]">
            {showNavbar ? <Navbar /> : null}

            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#8AF7B7]/18 blur-3xl" />
                <div className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-white/8 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#8AF7B7]/10 blur-3xl" />
                <div className="absolute inset-0 [background:radial-gradient(120%_120%_at_50%_0%,rgba(138,247,183,0.10)_0%,rgba(10,33,31,0)_55%)]" />
            </div>

            <div className="mx-auto max-w-6xl px-6 pt-28 md:pt-36">
                <AnimatedGroup variants={transitionVariants} className="mx-auto max-w-4xl text-center">
                    <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-[#E9F3E6]/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8AF7B7]" />
                        {badge}
                    </div>

                    <TextEffect
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="h1"
                        className="mt-6 leading-tight text-balance text-4xl font-semibold tracking-tight text-[#8AF7B7] sm:text-5xl md:text-6xl"
                    >
                        {heading}
                    </TextEffect>

                    <TextEffect
                        per="line"
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        delay={0.2}
                        as="p"
                        className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[#E9F3E6]/75 md:text-lg"
                    >
                        {description}
                    </TextEffect>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <Button
                            asChild
                            className="h-11 md:w-auto w-full rounded-full bg-[#D8F782] !px-5 font-medium text-[#0A211F] hover:bg-[#CFF06F]"
                        >
                            <Link href={primaryButton.href}>
                                {primaryButton.label} <ArrowRight className="ml-2 size-4" />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            className="h-11 md:w-auto w-full rounded-full border-white/15 bg-transparent px-6 text-[#E9F3E6] hover:bg-white/10 hover:text-[#E9F3E6]"
                        >
                            <Link href={secondaryButton.href}>{secondaryButton.label}</Link>
                        </Button>
                    </div>
                </AnimatedGroup>

                <div className="mt-14 pb-10">
                </div>
            </div>
        </section>
    )
}
