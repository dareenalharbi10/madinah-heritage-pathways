import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, btnAccent, btnCls } from "@/components/SiteLayout";
import { TourCard } from "@/components/TourCard";
import { useLang } from "@/lib/i18n";
import { images, tours, reviews, brand } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "وجهتك | جولات المدينة المنورة — Wjhatak Madinah Tours" },
      { name: "description", content: "احجز جولات المعالم الدينية والتاريخية في المدينة المنورة. Book religious and historical tours in Madinah." },
      { property: "og:title", content: "وجهتك | جولات المدينة المنورة — Wjhatak Madinah Tours" },
      { property: "og:description", content: "احجز جولات المعالم الدينية والتاريخية في المدينة المنورة. Book religious and historical tours in Madinah." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useLang();
  return (
    <SiteLayout>
      <section className="relative isolate min-h-[80vh] overflow-hidden">
        <img src={images.hero} alt="" width={1600} height={1008} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-end px-4 pb-16 text-deep-foreground">
          <span className="font-display text-xl text-accent">{t(brand)}</span>
          <h1 className="mt-2 max-w-3xl text-4xl leading-tight md:text-6xl">
            {t({ ar: "اكتشف المدينة المنورة بروحٍ وتاريخ", en: "Discover Madinah, its spirit and history" })}
          </h1>
          <p className="mt-4 max-w-xl opacity-90">
            {t({ ar: "جولات منظمة إلى المسجد النبوي وقباء وجبل أحد والمساجد السبعة مع مرشدين معتمدين.", en: "Guided tours to the Prophet's Mosque, Quba, Mount Uhud and the Seven Mosques with certified guides." })}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/booking" className={btnAccent}>{t({ ar: "احجز جولتك", en: "Book your tour" })}</Link>
            <Link to="/tours" className="inline-flex items-center rounded-full border border-deep-foreground/50 px-6 py-3">{t({ ar: "تصفح الجولات", en: "Browse tours" })}</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl text-primary">{t({ ar: "أبرز الجولات", en: "Featured tours" })}</h2>
          <Link to="/tours" className="text-sm text-muted-foreground hover:text-primary">{t({ ar: "عرض الكل", en: "View all" })}</Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.slice(0, 3).map((x) => <TourCard key={x.id} tour={x} />)}
        </div>
      </section>

      <section className="bg-deep text-deep-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure key={i}>
              <div className="text-accent">{"★".repeat(r.rating)}</div>
              <blockquote className="mt-3 text-lg">“{t(r.comment)}”</blockquote>
              <figcaption className="mt-2 text-sm opacity-70">{t(r.name)}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 text-center">
        <h2 className="text-3xl text-primary">{t({ ar: "عرض الشتاء: خصم ٢٠٪ للعائلات", en: "Winter offer: 20% off for families" })}</h2>
        <Link to="/booking" className={`${btnCls} mt-6`}>{t({ ar: "احجز الآن", en: "Book now" })}</Link>
      </section>
    </SiteLayout>
  );
}
