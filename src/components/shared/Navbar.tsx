import { useState } from "react";
import logoFull from '../../assets/logo/logo-full.svg';
import logoIcon from '../../assets/logo/logo-icon.svg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-background border-b border-border shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between h-full px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2" aria-label="Home">
          <img src={logoFull} alt="Verbaac Connect Logo" className="h-8 hidden md:block" />
          <img src={logoIcon} alt="Verbaac Connect Icon" className="h-8 md:hidden" />
        </a>
        {/* Center nav links */}
        <nav className="hidden md:flex gap-6 text-base font-medium text-muted-foreground">
          <a href="/housing" aria-label="Housing">Housing</a>
          <a href="/marketplace" aria-label="Marketplace">Marketplace</a>
          <a href="/roommates" aria-label="Roommates">Roommates</a>
          <a href="/agreements" aria-label="Agreements">Agreements</a>
          <a href="/dashboard" aria-label="Dashboard">Dashboard</a>
        </nav>
        {/* Profile/actions */}
        <div className="flex items-center gap-2">
          <a href="/login" className="px-4 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/80 transition" aria-label="Login">Login</a>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
        </button>
      </div>
      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-lg animate-in fade-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4 px-6 py-4">
            <a href="/housing" aria-label="Housing" onClick={() => setMenuOpen(false)}>Housing</a>
            <a href="/marketplace" aria-label="Marketplace" onClick={() => setMenuOpen(false)}>Marketplace</a>
            <a href="/roommates" aria-label="Roommates" onClick={() => setMenuOpen(false)}>Roommates</a>
            <a href="/agreements" aria-label="Agreements" onClick={() => setMenuOpen(false)}>Agreements</a>
            <a href="/dashboard" aria-label="Dashboard" onClick={() => setMenuOpen(false)}>Dashboard</a>
            <a href="/login" className="px-4 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/80 transition" aria-label="Login" onClick={() => setMenuOpen(false)}>Login</a>
          </div>
        </nav>
      )}
    </header>
  );
}