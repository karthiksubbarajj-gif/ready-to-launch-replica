import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import blogMarketing from "@/assets/blog-marketing.jpg";
import blogSales from "@/assets/blog-sales.jpg";
import blogAi from "@/assets/blog-ai.jpg";
const Route = createFileRoute("/_site/blog")({
  head: () => ({ meta: [{ title: "Blog \u2014 One Call Solutions" }, { name: "description", content: "Insights and articles on marketing, sales and technology." }] }),
  component: BlogPage
});
const posts = [
  { img: blogMarketing, tag: "Marketing", tc: "bg-orange/20 text-orange", t: "How Digital Marketing Can Grow Your Business", d: "May 25, 2026", r: "5 min" },
  { img: blogSales, tag: "Business", tc: "bg-purple/20 text-purple", t: "Top Strategies to Boost Sales in 2026", d: "May 20, 2026", r: "4 min" },
  { img: blogAi, tag: "Technology", tc: "bg-cyan/20 text-cyan", t: "The Future of AI in Digital Marketing", d: "May 18, 2026", r: "6 min" },
  { img: blogMarketing, tag: "Marketing", tc: "bg-orange/20 text-orange", t: "Building a High-Converting Landing Page", d: "May 12, 2026", r: "7 min" },
  { img: blogSales, tag: "Sales", tc: "bg-pink/20 text-pink", t: "B2B Cold Outreach That Actually Works", d: "May 06, 2026", r: "8 min" },
  { img: blogAi, tag: "Technology", tc: "bg-cyan/20 text-cyan", t: "Using Generative AI for Creative Ads", d: "May 02, 2026", r: "5 min" }
];
function BlogPage() {
  return <>
      <PageHero eyebrow="From Our Blog" title="Latest Insights &" highlight="Articles" description="Practical, no-fluff playbooks from our team." />
      <section className="container-page py-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((p, i) => <article key={i} className="rounded-2xl bg-surface border border-border overflow-hidden group">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img src={p.img} alt={p.t} loading="lazy" width={768} height={512} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
              <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded ${p.tc}`}>{p.tag}</span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg mb-3">{p.t}</h3>
              <div className="text-xs text-muted-foreground">{p.d} • {p.r} read</div>
            </div>
          </article>)}
      </section>
    </>;
}
export {
  Route
};
