import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader, inputCls, btnCls } from "@/components/SiteLayout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا | وجهتك — Contact" },
      { name: "description", content: "تواصل مع وجهتك للاستفسارات والدعم. Contact Wjhatak for questions and support." },
      { property: "og:title", content: "تواصل معنا | وجهتك — Contact" },
      { property: "og:description", content: "تواصل مع وجهتك للاستفسارات والدعم. Contact Wjhatak for questions and support." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHeader title={t({ ar: "التواصل والدعم", en: "Contact & support" })} />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2">
        {sent ? (
          <div className="rounded-2xl bg-secondary p-8 text-center text-primary">{t({ ar: "شكراً لك، وصلتنا رسالتك ✓", en: "Thank you, we received your message ✓" })}</div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid h-fit gap-4 rounded-2xl border border-border bg-card p-6">
            <input required placeholder={t({ ar: "الاسم", en: "Name" })} className={inputCls} />
            <input required type="email" placeholder={t({ ar: "البريد الإلكتروني", en: "Email" })} className={inputCls} />
            <textarea required rows={5} placeholder={t({ ar: "رسالتك", en: "Your message" })} className={inputCls} />
            <button className={btnCls}>{t({ ar: "إرسال", en: "Send" })}</button>
          </form>
        )}
        <div className="grid gap-4">
          <div className="rounded-2xl bg-deep p-6 text-deep-foreground">
            <div>📍 {t({ ar: "المدينة المنورة، المملكة العربية السعودية", en: "Madinah, Saudi Arabia" })}</div>
            <div className="mt-2" dir="ltr">📞 +966 50 000 0000</div>
            <div className="mt-2">✉️ info@wjhatak.sa</div>
          </div>
          <iframe title="map" className="h-72 w-full rounded-2xl border border-border" loading="lazy" src="https://www.google.com/maps?q=Al+Masjid+an+Nabawi,Madinah&output=embed" />
        </div>
      </section>
    </SiteLayout>
  );
}
