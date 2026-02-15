import Wrapper from '@/app/Wrapper'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import HeroSection from '@/components/HeroSection'
import { ArrowRight } from 'lucide-react'

export default function ContactPage() {
    return (
        <Wrapper>
            <HeroSection
                badge="Contact SynthFlow"
                heading="Let’s talk about your next video."
                description="Share your goal, timeline, and references. We’ll reply with a clear plan, pricing options, and next steps."
                primaryButton={{ label: 'Start a request', href: '#contact-form' }}
                secondaryButton={{ label: 'View portfolio', href: '/portfolio' }}
            />

            <main className="bg-[#F7F9F2] text-[#0A211F]">
                <section id="contact-form" className="mx-auto max-w-6xl px-6 py-14 md:py-20">
                    <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                        <div className="space-y-4 lg:col-span-5">
                            <p className="text-sm font-semibold uppercase tracking-wide text-[#0A211F]/60">
                                Contact Us
                            </p>
                            <h1 className="text-balance text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
                                Planning AI-powered video content for your business?
                            </h1>
                            <p className="max-w-xl text-base text-[#0A211F]/70 md:text-lg">
                                We’d love to hear about it. Share your goals and timeline—then we’ll respond with a clear proposal.
                            </p>

                            <div className="mt-8 rounded-3xl border border-black/10 bg-white/70 p-6">
                                <p className="text-sm font-semibold">Prefer to speak directly?</p>
                                <p className="mt-2 text-sm leading-relaxed text-[#0A211F]/70">
                                    If you’d rather schedule a call, you can book a consultation at a time that works for you.
                                </p>
                                <div className="mt-5 flex flex-wrap gap-3">
                                    <Button
                                        asChild
                                        className="h-11 md:w-auto w-full rounded-full bg-[#0A211F] px-6 text-[#8AF7B7] hover:bg-[#0A211F]/90"
                                    >
                                        <Link href="#">
                                            Book a Consultation
                                        </Link>
                                    </Button>

                                    <Button
                                        asChild
                                        variant="outline"
                                        className="h-11 md:w-auto w-full rounded-full border-black/10 bg-white px-6 text-[#0A211F] hover:bg-black/5"
                                    >
                                        <Link href="mailto:TBD">Email us at: TBD</Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-black/10 bg-white/70 p-6">
                                <p className="text-sm font-semibold">What happens next?</p>
                                <ol className="mt-3 space-y-2 text-sm text-[#0A211F]/70">
                                    <li className="flex gap-2">
                                        <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-black/5 text-xs font-semibold">
                                            1
                                        </span>
                                        <span>We review your project details.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-black/5 text-xs font-semibold">
                                            2
                                        </span>
                                        <span>We may schedule a short discovery call.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-black/5 text-xs font-semibold">
                                            3
                                        </span>
                                        <span>You receive a clear proposal and timeline.</span>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="rounded-2xl">
                                <Card className="rounded-[22px] border-black/10 bg-white shadow-[0_18px_60px_-55px_rgba(0,0,0,.35)]">
                                    <CardHeader>
                                        <CardTitle>Start a Conversation</CardTitle>
                                        <CardDescription>
                                            Required fields are marked with <span className="text-red-500">*</span>
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="mt-2">
                                        <form className="space-y-6">
                                            <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
                                                <div className="col-span-2">
                                                    <Label htmlFor="fullName">
                                                        Full Name <span className="text-red-500">*</span>
                                                    </Label>
                                                    <Input
                                                        id="fullName"
                                                        required
                                                        className="mt-2 h-10 bg-white shadow-none"
                                                        placeholder="Your full name"
                                                        autoComplete="name"
                                                    />
                                                </div>

                                                <div className="col-span-2">
                                                    <Label htmlFor="company">Company Name (Optional)</Label>
                                                    <Input
                                                        id="company"
                                                        className="mt-2 h-10 bg-white shadow-none"
                                                        placeholder="Company / brand"
                                                        autoComplete="organization"
                                                    />
                                                </div>

                                                <div className="col-span-2">
                                                    <Label htmlFor="email">
                                                        Work Email <span className="text-red-500">*</span>
                                                    </Label>
                                                    <Input
                                                        id="email"
                                                        required
                                                        type="email"
                                                        className="mt-2 h-10 bg-white shadow-none"
                                                        placeholder="you@company.com"
                                                        autoComplete="email"
                                                    />
                                                </div>

                                                <div className="col-span-2">
                                                    <Label htmlFor="projectType">
                                                        Project Type <span className="text-red-500">*</span>
                                                    </Label>
                                                    <select
                                                        id="projectType"
                                                        required
                                                        className="mt-2 h-10 w-full rounded-md border border-input bg-white px-3 text-sm shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A211F]/15"
                                                        defaultValue=""
                                                    >
                                                        <option value="" disabled>
                                                            Select a project type
                                                        </option>
                                                        <option value="Training & E-Learning">Training & E-Learning</option>
                                                        <option value="Marketing & Promotional">Marketing & Promotional</option>
                                                        <option value="Client Education">Client Education</option>
                                                        <option value="Multilingual Production">Multilingual Production</option>
                                                        <option value="Ongoing Video Systems">Ongoing Video Systems</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>

                                                <div className="col-span-2">
                                                    <Label htmlFor="details">
                                                        Project Details <span className="text-red-500">*</span>
                                                    </Label>
                                                    <Textarea
                                                        id="details"
                                                        required
                                                        className="mt-2 lg:min-h-28 bg-white shadow-none"
                                                        placeholder="Tell us your goals, audience, deliverables, timeline, and any reference links."
                                                    />
                                                </div>
                                            </div>

                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full rounded-full bg-[#0A211F] text-[#8AF7B7] hover:bg-[#0A211F]/90"
                                            >
                                                Request Proposal
                                                <ArrowRight />
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Wrapper>
    )
}
