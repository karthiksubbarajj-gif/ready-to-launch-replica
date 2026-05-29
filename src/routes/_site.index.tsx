import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Play, Mail, Users as UsersIcon, Megaphone, UserPlus, Target, Monitor,
  Briefcase, ChevronLeft, ChevronRight, Star, Rocket, Smile, Headphones, Send, GraduationCap,
} from "lucide-react";
import heroTeam from "@/assets/hero-team.jpg";
import projectCycle from "@/assets/project-cycle.jpg";
import projectWorkforce from "@/assets/project-workforce.jpg";
import projectScooter from "@/assets/project-scooter.jpg";
import projectEvent from "@/assets/project-event.jpg";
import blogMarketing from "@/assets/blog-marketing.jpg";
import blogSales from "@/assets/blog-sales.jpg";
import blogAi from "@/assets/blog-ai.jpg";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "One Call Solutions — We Build. We Manage. We Grow." },
      { name: "description", content: "One Call Solutions helps brands grow with Digital Marketing, Manpower Solutions, Campaigns and more." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Megaphone, color: "gradient-purple", title: "Digital Marketing", items: ["Social Media Marketing", "Google Ads", "SEO Services", "Lead Generation"] },
  { icon: UserPlus, color: "gradient-cyan", title: "Staffing Solutions", items: ["Hiring", "Workforce Deployment", "Vendor Management", "Attendance Tracking"] },
  { icon: Target, color: "gradient-orange", title: "Campaign Management", items: ["Brand Promotions", "Field Campaigns", "Event Management", "Product Launches"] },
  { icon: Monitor, color: "gradient-cyan", title: "Website Development", items: ["Business Websites", "E-commerce", "Landing Pages", "UI/UX Design"] },
  { icon: Briefcase, color: "gradient-purple", title: "Business Consulting", items: ["Business Strategy", "Market Research", "Branding", "Growth Planning"] },
];

const projects = [
  { img: projectCycle, title: "Cycle World Campaign", tag: "Marketing", tagColor: "bg-purple/20 text-purple", items: ["Lead Generation", "Store Promotion", "Social Media Marketing"] },
  { img: projectWorkforce, title: "AWIGN Workforce", tag: "Manpower", tagColor: "bg-cyan/20 text-cyan", items: ["Team Deployment", "Attendance Tracking", "Performance Mgmt."] },
  { img: projectScooter, title: "MotoVolt Promotion", tag: "Campaign", tagColor: "bg-orange/20 text-orange", items: ["Dealer Marketing", "Digital Branding", "Sales Promotion"] },
  { img: projectEvent, title: "Brand Activation", tag: "Events", tagColor: "bg-pink/20 text-pink", items: ["Event Management", "Brand Awareness", "Customer Engagement"] },
];

const stats = [
  { icon: Rocket, color: "gradient-orange", value: "500+", label: "Projects Completed" },
  { icon: Smile, color: "gradient-purple", value: "100+", label: "Happy Clients" },
  { icon: UsersIcon, color: "gradient-cyan", value: "1000+", label: "Workforce Network" },
  { icon: Star, color: "gradient-pink", value: "4.8★", label: "Client Ratings" },
  { icon: Headphones, color: "gradient-purple", value: "24/7", label: "Support" },
];

const blogs = [
  { img: blogMarketing, tag: "Marketing", tagColor: "bg-orange/20 text-orange", title: "How Digital Marketing Can Grow Your Business", date: "May 25, 2026", read: "5 min read" },
  { img: blogSales, tag: "Business", tagColor: "bg-purple/20 text-purple", title: "Top Strategies to Boost Sales in 2026", date: "May 20, 2026", read: "4 min read" },
  { img: blogAi, tag: "Technology", tagColor: "bg-cyan/20 text-cyan", title: "The Future of AI in Digital Marketing", date: "May 18, 2026", read: "6 min read" },
];

