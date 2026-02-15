import Link from 'next/link'
import { ArrowRight, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const footerLinks = [
    {
        group: 'Pages',
        items: [
            { title: 'Home', href: '/' },
            { title: 'Portfolio', href: '/portfolio' },
            { title: 'Services', href: '/services' },
            { title: 'Industries', href: '/industries' },
        ],
    },
    {
        group: 'Company',
        items: [
            { title: 'About', href: '/about' },
            { title: 'Contact', href: '/contact' },
        ],
    },
    {
        group: 'Legal',
        items: [
            { title: 'Privacy', href: '/privacy' },
            { title: 'Terms', href: '/terms' },
        ],
    },
]

const socials = [
    { label: 'X', href: '#', icon: Twitter },
    { label: 'LinkedIn', href: '#', icon: Linkedin },
    { label: 'Instagram', href: '#', icon: Instagram },
    { label: 'YouTube', href: '#', icon: Youtube },
]

export default function FooterSection() {
    return (
        <footer className="relative overflow-hidden bg-[#0A211F] text-[#E9F3E6]">
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#8AF7B7]/18 blur-3xl" />
                <div className="absolute -right-24 top-28 h-80 w-80 rounded-full bg-white/8 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#8AF7B7]/10 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6 pt-16">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_120px_-80px_rgba(0,0,0,.95)] backdrop-blur md:p-10">
                    <div aria-hidden className="absolute inset-0">
                        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#8AF7B7]/14 blur-3xl" />
                        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-white/8 blur-3xl" />
                    </div>

                    <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
                        <div className="space-y-3 lg:col-span-7">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-[#E9F3E6]/70">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#8AF7B7]" />
                                Premium AI video production
                            </div>
                            <h3 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                                Ready to ship your next video—fast, consistent, and on-brand?
                            </h3>
                            <p className="max-w-2xl text-sm leading-relaxed text-[#E9F3E6]/70 md:text-base">
                                Ads, explainers, onboarding, training—SynthFlow blends human storytelling with an AI production system
                                built for quality and speed.
                            </p>

                            <div className="flex flex-wrap gap-3 pt-3">
                                <Button
                                    asChild
                                    className="h-11 rounded-full bg-[#8AF7B7] px-6 text-[#0A211F] hover:bg-[#8AF7B7]/90"
                                >
                                    <Link href="/contact">
                                        Get a quote <ArrowRight className="ml-2 size-4" />
                                    </Link>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    className="h-11 rounded-full border-white/15 bg-white/0 px-6 text-[#E9F3E6] hover:bg-white/10 hover:text-[#E9F3E6]"
                                >
                                    <Link href="/portfolio">View portfolio</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                                <p className="text-sm font-medium text-[#E9F3E6]">Get updates</p>
                                <p className="mt-1 text-xs leading-relaxed text-[#E9F3E6]/65">
                                    New work drops, templates, and production tips. No spam.
                                </p>

                                <form className="mt-4 flex gap-2">
                                    <Input
                                        type="email"
                                        required
                                        placeholder="you@company.com"
                                        className="h-11 rounded-full border-white/10 bg-white/5 text-[#E9F3E6] placeholder:text-[#E9F3E6]/45 focus-visible:ring-[#8AF7B7]/40"
                                    />
                                    <Button
                                        type="submit"
                                        className="h-11 rounded-full bg-[#0A211F] px-5 text-[#8AF7B7] ring-1 ring-white/10 hover:bg-[#0A211F]/85"
                                    >
                                        Subscribe
                                    </Button>
                                </form>

                                <p className="mt-3 text-[11px] text-[#E9F3E6]/55">
                                    By subscribing, you agree to our{' '}
                                    <Link className="underline underline-offset-4 hover:opacity-80" href="/privacy">
                                        privacy policy
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid gap-10 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <Link href="/" className="inline-flex items-center gap-3" aria-label="SynthFlow home">
                            <span className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-[#8AF7B7]">
                                <span className="text-sm font-semibold">SF</span>
                            </span>
                            <div>
                                <div className="text-base font-semibold tracking-tight text-[#8AF7B7]">SynthFlow</div>
                                <div className="text-xs text-[#E9F3E6]/60">Human creativity. AI acceleration.</div>
                            </div>
                        </Link>

                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#E9F3E6]/70">
                            A portfolio-first studio for premium AI videos—crafted with strong scripts, clean motion, and a repeatable
                            workflow that scales.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {socials.map((s) => {
                                const Icon = s.icon
                                return (
                                    <Link
                                        key={s.label}
                                        href={s.href}
                                        aria-label={s.label}
                                        className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-[#E9F3E6]/70 transition hover:border-[#8AF7B7]/40 hover:text-[#8AF7B7] hover:bg-white/10"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon className="size-5" />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    <div className="md:col-span-7">
                        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                            {footerLinks.map((group) => (
                                <div key={group.group} className="space-y-4">
                                    <p className="text-sm font-semibold text-[#E9F3E6]">{group.group}</p>
                                    <div className="space-y-3">
                                        {group.items.map((item) => (
                                            <Link
                                                key={item.title}
                                                href={item.href}
                                                className="block text-sm text-[#E9F3E6]/65 transition hover:text-[#8AF7B7]"
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div className="text-sm">
                                    <p className="font-medium text-[#E9F3E6]">Contact</p>
                                    <p className="text-[#E9F3E6]/65"><Link href={"mailto:hello@synthflow.com"}>hello@synthflow.com</Link> · Karachi, PK</p>
                                </div>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="h-10 rounded-full bg-[#D8F782] px-5 font-medium text-[#0A211F] hover:bg-[#CFF06F]"
                                >
                                    <Link href="/contact">Start a project</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-7">
                    <p className="text-xs text-[#E9F3E6]/55">
                        © {new Date().getFullYear()} SynthFlow. All rights reserved.
                    </p>
                    <div className="flex gap-5 text-xs">
                        <Link className="text-[#E9F3E6]/55 hover:text-[#8AF7B7]" href="/privacy">
                            Privacy
                        </Link>
                        <Link className="text-[#E9F3E6]/55 hover:text-[#8AF7B7]" href="/terms">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
