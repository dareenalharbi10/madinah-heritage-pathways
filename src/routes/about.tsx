import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { useLang } from "@/lib/i18n";
import { images } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن | وجهتك — About Wjhatak" },
      { name: "description", content: "تعرف على وجهتك ورسالتها في خدمة زوار المدينة المنورة. About Wjhatak and our mission." },
      { property: "og:title", content: "من نحن | وجهتك — About Wjhatak" },
      { property: "og:description", content: "تعرف على وجهتك ورسالتها في خدمة زوار المدينة المنورة. About Wjhatak and our mission." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useLang();
  const values = [
    { ar: "مرشدون معتمدون", en: "Certified guides" },
    { ar: "نقل مريح وآمن", en: "Safe, comfortable transport" },
    { ar: "جولات بعدة لغات", en: "Multilingual tours" },
    { ar: "أسعار واضحة", en: "Transparent prices" },
  ];
  return (
    <SiteLayout>
      <PageHeader title={t({ ar: "من نحن", en: "About us" })} />
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2">
        <div>
          <h2 className="text-3xl text-primary">{t({ ar: "رسالتنا", en: "Our mission" })}</h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            {t({ ar: "وجهتك شركة متخصصة في السياحة بالمدينة المنورة، نخدم الزوار والمعتمرين والعائلات بتجارب منظمة تعرّفهم بالمعالم الدينية والتاريخية بطريقة سهلة وممتعة وموثوقة.", en: "Wjhatak is a tourism company specialized in Madinah. We serve visitors, Umrah pilgrims and families with organized experiences that introduce the city's religious and historical landmarks in an easy, enjoyable and trusted way." })}
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {values.map((v) => <li key={v.en} className="rounded-xl bg-secondary p-4 text-sm text-secondary-foreground">✦ {t(v)}</li>)}
          </ul>
        </div>
        <img src={images.heritage} alt="" loading="lazy" width={1024} height={768} className="rounded-2xl shadow-soft" />
      </section>
    </SiteLayout>
  );
}
