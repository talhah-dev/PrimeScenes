import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="bg-[#F7F9F2] py-16 text-[#0A211F] md:py-24">
            <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-10">
                <h2 className="relative z-10 max-w-2xl text-balance md:text-4xl text-3xl font-medium leading-tight">
                    A repeatable AI video system, built for clarity and scale.
                </h2>

                <div className="grid items-center gap-4 sm:grid-cols-2 lg:gap-10">
                    <div className="relative">
                        <div className="rounded-2xl">
                            <div className="overflow-hidden rounded-xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className="w-full"
                                    alt="AI video workflow preview"
                                    width={1207}
                                    height={929}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative space-y-5">
                        <p className="text-base leading-relaxed text-[#0A211F]/75">
                            We don’t just “generate videos.” We design a workflow that makes AI content feel premium—
                            with strong scripts, natural pacing, clean scenes, and brand consistency from start to finish.
                        </p>

                        <p className="text-base leading-relaxed text-[#0A211F]/75">
                            From one-off campaigns to ongoing content pipelines, SynthFlow helps you ship faster without
                            sacrificing quality—plus multilingual versions when you need to scale globally.
                        </p>

                        <div className="pt-6">
                            <blockquote className="rounded-xl border border-black/10 bg-white p-6 shadow-[0_20px_70px_-55px_rgba(0,0,0,.25)]">
                                <p className="text-[#0A211F]">
                                    “SynthFlow turned our training content into a consistent, scalable video system. The pacing,
                                    visual structure, and localization were on point—and turnaround was fast.”
                                </p>

                                <div className="mt-6 flex items-center justify-between gap-4">
                                    <div className="space-y-1">
                                        <cite className="block text-sm font-medium text-[#0A211F]">Operations Lead</cite>
                                        <span className="block text-xs text-[#0A211F]/60">SaaS Team</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <img
                                            className="h-5 w-fit opacity-80"
                                            src="/clients/nvidia.svg"
                                            alt="Client logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
