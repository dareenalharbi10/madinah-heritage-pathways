import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader, inputCls, btnCls } from "@/components/SiteLayout";
import { useLang } from "@/lib/i18n";
import { reviews as seed } from "@/lib/content";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "التقييمات | وجهتك — Reviews" },
      { name: "description", content: "آراء زوار المدينة المنورة وتقييماتهم لجولات وجهتك. Visitor reviews." },
      { property: "og:title", content: "التقييمات | وجهتك — Reviews" },
      { property: "og:description", content: "آراء زوار المدينة المنورة وتقييماتهم لجولات وجهتك. Visitor reviews." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Reviews,
});

function Reviews() {
  const { t } = useLang();
  const [list, setList] = useState(seed.map((r) => ({ name: t(r.name), rating: r.rating, comment: t(r.comment), seed: r })));
  const [rating, setRating] = useState(5);
  return (
    <SiteLayout>
      <PageHeader title={t({ ar: "التقييمات", en: "Reviews" })} sub={t({ ar: "ماذا يقول زوارنا", en: "What our visitors say" })} />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1fr_360px]">
        <div className="grid gap-4">
          {list.map((r, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-5">
              <div className="flex justify-between"><b>{r.seed ? t(r.seed.name) : r.name}</b><span className="text-accent">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</span></div>
              <p className="mt-2 text-muted-foreground">{r.seed ? t(r.seed.comment) : r.comment}</p>
            </div>
          ))}
        </div>
        <form className="grid h-fit gap-3 rounded-2xl bg-secondary p-5" onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          setList([{ name: String(fd.get("name")), rating, comment: String(fd.get("comment")), seed: undefined as never }, ...list]);
          e.currentTarget.reset(); setRating(5);
        }}>
          <h2 className="text-xl text-primary">{t({ ar: "أضف تقييمك", en: "Add your review" })}</h2>
          <input name="name" required placeholder={t({ ar: "الاسم", en: "Name" })} className={inputCls} />
          <div className="flex gap-1 text-2xl text-accent">
            {[1, 2, 3, 4, 5].map((n) => <button type="button" key={n} onClick={() => setRating(n)} aria-label={`${n}`}>{n <= rating ? "★" : "☆"}</button>)}
          </div>
          <textarea name="comment" required rows={4} placeholder={t({ ar: "تعليقك", en: "Your comment" })} className={inputCls} />
          <button className={btnCls}>{t({ ar: "إرسال", en: "Submit" })}</button>
        </form>
      </section>
    </SiteLayout>
  );
}