const brands = ["awign", "CYCLE WORLD", "MotoVolt", "ROYAL ENFIELD", "DECATHLON", "TATA", "PNB", "SAMSUNG"];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-grid-faint">
        <div className="container-page pt-12 pb-10 md:pt-16 md:pb-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-semibold">
              <span className="text-orange">We Build</span><span className="text-muted-foreground">•</span>
              <span className="text-orange">We Manage</span><span className="text-muted-foreground">•</span>
              <span className="text-orange">We Grow</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-[1.02] tracking-tight">
              Your Growth,<br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #c084fc, #f97316)" }}>Our Mission.</span>
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground">
              One Call Solutions helps brands and businesses grow with Digital Marketing, Manpower Solutions, Campaigns, and more.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full gradient-orange px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-orange/30 hover:opacity-95 transition">
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-surface-2 border border-border px-6 py-3 text-sm font-semibold hover:border-orange/60 transition">
                View Our Projects <Play className="h-3.5 w-3.5 fill-current" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-glow-soft">
              <img src={heroTeam} alt="One Call Solutions team" width={1280} height={896} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-purple/20" />
            </div>
            <div className="absolute -top-4 right-6 rounded-2xl gradient-purple p-4 shadow-xl flex items-center gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-white/20"><Mail className="h-5 w-5" /></div>
              <div><div className="text-xl font-extrabold leading-none">500+</div><div className="text-[11px] opacity-90">Projects Done</div></div>
            </div>
            <div className="absolute bottom-6 -left-3 rounded-2xl bg-surface-2 border border-border p-4 shadow-xl flex items-center gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-xl gradient-cyan text-background"><UsersIcon className="h-5 w-5" /></div>
              <div><div className="text-xl font-extrabold leading-none">1000+</div><div className="text-[11px] text-muted-foreground">Happy Clients</div></div>
            </div>
            <div className="absolute -bottom-2 right-4 rounded-2xl bg-surface-2 border border-border p-4 shadow-xl w-44">
              <div className="text-xs text-muted-foreground">Growth</div>
              <div className="text-2xl font-extrabold text-emerald-400">+200%</div>
              <div className="text-[10px] text-muted-foreground">This Month</div>
              <svg viewBox="0 0 100 30" className="mt-2 w-full h-8 stroke-emerald-400 fill-none"><path d="M0 25 L20 20 L40 22 L60 12 L80 14 L100 4" strokeWidth="2" /></svg>
            </div>
          </div>
        </div>

        {/* BRANDS */}
        <div className="container-page pb-12">
          <div className="rounded-2xl bg-surface-2/60 border border-border px-6 py-5 flex items-center gap-6 overflow-x-auto">
            <div className="shrink-0 text-xs font-semibold">
              <div className="text-foreground">awign</div>
              <div className="text-muted-foreground">Trusted by 100+ Amazing Brands</div>
            </div>
            <div className="flex items-center gap-8 text-muted-foreground text-sm font-bold tracking-wider">
              {brands.slice(1).map((b) => <span key={b} className="shrink-0 hover:text-orange transition">{b}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-16">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-bold tracking-[0.25em] text-orange uppercase">What We Do</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Our <span className="text-orange">Services</span></h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-foreground/80 hover:text-orange flex items-center gap-1">View All Services <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl bg-surface border border-border p-5 hover:border-orange/60 transition">
              <div className={`h-11 w-11 grid place-items-center rounded-xl ${s.color} text-background mb-4`}><s.icon className="h-5 w-5" /></div>
              <h3 className="font-bold mb-3">{s.title}</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {s.items.map((i) => <li key={i} className="flex gap-2"><span className="text-orange">•</span>{i}</li>)}
              </ul>
              <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange">Learn More <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="container-page py-10">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold tracking-[0.25em] text-orange uppercase">Our Projects</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Work We're <span className="text-orange">Proud Of</span></h2>
          </div>
          <Link to="/projects" className="text-sm font-semibold hover:text-orange flex items-center gap-1">View All Projects <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="relative">
          <button className="hidden md:grid absolute -left-3 top-1/2 -translate-y-1/2 h-10 w-10 place-items-center rounded-full bg-surface-2 border border-border z-10"><ChevronLeft className="h-5 w-5" /></button>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((p) => (
              <div key={p.title} className="rounded-2xl overflow-hidden bg-surface border border-border group">
                <div className="aspect-[4/3] overflow-hidden"><img src={p.img} alt={p.title} loading="lazy" width={768} height={512} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" /></div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold">{p.title}</h3>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded ${p.tagColor}`}>{p.tag}</span>
                  </div>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">{p.items.map((i) => <li key={i} className="flex gap-2"><span className="text-orange">•</span>{i}</li>)}</ul>
                  <a className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange">View Case Study <ArrowRight className="h-3.5 w-3.5" /></a>
                </div>
              </div>
            ))}
          </div>
          <button className="hidden md:grid absolute -right-3 top-1/2 -translate-y-1/2 h-10 w-10 place-items-center rounded-full bg-surface-2 border border-border z-10"><ChevronRight className="h-5 w-5" /></button>
        </div>
      </section>

      {/* TESTIMONIALS + LEARN + SOLVE */}
      <section className="container-page py-14 grid lg:grid-cols-3 gap-5">
        <div className="rounded-2xl bg-surface border border-border p-6">
          <div className="text-xs font-bold tracking-[0.25em] text-orange uppercase mb-2">Client Love</div>
          <h3 className="text-2xl font-extrabold mb-5">What Our <span className="text-orange">Clients Say</span></h3>
          <div className="flex gap-1 text-orange mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
          <p className="text-foreground/90">"Excellent team support and campaign execution."</p>
          <p className="mt-2 text-sm text-muted-foreground">– Cycle World</p>
        </div>
        <div className="rounded-2xl bg-surface border border-border p-6">
          <h3 className="text-2xl font-extrabold mb-2"><span className="text-purple">Learn</span> & <span className="text-purple">Earn</span></h3>
          <p className="text-sm text-muted-foreground mb-4">Upgrade your skills with our practical courses.</p>
          <ul className="space-y-1.5 text-sm">
            {["Digital Marketing", "Social Media Management", "Freelancing", "Canva Designing", "Meta Ads"].map((i) => (
              <li key={i} className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-purple" />{i}</li>
            ))}
          </ul>
          <Link to="/courses" className="mt-5 inline-flex rounded-full gradient-purple px-5 py-2.5 text-sm font-semibold text-white">Explore Courses</Link>
        </div>
        <div className="rounded-2xl bg-surface border border-border p-6">
          <h3 className="text-2xl font-extrabold mb-2">We <span className="text-orange">Solve Problems</span></h3>
          <p className="text-sm text-muted-foreground mb-4">Share your business challenge and get expert solutions.</p>
          <form className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="Your Name" className="rounded-lg bg-surface-2 border border-border px-3 py-2.5 text-sm outline-none focus:border-orange" />
              <input placeholder="Business Name" className="rounded-lg bg-surface-2 border border-border px-3 py-2.5 text-sm outline-none focus:border-orange" />
            </div>
            <textarea placeholder="Describe Your Problem" rows={3} className="w-full rounded-lg bg-surface-2 border border-border px-3 py-2.5 text-sm outline-none focus:border-orange" />
            <button className="inline-flex items-center gap-2 rounded-full gradient-orange px-5 py-2.5 text-sm font-semibold text-background">Get Free Consultation <Send className="h-3.5 w-3.5" /></button>
          </form>
        </div>
      </section>

      {/* STATS */}
      <section className="container-page py-6">
        <div className="rounded-2xl border-2 border-orange/60 bg-surface/60 p-6 grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className={`h-12 w-12 grid place-items-center rounded-xl ${s.color} text-white shrink-0`}><s.icon className="h-5 w-5" /></div>
              <div>
                <div className="text-xl font-extrabold leading-none">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG */}
      <section className="container-page py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs font-bold tracking-[0.25em] text-orange uppercase">From Our Blog</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Latest Insights & Articles</h2>
          </div>
          <Link to="/blog" className="text-sm font-semibold hover:text-orange flex items-center gap-1">View All Blogs <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {blogs.map((b) => (
            <article key={b.title} className="rounded-2xl bg-surface border border-border overflow-hidden group">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={b.img} alt={b.title} loading="lazy" width={768} height={512} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded ${b.tagColor}`}>{b.tag}</span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-3">{b.title}</h3>
                <div className="text-xs text-muted-foreground">{b.date} • {b.read}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
