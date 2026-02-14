import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
    return (
        <section className="bg-[#F7F9F2] py-16 text-[#0A211F] md:py-24">
            <div className="mx-auto w-full max-w-(--breakpoint-xl) px-6 xl:px-0">
                <b className="text-sm font-semibold uppercase tracking-wide text-[#0A211F]/60">
                    Contact
                </b>

                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                    Let’s build something great together.
                </h2>

                <p className="mt-3 max-w-2xl text-base text-[#0A211F]/70 sm:text-lg">
                    Tell us what you need—share your goals, timeline, and any references. We’ll reply with next steps and a clear plan.
                </p>

                <div className="mt-14 flex flex-col gap-14 md:gap-10 lg:flex-row">
                    <div className="grid w-full max-w-3xl grid-cols-1 gap-1 rounded-3xl border border-black/10 bg-white/70 p-1 *:rounded-2xl *:border *:border-black/10 *:bg-white *:p-6 sm:grid-cols-2 lg:col-span-2">
                        <div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-[#0A211F] text-[#8AF7B7]">
                                <MailIcon />
                            </div>
                            <h3 className="mt-6 text-xl font-semibold">Email</h3>
                            <p className="my-2.5 text-[#0A211F]/70">
                                Send details and references anytime.
                            </p>
                            <Link className="font-medium text-[#0A211F] underline underline-offset-4 hover:opacity-80" href="mailto:hello@synthflow.com">
                                hello@synthflow.com
                            </Link>
                        </div>

                        <div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-[#0A211F] text-[#8AF7B7]">
                                <MessageCircle />
                            </div>
                            <h3 className="mt-6 text-xl font-semibold">Live chat</h3>
                            <p className="my-2.5 text-[#0A211F]/70">
                                Quick questions? Start a chat.
                            </p>
                            <Link className="font-medium text-[#0A211F] underline underline-offset-4 hover:opacity-80" href="#">
                                Start new chat
                            </Link>
                        </div>

                        <div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-[#0A211F] text-[#8AF7B7]">
                                <MapPinIcon />
                            </div>
                            <h3 className="mt-6 text-xl font-semibold">Location</h3>
                            <p className="my-2.5 text-[#0A211F]/70">
                                Remote-first. Available worldwide.
                            </p>
                            <Link
                                className="font-medium text-[#0A211F] underline underline-offset-4 hover:opacity-80"
                                href="https://map.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Karachi, PK · Global delivery
                            </Link>
                        </div>

                        <div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-[#0A211F] text-[#8AF7B7]">
                                <PhoneIcon />
                            </div>
                            <h3 className="mt-6 text-xl font-semibold">Phone</h3>
                            <p className="my-2.5 text-[#0A211F]/70">
                                Mon–Fri · 10am–6pm
                            </p>
                            <Link className="font-medium text-[#0A211F] underline underline-offset-4 hover:opacity-80" href="tel:+0000000000">
                                +00 000 000 000
                            </Link>
                        </div>
                    </div>

                    <div className="w-full max-w-lg rounded-3xl border border-black/10 bg-white/70 p-1">
                        <Card className="rounded-[22px] border-black/10 bg-white shadow-[0_18px_60px_-55px_rgba(0,0,0,.35)]">
                            <CardHeader>
                                <CardTitle>Request a quote</CardTitle>
                                <CardDescription>
                                    Share your project details. Required fields are marked with *
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="mt-2">
                                <form className="space-y-6">
                                    <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
                                        <div className="col-span-2 sm:col-span-1">
                                            <Label htmlFor="fullName">
                                                Full name <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="fullName"
                                                required
                                                className="mt-2 h-10 bg-white shadow-none"
                                                placeholder="Your name"
                                                autoComplete="name"
                                            />
                                        </div>

                                        <div className="col-span-2 sm:col-span-1">
                                            <Label htmlFor="company">Company / Brand</Label>
                                            <Input
                                                id="company"
                                                className="mt-2 h-10 bg-white shadow-none"
                                                placeholder="Company name"
                                                autoComplete="organization"
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <Label htmlFor="email">
                                                Email <span className="text-red-500">*</span>
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
                                            <Label htmlFor="phone">Phone / WhatsApp</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                className="mt-2 h-10 bg-white shadow-none"
                                                placeholder="+92..."
                                                autoComplete="tel"
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <Label htmlFor="service">
                                                What do you need? <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="service"
                                                required
                                                className="mt-2 h-10 bg-white shadow-none"
                                                placeholder="Ads, explainer, onboarding, training, reels..."
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <Label htmlFor="timeline">
                                                Timeline <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="timeline"
                                                required
                                                className="mt-2 h-10 bg-white shadow-none"
                                                placeholder="When do you need it? (e.g., 7 days, end of month)"
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <Label htmlFor="budget">Estimated budget</Label>
                                            <Input
                                                id="budget"
                                                className="mt-2 h-10 bg-white shadow-none"
                                                placeholder="Optional (helps us recommend the best plan)"
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <Label htmlFor="reference">Reference links</Label>
                                            <Input
                                                id="reference"
                                                className="mt-2 h-10 bg-white shadow-none"
                                                placeholder="YouTube/Drive links, competitor examples, moodboard..."
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <Label htmlFor="message">
                                                Project details <span className="text-red-500">*</span>
                                            </Label>
                                            <Textarea
                                                id="message"
                                                required
                                                className="mt-2 bg-white shadow-none"
                                                placeholder="Tell us about your goal, audience, style, deliverables, and any notes."
                                                rows={6}
                                            />
                                        </div>

                                        <div className="col-span-2 flex items-start gap-3">
                                            <Checkbox id="acceptTerms" required className="mt-1 bg-white" />
                                            <Label htmlFor="acceptTerms" className="text-sm leading-relaxed text-[#0A211F]/75">
                                                I agree to the{' '}
                                                <Link className="underline underline-offset-4 hover:opacity-80" href="/terms">
                                                    terms
                                                </Link>{' '}
                                                and{' '}
                                                <Link className="underline underline-offset-4 hover:opacity-80" href="/privacy">
                                                    privacy policy
                                                </Link>
                                                <span className="text-red-500"> *</span>
                                            </Label>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full rounded-full bg-[#0A211F] text-[#8AF7B7] hover:bg-[#0A211F]/90"
                                    >
                                        Send request
                                    </Button>

                                    <p className="text-center text-xs text-[#0A211F]/55">
                                        We typically reply within 24 hours on business days.
                                    </p>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
