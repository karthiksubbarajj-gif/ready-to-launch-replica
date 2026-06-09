import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Youtube } from "lucide-react";
import { Logo } from "./Logo";
function Footer() {
  return <footer className="mt-24 border-t border-border/50 bg-surface/50">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            We help businesses grow with digital solutions and workforce excellence.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full bg-surface-2 border border-border text-orange hover:bg-orange hover:text-background transition" aria-label="social">
                <Icon className="h-4 w-4" />
              </a>)}
          </div>
        </div>
        <FooterCol title="Quick Links" links={[
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/courses", label: "Courses" }
  ]} extra={[{ to: "/blog", label: "Blog" }, { to: "/community", label: "Community" }, { to: "/privacy", label: "Privacy Policy" }, { to: "/terms", label: "Terms & Conditions" }]} />
        <FooterCol title="Our Services" links={[
    { to: "/services", label: "Digital Marketing" },
    { to: "/services", label: "Staffing Solutions" },
    { to: "/services", label: "Campaign Management" },
    { to: "/services", label: "Website Development" },
    { to: "/services", label: "Business Consulting" }
  ]} />
        <div>
          <h4 className="text-sm font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-orange" /> +91 123 456 7890</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-orange" /> info@onecallsolutions.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-orange" /> Bangalore, Karnataka, India</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">Subscribe to our newsletter</p>
          <form className="flex items-center bg-surface-2 border border-border rounded-full p-1">
            <input type="email" placeholder="Enter your email" className="flex-1 bg-transparent px-4 py-2 text-sm outline-none" />
            <button className="h-9 w-9 grid place-items-center rounded-full gradient-orange text-background" aria-label="Subscribe"><Send className="h-4 w-4" /></button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="container-page py-5 text-xs text-muted-foreground">
          © 2026 One Call Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>;
}
function FooterCol({ title, links, extra }) {
  return <div>
      <h4 className="text-sm font-semibold mb-4">{title}</h4>
      <div className={extra ? "grid grid-cols-2 gap-x-4 gap-y-2" : "space-y-2"}>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {links.map((l) => <li key={l.label}><Link to={l.to} className="hover:text-orange transition">{l.label}</Link></li>)}
        </ul>
        {extra && <ul className="space-y-2 text-sm text-muted-foreground">
            {extra.map((l) => <li key={l.label}><Link to={l.to} className="hover:text-orange transition">{l.label}</Link></li>)}
          </ul>}
      </div>
    </div>;
}
export {
  Footer
};
