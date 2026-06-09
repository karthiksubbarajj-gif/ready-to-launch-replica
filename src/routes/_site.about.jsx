import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Target, Heart, Eye, Award, Users, Globe } from "lucide-react";
import heroTeam from "@/assets/hero-team.jpg";
const Route = createFileRoute("/_site/about")({
  head: () => ({ meta: [{ title: "About Us \u2014 One Call Solutions" }, { name: "description", content: "Learn about One Call Solutions \u2014 our mission, vision, and team." }] }),
  component: AboutPage
});
function AboutPage() {
  return <>
      <PageHero eyebrow="About Us" title="We Build. We Manage." highlight="We Grow." description="A team of growth specialists, marketers and operators helping ambitious brands scale across India." />
      <section className="container-page py-16 grid lg:grid-cols-2 gap-10 items-center">
        <img src={heroTeam} alt="Team" className="rounded-3xl ring-glow-soft" width={1280} height={896} />
        <div>
          <div className="text-xs font-bold tracking-[0.25em] text-orange uppercase">Our Story</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">From a single call to a <span className="text-orange">growth engine</span></h2>
          <p className="mt-5 text-muted-foreground">One Call Solutions started with a simple idea — make growth easier for businesses. Today we power 100+ brands across marketing, manpower, campaigns and technology.</p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[{ v: "500+", l: "Projects" }, { v: "100+", l: "Clients" }, { v: "1000+", l: "Workforce" }].map((s) => <div key={s.l} className="rounded-xl bg-surface border border-border p-4 text-center">
                <div className="text-2xl font-extrabold text-orange">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>)}
          </div>
        </div>
      </section>
      <section className="container-page py-10 grid md:grid-cols-3 gap-5">
        {[
    { i: Target, t: "Mission", d: "Empower every business with end-to-end growth solutions.", c: "gradient-orange" },
    { i: Eye, t: "Vision", d: "To be India's most trusted growth partner across industries.", c: "gradient-purple" },
    { i: Heart, t: "Values", d: "Integrity, ownership, speed and customer obsession.", c: "gradient-cyan" }
  ].map((x) => <div key={x.t} className="rounded-2xl bg-surface border border-border p-6">
            <div className={`h-12 w-12 grid place-items-center rounded-xl ${x.c} text-white mb-4`}><x.i className="h-5 w-5" /></div>
            <h3 className="font-bold text-lg mb-2">{x.t}</h3>
            <p className="text-sm text-muted-foreground">{x.d}</p>
          </div>)}
      </section>
      <section className="container-page py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">Why <span className="text-orange">Choose Us</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
    { i: Award, t: "Award Winning", d: "Recognized excellence in execution." },
    { i: Users, t: "Expert Team", d: "Specialists across every growth lever." },
    { i: Globe, t: "Pan-India Reach", d: "Workforce active in 50+ cities." },
    { i: Heart, t: "Client First", d: "98% client retention rate." }
  ].map((x) => <div key={x.t} className="rounded-2xl bg-surface border border-border p-5 hover:border-orange/60 transition">
              <x.i className="h-6 w-6 text-orange mb-3" />
              <h3 className="font-bold mb-1">{x.t}</h3>
              <p className="text-sm text-muted-foreground">{x.d}</p>
            </div>)}
        </div>
      </section>
    </>;
}
export {
  Route
};
