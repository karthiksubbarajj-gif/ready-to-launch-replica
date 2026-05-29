import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import projectCycle from "@/assets/project-cycle.jpg";
import projectWorkforce from "@/assets/project-workforce.jpg";
import projectScooter from "@/assets/project-scooter.jpg";
import projectEvent from "@/assets/project-event.jpg";

export const Route = createFileRoute("/_site/projects")({
  head: () => ({ meta: [{ title: "Projects — One Call Solutions" }, { name: "description", content: "Selected work from One Call Solutions across marketing, manpower and events." }] }),
  component: ProjectsPage,
});

const projects = [
  { img: projectCycle, title: "Cycle World Campaign", tag: "Marketing", tagColor: "bg-purple/20 text-purple", desc: "Pan-India lead generation campaign delivering 12,000+ qualified store walk-ins." },
  { img: projectWorkforce, title: "AWIGN Workforce", tag: "Manpower", tagColor: "bg-cyan/20 text-cyan", desc: "Deployed 800+ field associates across 24 cities with real-time attendance." },
  { img: projectScooter, title: "MotoVolt Promotion", tag: "Campaign", tagColor: "bg-orange/20 text-orange", desc: "Dealer marketing + digital branding for new EV scooter launch." },
  { img: projectEvent, title: "Brand Activation", tag: "Events", tagColor: "bg-pink/20 text-pink", desc: "Live brand activation reaching 50,000+ attendees across 8 cities." },
  { img: projectCycle, title: "Royal Enfield Ride", tag: "Events", tagColor: "bg-pink/20 text-pink", desc: "Community ride coordination, hospitality and on-ground execution." },
  { img: projectWorkforce, title: "Decathlon Staffing", tag: "Manpower", tagColor: "bg-cyan/20 text-cyan", desc: "Seasonal workforce ramp-up across 30 retail stores nationwide." },
];

function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Our Projects" title="Work We're" highlight="Proud Of" description="Real outcomes for ambitious brands across India." />
      <section className="container-page py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <article key={i} className="rounded-2xl overflow-hidden bg-surface border border-border group">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" width={768} height={512} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold">{p.title}</h3>
                <span className={`text-[10px] font-bold px-2 py-1 rounded ${p.tagColor}`}>{p.tag}</span>
              </div>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
