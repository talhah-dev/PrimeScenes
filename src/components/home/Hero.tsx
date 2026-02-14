'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { animate, useInView, Variants } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navbar } from '../Navbar'
import { AnimatedGroup } from '../ui/animated-group'
import { TextEffect } from '../ui/text-effect'

const transitionVariants: { item: Variants } = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

function CountUp({
    to,
    suffix,
    from = 2,
    duration = 1.6,
    className,
}: {
    to: number
    suffix?: string
    from?: number
    duration?: number
    className?: string
}) {
    const ref = useRef<HTMLSpanElement | null>(null)
    const inView = useInView(ref, { once: true, margin: '-20% 0px -20% 0px' })
    const [value, setValue] = useState(from)

    useEffect(() => {
        if (!inView) return
        const controls = animate(from, to, {
            duration,
            ease: 'easeOut',
            onUpdate: (v) => setValue(Math.floor(v)),
        })
        return () => controls.stop()
    }, [inView, from, to, duration])

    const display = useMemo(() => {
        const str = String(value)
        const padded = str.length >= 2 ? str : str.padStart(2, '0')
        return `${padded}${suffix ?? ''}`
    }, [value, suffix])

    return (
        <span ref={ref} className={className}>
            {display}
        </span>
    )
}

export default function HeroSection() {

    const mainRef = useRef<HTMLElement | null>(null)
    const videoRef = useRef<HTMLDivElement | null>(null)
    const [fadeStart, setFadeStart] = useState(900)

    useEffect(() => {
        const measure = () => {
            const main = mainRef.current
            const video = videoRef.current
            if (!main || !video) return
            const mainRect = main.getBoundingClientRect()
            const videoRect = video.getBoundingClientRect()
            const start = videoRect.top - mainRect.top + videoRect.height / 2
            setFadeStart(Math.max(0, Math.round(start)))
        }

        const raf = requestAnimationFrame(measure)
        const t = window.setTimeout(measure, 250)
        window.addEventListener('resize', measure)

        return () => {
            cancelAnimationFrame(raf)
            clearTimeout(t)
            window.removeEventListener('resize', measure)
        }
    }, [])

    const clientLogos = [
        { name: 'Nvidia', src: '/clients/nvidia.svg' },
        { name: 'GitHub', src: '/clients/github.svg' },
        { name: 'Nike', src: '/clients/nike.svg' },
        { name: 'OpenAI', src: '/clients/openai.svg' },
        { name: 'Laravel', src: '/clients/laravel.svg' },
        { name: 'Lemon Squeezy', src: '/clients/lemonsqueezy.svg' },
        { name: 'Column', src: '/clients/column.svg' },
        { name: 'Lilly', src: '/clients/lilly.svg' },
    ]

    const stats = [
        { to: 200, suffix: '+', label: 'Projects delivered' },
        { to: 350, suffix: '+', label: 'Ads, courses & business videos' },
        { to: 4, suffix: '+', label: 'Years in AI video systems' },
        { to: 12, suffix: '+', label: 'Languages supported' },
    ]

    return (
        <>
            <main ref={mainRef} className="relative overflow-hidden text-[#E9F3E6]">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 -z-20 overflow-hidden"
                    style={{ height: fadeStart }}
                >
                    <div className="absolute inset-0 bg-[#0A211F]" />
                    <div className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(138,247,183,.14)_0,rgba(94,163,131,.06)_50%,rgba(10,33,31,0)_80%)]" />
                        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(216,247,130,.10)_0,rgba(94,163,131,.06)_80%,transparent_100%)] [translate:5%_-50%]" />
                        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(138,247,183,.08)_0,rgba(94,163,131,.05)_80%,transparent_100%)]" />
                    </div>
                </div>

                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 -z-20 flex flex-col"
                    style={{ top: fadeStart }}
                >
                    <div className="flex-1 bg-[#0A211F]" />
                    {/* <div className="flex-1 bg-[rgba(10,33,31,0.35)]" /> */}
                    <div className="flex-1 bg-[rgba(10,33,31,0)]" />
                </div>

                <section>
                    <div className="relative pt-24 md:pt-36">
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="/portfolio"
                                        className="mx-auto flex w-fit items-center gap-4 rounded-full border border-white/10 bg-white/5 p-1 pl-4 shadow-md shadow-black/20 backdrop-blur transition-colors duration-300 hover:bg-white/8"
                                    >
                                        <span className="text-sm text-[#E9F3E6]/90">
                                            Human creativity. <span className="italic text-[#8AF7B7]">AI acceleration.</span> Watch our showreel
                                        </span>
                                        <span className="block h-4 w-0.5 bg-white/20" />
                                        <div className="size-7 overflow-hidden rounded-full bg-[#D8F782]">
                                            <div className="flex w-14 -translate-x-1/2 duration-500 ease-in-out hover:translate-x-0">
                                                <span className="flex size-7">
                                                    <ArrowRight className="m-auto size-3 text-[#0A211F]" />
                                                </span>
                                                <span className="flex size-7">
                                                    <ArrowRight className="m-auto size-3 text-[#0A211F]" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </AnimatedGroup>

                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mx-auto mt-10 max-w-5xl text-balance tracking-tight font-semibold text-5xl leading-tight text-[#8AF7B7] md:text-7xl xl:text-[5rem]"
                                >
                                    AI creative video, made for brands.
                                </TextEffect>

                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.45}
                                    as="p"
                                    className="mx-auto mt-8 max-w-3xl text-balance text-lg text-[#E9F3E6]/80"
                                >
                                    Ads, explainers, onboarding, and training—crafted with a repeatable system for pacing, clarity, and brand
                                    consistency. Faster delivery, premium output, and multilingual scale.
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.06,
                                                    delayChildren: 0.65,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mx-auto mt-14 grid w-full max-w-4xl grid-cols-2 gap-y-8 sm:grid-cols-4"
                                >
                                    {stats.map((s) => (
                                        <div key={s.label} className="text-center">
                                            <div className="text-3xl font-medium text-[#8AF7B7] md:text-4xl">
                                                <CountUp to={s.to} suffix={s.suffix} />
                                            </div>
                                            <div className="mt-2 text-sm text-[#E9F3E6]/75">{s.label}</div>
                                        </div>
                                    ))}
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.8,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row"
                                >
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-12 rounded-full bg-[#D8F782] px-7 text-base font-medium text-[#0A211F] hover:bg-[#CFF06F]"
                                    >
                                        <Link href="/contact">Get a quote</Link>
                                    </Button>

                                    <Button
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-12 rounded-full border border-white/15 bg-white/5 px-7 text-base text-[#E9F3E6] hover:bg-white/10"
                                    >
                                        <Link href="/portfolio">View portfolio</Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.9,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}
                        >
                            <div className="relative mt-12 overflow-hidden px-6 md:mt-16">
                                <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_25px_80px_-40px_rgba(0,0,0,.8)] backdrop-blur">
                                    <video
                                        className="relative aspect-[16/9] w-full overflow-hidden"
                                        src="https://res.cloudinary.com/dpkp4hymz/video/upload/v1770111509/desktop_ntobyi.mp4"
                                        autoPlay
                                        poster="https://res.cloudinary.com/dpkp4hymz/image/upload/v1770115231/Screenshot_2026-02-03_154010_jm7cos.png"
                                        muted
                                        loop
                                        playsInline
                                        preload="auto"
                                    />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
            </main>
        </>
    )
}
