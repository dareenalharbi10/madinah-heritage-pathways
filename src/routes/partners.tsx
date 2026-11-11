import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { useLang } from "@/lib/i18n";
import { partners } from "@/lib/content";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "الشركاء | وجهتك — Partners" },
      { name: "description", content: "الفنادق وشركات النقل والمرشدون المعتمدون المتعاونون مع وجهتك. Our partners." },
      { property: "og:title", content: "الشركاء | وجهتك — Partners" },
      { property: "og:description", content: "الفنادق وشركات النقل والمرشدون المعتمدون المتعاونون مع وجهتك. Our partners." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Partners,
});

function Partners() {
  const { t } = useLang();
  return (
    <SiteLayout>
      <PageHeader title={t({ ar: "شركاؤنا", en: "Our partners" })} sub={t({ ar: "فنادق وشركات نقل ومرشدون معتمدون", en: "Hotels, transport companies and certified guides" })} />
      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((p) => (
          <div key={p.name.en} className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary font-display text-xl text-primary-foreground">{t(p.name).charAt(0)}</div>
            <h3 className="mt-4 text-lg">{t(p.name)}</h3>
            <span className="text-sm text-muted-foreground">{t(p.kind)}</span>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
