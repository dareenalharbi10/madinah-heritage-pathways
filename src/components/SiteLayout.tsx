import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { useLang } from "@/lib/i18n";
import { brand, nav } from "@/lib/content";

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex rounded-full border border-border bg-card p-0.5 text-sm">
      {(["ar", "en"] as const).map((l) => (
        <button key={l} onClick={() => setLang(l)}
          className={`rounded-full px-3 py-1 transition ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
          {l === "ar" ? "عربي" : "EN"}
        </button>
      ))}
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="font-display text-2xl text-primary">{t(brand)}</Link>
          <nav className="hidden gap-5 text-sm lg:flex">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-foreground/80 hover:text-primary" activeProps={{ className: "text-primary font-semibold" }} activeOptions={{ exact: true }}>
                {t(n.label)}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LangToggle />
            <button className="rounded-md border border-border px-3 py-1.5 text-sm lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
          </div>
        </div>
        {open && (
          <nav className="grid border-t border-border px-4 py-2 lg:hidden">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-foreground/80" activeProps={{ className: "text-primary font-semibold" }} activeOptions={{ exact: true }}>
                {t(n.label)}
              </Link>
            ))}
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="mt-20 bg-deep text-deep-foreground">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl text-accent">{t(brand)}</div>
            <p className="mt-2 text-sm opacity-80">{t({ ar: "رفيقك لاكتشاف المدينة المنورة", en: "Your companion to discover Madinah" })}</p>
          </div>
          <div className="text-sm opacity-80">
            <div>📍 {t({ ar: "المدينة المنورة، المملكة العربية السعودية", en: "Madinah, Saudi Arabia" })}</div>
            <div className="mt-1" dir="ltr">📞 +966 50 000 0000</div>
            <div className="mt-1">✉️ info@wjhatak.sa</div>
          </div>
          <div className="text-sm opacity-60 md:text-end">© 2026 {t(brand)}</div>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="pattern-bg border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-4xl text-primary md:text-5xl">{title}</h1>
        {sub && <p className="mt-3 max-w-2xl text-muted-foreground">{sub}</p>}
      </div>
    </section>
  );
}

export const inputCls = "w-full rounded-lg border border-input bg-card px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring";
export const btnCls = "inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-soft transition hover:opacity-90";
export const btnAccent = "inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-medium text-accent-foreground transition hover:opacity-90";
