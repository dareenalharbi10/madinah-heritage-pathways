import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader, inputCls, btnCls } from "@/components/SiteLayout";
import { useLang } from "@/lib/i18n";
import { tours } from "@/lib/content";

export const Route = createFileRoute("/booking")({
  validateSearch: (s: Record<string, unknown>): { tour?: string } => ({ tour: typeof s["tour"] === "string" ? s["tour"] : undefined }),
  head: () => ({
    meta: [
      { title: "الحجز | وجهتك — Book a Tour" },
      { name: "description", content: "احجز جولة أو باقة سياحية في المدينة المنورة. Book a tour in Madinah." },
      { property: "og:title", content: "الحجز | وجهتك — Book a Tour" },
      { property: "og:description", content: "احجز جولة أو باقة سياحية في المدينة المنورة. Book a tour in Madinah." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Booking,
});

function Booking() {
  const { t } = useLang();
  const { tour } = Route.useSearch();
  const [sel, setSel] = useState<string>(tour ?? "nabawi");
  const [people, setPeople] = useState(1);
  const [done, setDone] = useState(false);
  const chosen = tours.find((x) => x.id === sel) ?? tours[0]!;
  return (
    <SiteLayout>
      <PageHeader title={t({ ar: "احجز جولتك", en: "Book your tour" })} />
      <section className="mx-auto max-w-2xl px-4 py-12">
        {done ? (
          <div className="rounded-2xl bg-secondary p-8 text-center">
            <h2 className="text-2xl text-primary">{t({ ar: "تم استلام طلب الحجز ✓", en: "Booking request received ✓" })}</h2>
            <p className="mt-2 text-muted-foreground">{t({ ar: "سنتواصل معك قريباً لتأكيد الحجز.", en: "We'll contact you soon to confirm." })}</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
            <label className="grid gap-1.5 text-sm">{t({ ar: "الاسم", en: "Name" })}<input required className={inputCls} /></label>
            <label className="grid gap-1.5 text-sm">{t({ ar: "رقم الجوال", en: "Phone" })}<input required type="tel" className={inputCls} /></label>
            <label className="grid gap-1.5 text-sm">{t({ ar: "الجولة", en: "Tour" })}
              <select value={sel} onChange={(e) => setSel(e.target.value)} className={inputCls}>
                {tours.map((x) => <option key={x.id} value={x.id}>{t(x.name)}</option>)}
              </select>
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="grid gap-1.5 text-sm">{t({ ar: "التاريخ", en: "Date" })}<input required type="date" className={inputCls} /></label>
              <label className="grid gap-1.5 text-sm">{t({ ar: "عدد الأشخاص", en: "People" })}<input type="number" min={1} value={people} onChange={(e) => setPeople(Math.max(1, Number(e.target.value)))} className={inputCls} /></label>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-muted p-4">
              <span>{t({ ar: "الإجمالي", en: "Total" })}</span>
              <span className="text-xl font-semibold text-primary">{chosen.price * people} {t({ ar: "ر.س", en: "SAR" })}</span>
            </div>
            <button className={btnCls}>{t({ ar: "تأكيد الحجز", en: "Confirm booking" })}</button>
          </form>
        )}
      </section>
    </SiteLayout>
  );
}
