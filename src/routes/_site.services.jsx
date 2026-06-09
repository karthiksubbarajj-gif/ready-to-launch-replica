import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Megaphone, UserPlus, Target, Monitor, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
const Route = createFileRoute("/_site/services")({
  head: () => ({ meta: [{ title: "Services \u2014 One Call Solutions" }, { name: "description", content: "Digital marketing, staffing, campaign management, website development, and consulting services." }] }),
  component: ServicesPage
});
const services = [
  { i: Megaphone, t: "Digital Marketing", c: "gradient-purple", items: ["Social Media Marketing", "Google Ads", "SEO Services", "Lead Generation", "Influencer Marketing"] },
  { i: UserPlus, t: "Staffing Solutions", c: "gradient-cyan", items: ["Hiring", "Workforce Deployment", "Vendor Management", "Attendance Tracking", "Payroll"] },
  { i: Target, t: "Campaign Management", c: "gradient-orange", items: ["Brand Promotions", "Field Campaigns", "Event Management", "Product Launches", "OOH Activations"] },
  { i: Monitor, t: "Website Development", c: "gradient-cyan", items: ["Business Websites", "E-commerce", "Landing Pages", "UI/UX Design", "Mobile Apps"] },
  { i: Briefcase, t: "Business Consulting", c: "gradient-purple", items: ["Business Strategy", "Market Research", "Branding", "Growth Planning", "GTM"] },
  { i: GraduationCap, t: "Training & Courses", c: "gradient-pink", items: ["Digital Marketing", "Canva", "Meta Ads", "Freelancing", "Career Mentorship"] }
];
function ServicesPage() {
  return <>
      <PageHero eyebrow="What We Do" title="Our" highlight="Services" description="End-to-end growth solutions — from strategy to execution." />
      <section className="container-page py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => <div key={s.t} className="rounded-2xl bg-surface border border-border p-6 hover:border-orange/60 transition">
            <div className={`h-12 w-12 grid place-items-center rounded-xl ${s.c} text-white mb-4`}><s.i className="h-5 w-5" /></div>
            <h3 className="text-lg font-bold mb-3">{s.t}</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground mb-4">
              {s.items.map((i) => <li key={i} className="flex gap-2"><span className="text-orange">•</span>{i}</li>)}
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-orange">Talk to us <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>)}
      </section>
    </>;
}
export {
  Route
};
