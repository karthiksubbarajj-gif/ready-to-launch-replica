import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Clock, PlayCircle, Star } from "lucide-react";

export const Route = createFileRoute("/_site/courses")({
  head: () => ({ meta: [{ title: "Courses — One Call Solutions" }, { name: "description", content: "Learn digital marketing, Canva, Meta Ads, freelancing and more." }] }),
  component: CoursesPage,
});

const courses = [
  { t: "Digital Marketing Masterclass", lvl: "Beginner", h: "20 hrs", price: "₹2,999", rating: 4.9, c: "gradient-orange" },
  { t: "Social Media Management", lvl: "Beginner", h: "12 hrs", price: "₹1,499", rating: 4.8, c: "gradient-purple" },
  { t: "Meta Ads Pro", lvl: "Intermediate", h: "16 hrs", price: "₹2,499", rating: 4.9, c: "gradient-cyan" },
  { t: "Canva Design Bootcamp", lvl: "Beginner", h: "8 hrs", price: "₹999", rating: 4.7, c: "gradient-pink" },
  { t: "Freelancing 101", lvl: "Beginner", h: "10 hrs", price: "₹1,299", rating: 4.8, c: "gradient-purple" },
  { t: "SEO Fundamentals", lvl: "Intermediate", h: "14 hrs", price: "₹1,999", rating: 4.6, c: "gradient-orange" },
];

function CoursesPage() {
  return (
    <>
      <PageHero eyebrow="Learn & Earn" title="Practical" highlight="Courses" description="Hands-on training designed by industry practitioners." />
      <section className="container-page py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map(c => (
          <div key={c.t} className="rounded-2xl bg-surface border border-border overflow-hidden">
            <div className={`${c.c} h-32 grid place-items-center text-white`}><PlayCircle className="h-12 w-12" /></div>
            <div className="p-5">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                <span>{c.lvl}</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {c.h}</span>
              </div>
              <h3 className="font-bold mb-3">{c.t}</h3>
              <div className="flex items-center justify-between">
                <div className="text-lg font-extrabold text-orange">{c.price}</div>
                <div className="flex items-center gap-1 text-sm"><Star className="h-3.5 w-3.5 fill-orange text-orange" /> {c.rating}</div>
              </div>
              <button className="mt-4 w-full rounded-full gradient-purple text-white py-2.5 text-sm font-semibold">Enroll Now</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
