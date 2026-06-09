import { Link } from "@tanstack/react-router";
import { Menu, Phone, Sun, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services", hasMenu: true },
  { to: "/projects", label: "Projects" },
  { to: "/community", label: "Community" },
  { to: "/courses", label: "Courses" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact Us" }
];
function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="shrink-0"><Logo /></Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => <Link
    key={n.to}
    to={n.to}
    className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-orange transition-colors flex items-center gap-1"
    activeProps={{ className: "px-3 py-2 text-sm font-semibold text-orange flex items-center gap-1" }}
    activeOptions={{ exact: n.to === "/" }}
  >
              {n.label}
              {n.hasMenu && <ChevronDown className="h-3.5 w-3.5" />}
            </Link>)}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <button className="h-9 w-9 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-orange transition-colors" aria-label="Theme">
            <Sun className="h-4 w-4" />
          </button>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full gradient-orange px-5 py-2.5 text-sm font-semibold text-background shadow-lg shadow-orange/30 hover:opacity-95 transition">
            <Phone className="h-4 w-4" /> Let's Talk
          </Link>
        </div>
        <button className="lg:hidden h-10 w-10 grid place-items-center rounded-md border border-border" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && <div className="lg:hidden border-t border-border/50 bg-background">
          <div className="container-page py-4 flex flex-col gap-1">
            {nav.map((n) => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-sm font-medium" activeProps={{ className: "py-2 text-sm font-semibold text-orange" }} activeOptions={{ exact: n.to === "/" }}>
                {n.label}
              </Link>)}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-orange px-5 py-2.5 text-sm font-semibold text-background">
              <Phone className="h-4 w-4" /> Let's Talk
            </Link>
          </div>
        </div>}
    </header>;
}
export {
  Header
};
