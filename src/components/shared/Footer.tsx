import logoFull from '../../assets/logo/logo-full.svg';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-2">
          <img src={logoFull} alt="Verbaac Connect Logo" className="h-8" />
          <span className="font-bold text-xl text-primary">Verbaac Connect</span>
        </div>
        <nav className="flex gap-4 text-muted-foreground text-sm">
          <a href="/about" aria-label="About">About</a>
          <a href="/faq" aria-label="FAQ">FAQ</a>
          <a href="/terms" aria-label="Terms of Service">Terms</a>
          <a href="/privacy" aria-label="Privacy Policy">Privacy</a>
        </nav>
        <div className="text-xs text-muted-foreground text-center md:text-right">
          &copy; {new Date().getFullYear()} Verbaac Connect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}