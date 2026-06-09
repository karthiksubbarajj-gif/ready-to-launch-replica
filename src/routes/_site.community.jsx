import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Users, MessageCircle, Calendar, Award } from "lucide-react";
const Route = createFileRoute("/_site/community")({
  head: () => ({ meta: [{ title: "Community \u2014 One Call Solutions" }, { name: "description", content: "Join the One Call community of marketers, freelancers and operators." }] }),
  component: CommunityPage
});
function CommunityPage() {
  return <>
      <PageHero eyebrow="Join Us" title="The One Call" highlight="Community" description="A growing tribe of 5,000+ marketers, designers, freelancers and field professionals." />
      <section className="container-page py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
    { i: Users, t: "5,000+ Members", d: "Active across India.", c: "gradient-orange" },
    { i: MessageCircle, t: "Weekly Discussions", d: "Marketing, hiring & growth.", c: "gradient-purple" },
    { i: Calendar, t: "Monthly Events", d: "Meetups & masterclasses.", c: "gradient-cyan" },
    { i: Award, t: "Top Talent", d: "Be discovered by brands.", c: "gradient-pink" }
  ].map((x) => <div key={x.t} className="rounded-2xl bg-surface border border-border p-5">
            <div className={`h-11 w-11 grid place-items-center rounded-xl ${x.c} text-white mb-3`}><x.i className="h-5 w-5" /></div>
            <h3 className="font-bold mb-1">{x.t}</h3>
            <p className="text-sm text-muted-foreground">{x.d}</p>
          </div>)}
      </section>
      <section className="container-page py-10">
        <div className="rounded-3xl gradient-purple p-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold">Ready to join?</h2>
          <p className="mt-3 opacity-90">Become part of India's most active growth community.</p>
          <form className="mt-6 max-w-md mx-auto flex bg-white/10 rounded-full p-1 border border-white/30">
            <input placeholder="Your email" className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder-white/70" />
            <button className="rounded-full bg-white text-purple px-5 py-2 text-sm font-semibold">Join Now</button>
          </form>
        </div>
      </section>
    </>;
}
export {
  Route
};
