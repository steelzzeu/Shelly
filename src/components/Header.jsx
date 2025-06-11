import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Departments", path: "/departments" },
  { name: "Server", path: "/server" },
  { name: "Commands", path: "/commands" },
  { name: "FAQ", path: "/faq" },
  { name: "CAD", path: "/cad" },
  { name: "Resources", path: "/resources" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-ssrp-navy/90 backdrop-blur border-b border-ssrp-navy ssrp-header-glow transition-shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          {/* SSRP Logo Placeholder */}
          <div className="w-10 h-10 bg-gradient-to-tr from-ssrp-navy to-accent rounded-full flex items-center justify-center border-2 border-accent shadow-lg">
            <span className="text-2xl font-black tracking-widest text-accent">S</span>
          </div>
          <span className="font-extrabold text-white tracking-tight text-lg group-hover:text-accent transition-colors">Sunshine State RP</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                "uppercase tracking-wide font-semibold px-2 py-1 rounded transition-colors " +
                (isActive ? "text-accent" : "text-white hover:text-accent")
              }
              end={link.path === '/'}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Search bar */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Command / Postal Search"
            className="pl-3 pr-8 py-1 bg-[#101726] text-white rounded border border-[#20304b] outline-none focus:ring-2 focus:ring-accent placeholder:text-gray-400 text-sm w-56 transition"
            aria-label="Command or Postal Search"
          />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded hover:bg-ssrp-navy/80 focus:outline-none"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Open navigation menu"
        >
          <span className="sr-only">Open navigation</span>
          <svg width="32" height="32" fill="none" className="text-accent">
            <rect y="7" width="32" height="3" rx="1.5" fill="currentColor"/>
            <rect y="15" width="32" height="3" rx="1.5" fill="currentColor"/>
            <rect y="23" width="32" height="3" rx="1.5" fill="currentColor"/>
          </svg>
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm flex flex-col">
          <div className="flex-1" onClick={() => setMobileOpen(false)} />
          <nav className="bg-ssrp-navy/95 w-64 h-full absolute top-0 right-0 shadow-ssrp-card p-6 flex flex-col gap-4">
            <button
              className="self-end mb-4"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation"
            >
              <svg width="28" height="28" fill="none">
                <line x1="6" y1="6" x2="22" y2="22" stroke="#f97316" strokeWidth="2" />
                <line x1="22" y1="6" x2="6" y2="22" stroke="#f97316" strokeWidth="2" />
              </svg>
            </button>
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  "uppercase font-bold tracking-wide text-lg py-2 px-2 rounded transition-colors " +
                  (isActive ? "text-accent" : "text-white hover:text-accent")
                }
                onClick={() => setMobileOpen(false)}
                end={link.path === '/'}
              >
                {link.name}
              </NavLink>
            ))}
            <input
              type="text"
              placeholder="Command / Postal Search"
              className="pl-3 pr-8 py-2 bg-[#101726] text-white rounded border border-[#20304b] outline-none focus:ring-2 focus:ring-accent placeholder:text-gray-400 text-base mt-4"
              aria-label="Command or Postal Search"
            />
          </nav>
        </div>
      )}
    </header>
  );
}