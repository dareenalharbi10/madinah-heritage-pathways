import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { useLang } from "@/lib/i18n";
import { news } from "@/lib/content";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "الأخبار | وجهتك — News & Offers" },
      { name: "description", content: "آخر الفعاليات والعروض الموسمية في المدينة المنورة. Latest events and seasonal offers." },
      { property: "og:title", content: "الأخبار | وجهتك — News & Offers" },
      { property: "og:description", content: "آخر الفعاليات والعروض الموسمية في المدينة المنورة. Latest events and seasonal offers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: News,
});

function News() {
  const { t } = useLang();
  return (
    <SiteLayout>
      <PageHeader title={t({ ar: "الأخبار والعروض", en: "News & offers" })} />
      <section className="mx-auto grid max-w-3xl gap-6 px-4 py-12">
        {news.map((n) => (
          <article key={n.title.en} className="border-s-4 border-accent ps-5">
            <time className="text-sm text-muted-foreground">{t(n.date)}</time>
            <h2 className="mt-1 text-2xl text-primary">{t(n.title)}</h2>
            <p className="mt-2 text-muted-foreground">{t(n.body)}</p>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
