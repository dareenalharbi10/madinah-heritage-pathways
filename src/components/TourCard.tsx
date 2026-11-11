import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import type { Tour } from "@/lib/content";

export function TourCard({ tour }: { tour: Tour }) {
  const { t } = useLang();
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <img src={tour.image} alt={t(tour.name)} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
      <div className="p-5">
        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
          {tour.type === "religious" ? t({ ar: "ديني", en: "Religious" }) : t({ ar: "تاريخي", en: "Historical" })} · {t(tour.duration)}
        </span>
        <h3 className="mt-3 text-xl">{t(tour.name)}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{t(tour.desc)}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold text-primary">{tour.price} {t({ ar: "ر.س / للشخص", en: "SAR / person" })}</span>
          <Link to="/booking" search={{ tour: tour.id }} className="text-sm font-medium text-accent-foreground underline decoration-accent decoration-2 underline-offset-4">
            {t({ ar: "احجز", en: "Book" })}
          </Link>
        </div>
      </div>
    </article>
  );
}
