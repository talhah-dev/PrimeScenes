import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

export default function ContactForm() {
  return (
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
  )
}
