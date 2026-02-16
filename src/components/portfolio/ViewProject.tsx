import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowRight } from "lucide-react"

export function ViewProject() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="cursor-pointer !px-0" variant="link">
                    View project <ArrowRight className="size-4" />
                </Button>
            </DialogTrigger>

            <DialogContent className="!w-[95vw] !max-w-7xl p-0 overflow-hidden">
                <div className="max-h-[85vh] overflow-y-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3">

                        <div className="p-5 lg:p-6">
                            <DialogHeader>
                                <DialogTitle className="text-2xl text-start font-semibold text-[#0A211F]">
                                    Product Explainer Project
                                </DialogTitle>
                            </DialogHeader>

                            <p className="mt-4 text-[15px] leading-relaxed text-[#0A211F]/70">
                                This project focuses on creating a clear and structured product explainer
                                video designed to communicate value within the first 10 seconds.
                                The visual system is minimal, clean, and conversion-focused.
                            </p>

                            <div className="mt-6">
                                <h4 className="text-sm font-semibold uppercase tracking-wide text-[#0A211F]/60">
                                    Categories
                                </h4>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#0A211F] border border-black/10">
                                        Explainer
                                    </span>
                                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#0A211F] border border-black/10">
                                        SaaS
                                    </span>
                                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#0A211F] border border-black/10">
                                        Marketing
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="text-sm font-semibold uppercase tracking-wide text-[#0A211F]/60">
                                    Project Overview
                                </h4>
                                <p className="mt-3 text-[15px] leading-relaxed text-[#0A211F]/70">
                                    The goal was to simplify a complex workflow into an easy-to-follow
                                    narrative. We used strong hooks, clean typography, and
                                    purposeful pacing to maximize retention and engagement.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 md:p-10 lg:col-span-2">
                            <div className="aspect-video w-full overflow-hidden rounded-xl border border-black/10">
                                <video
                                    className="h-full w-full object-cover"
                                    autoPlay
                                    loop
                                    controls
                                    poster="https://res.cloudinary.com/dpkp4hymz/image/upload/v1770115231/Screenshot_2026-02-03_154010_jm7cos.png"
                                >
                                    <source src="https://res.cloudinary.com/dpkp4hymz/video/upload/v1770111509/desktop_ntobyi.mp4" type="video/mp4" />
                                </video>
                            </div>

                            <div className="mt-6">
                                <h3 className="text-lg font-semibold text-[#0A211F]">
                                    Strategy & Execution
                                </h3>
                                <p className="mt-2 text-[15px] leading-relaxed text-[#0A211F]/70">
                                    We structured the script into three main sections: problem,
                                    solution, and value proposition. Each scene reinforces clarity
                                    and removes friction from understanding.
                                </p>
                            </div>

                            <div className="mt-6">
                                <h3 className="text-lg font-semibold text-[#0A211F]">
                                    Results
                                </h3>
                                <p className="mt-2 text-[15px] leading-relaxed text-[#0A211F]/70">
                                    The final video improved onboarding completion rates and
                                    reduced support tickets by clearly explaining the product’s
                                    core features within the first minute.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
