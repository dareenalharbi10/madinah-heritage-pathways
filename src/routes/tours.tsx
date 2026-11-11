import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { TourCard } from "@/components/TourCard";
import { useLang } from "@/lib/i18n";
import { tours } from "@/lib/content";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "الجولات | وجهتك — Madinah Tours" },
      { name: "description", content: "دليل المعالم والجولات الدينية والتاريخية في المدينة المنورة مع الأسعار. Tours and prices." },
      { property: "og:title", content: "الجولات | وجهتك — Madinah Tours" },
      { property: "og:description", content: "دليل المعالم والجولات الدينية والتاريخية في المدينة المنورة مع الأسعار. Tours and prices." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Tours,
});

function Tours() {
  const { t } = useLang();
  const [f, setF] = useState<"all" | "religious" | "historical">("all");
  const tabs = [
    { k: "all", l: { ar: "الكل", en: "All" } },
    { k: "religious", l: { ar: "ديني", en: "Religious" } },
    { k: "historical", l: { ar: "تاريخي", en: "Historical" } },
  ] as const;
  return (
    <SiteLayout>
      <PageHeader title={t({ ar: "الوجهات والجولات", en: "Destinations & tours" })} sub={t({ ar: "اختر جولتك بين المعالم الدينية والتاريخية.", en: "Choose among religious and historical landmarks." })} />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex gap-2">
          {tabs.map((x) => (
            <button key={x.k} onClick={() => setF(x.k)} className={`rounded-full px-4 py-2 text-sm ${f === x.k ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>{t(x.l)}</button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.filter((x) => f === "all" || x.type === f).map((x) => <TourCard key={x.id} tour={x} />)}
        </div>
      </section>
    </SiteLayout>
  );
}
