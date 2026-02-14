'use client'

import Link from 'next/link'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/Navbar'
import { motion } from 'framer-motion'

export default function ContactHero() {
    return (
        <section className="relative overflow-hidden bg-[#0A211F] text-[#E9F3E6]">
            <Navbar />

            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#8AF7B7]/18 blur-3xl" />
                <div className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-white/8 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#8AF7B7]/10 blur-3xl" />
                <div className="absolute inset-0 [background:radial-gradient(120%_120%_at_50%_0%,rgba(138,247,183,0.10)_0%,rgba(10,33,31,0)_55%)]" />
            </div>

            <div className="mx-auto max-w-6xl px-6 pt-28 md:pt-36">
                <motion.div
                    initial={{ opacity: 0, y: 16, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ type: 'spring', bounce: 0.25, duration: 1.1 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-[#E9F3E6]/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8AF7B7]" />
                        Contact SynthFlow
                    </div>

                    <h1 className="mt-6 leading-tight text-balance text-4xl font-semibold tracking-tight text-[#8AF7B7] sm:text-5xl md:text-6xl">
                        Let’s talk about your next video.
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[#E9F3E6]/75 md:text-lg">
                        Share your goal, timeline, and references. We’ll reply with a clear plan, pricing options, and next steps.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <Button
                            asChild
                            className="h-11 rounded-full bg-[#8AF7B7] px-6 text-[#0A211F] hover:bg-[#8AF7B7]/90"
                        >
                            <Link href="#contact-form">
                                Start a request <ArrowRight className="ml-2 size-4" />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            className="h-11 rounded-full border-white/15 bg-transparent px-6 text-[#E9F3E6] hover:bg-white/10 hover:text-[#E9F3E6]"
                        >
                            <Link href="/portfolio">View portfolio</Link>
                        </Button>
                    </div>
                </motion.div>

                <div className="mt-14 pb-10">
                    <div aria-hidden className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                </div>
            </div>
        </section>
    )
}
