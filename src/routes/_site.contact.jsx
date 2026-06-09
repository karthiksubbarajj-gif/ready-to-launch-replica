import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Mail, MapPin, Phone, Send } from "lucide-react";
const Route = createFileRoute("/_site/contact")({
  head: () => ({ meta: [{ title: "Contact Us \u2014 One Call Solutions" }, { name: "description", content: "Get in touch with One Call Solutions for growth, marketing or staffing." }] }),
  component: ContactPage
});
function ContactPage() {
  return <>
      <PageHero eyebrow="Let's Talk" title="Get in" highlight="Touch" description="Tell us about your goals. We'll get back within one business day." />
      <section className="container-page py-14 grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {[
    { i: Phone, t: "Phone", v: "+91 123 456 7890", c: "gradient-orange" },
    { i: Mail, t: "Email", v: "info@onecallsolutions.com", c: "gradient-purple" },
    { i: MapPin, t: "Office", v: "Bangalore, Karnataka, India", c: "gradient-cyan" }
  ].map((x) => <div key={x.t} className="rounded-2xl bg-surface border border-border p-5 flex items-center gap-4">
              <div className={`h-12 w-12 grid place-items-center rounded-xl ${x.c} text-white shrink-0`}><x.i className="h-5 w-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">{x.t}</div>
                <div className="font-semibold">{x.v}</div>
              </div>
            </div>)}
        </div>
        <form className="lg:col-span-3 rounded-2xl bg-surface border border-border p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Your Name" placeholder="John Doe" />
            <Field label="Business Name" placeholder="Acme Inc." />
            <Field label="Email" placeholder="you@company.com" />
            <Field label="Phone" placeholder="+91 ..." />
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Message</label>
            <textarea rows={5} placeholder="Tell us about your project..." className="mt-1 w-full rounded-lg bg-surface-2 border border-border px-3 py-2.5 text-sm outline-none focus:border-orange" />
          </div>
          <button className="inline-flex items-center gap-2 rounded-full gradient-orange px-6 py-3 text-sm font-semibold text-background">
            Send Message <Send className="h-4 w-4" />
          </button>
        </form>
      </section>
    </>;
}
function Field({ label, placeholder }) {
  return <div>
      <label className="text-xs font-semibold text-muted-foreground">{label}</label>
      <input placeholder={placeholder} className="mt-1 w-full rounded-lg bg-surface-2 border border-border px-3 py-2.5 text-sm outline-none focus:border-orange" />
    </div>;
}
export {
  Route
};
