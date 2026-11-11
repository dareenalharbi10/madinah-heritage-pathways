import hero from "@/assets/hero-madinah.jpg";
import quba from "@/assets/quba.jpg";
import uhud from "@/assets/uhud.jpg";
import heritage from "@/assets/heritage.jpg";
import type { T } from "./i18n";

export const images = { hero, quba, uhud, heritage };
export const brand: T = { ar: "وجهتك", en: "Wjhatak" };

export const nav: { to: string; label: T }[] = [
  { to: "/", label: { ar: "الرئيسية", en: "Home" } },
  { to: "/about", label: { ar: "من نحن", en: "About" } },
  { to: "/tours", label: { ar: "الجولات", en: "Tours" } },
  { to: "/booking", label: { ar: "الحجز", en: "Booking" } },
  { to: "/reviews", label: { ar: "التقييمات", en: "Reviews" } },
  { to: "/partners", label: { ar: "الشركاء", en: "Partners" } },
  { to: "/news", label: { ar: "الأخبار", en: "News" } },
  { to: "/contact", label: { ar: "تواصل معنا", en: "Contact" } },
];

export type Tour = { id: string; type: "religious" | "historical"; name: T; desc: T; duration: T; price: number; image: string };
export const tours: Tour[] = [
  { id: "nabawi", type: "religious", image: hero, price: 150,
    name: { ar: "جولة المسجد النبوي", en: "Prophet's Mosque Tour" },
    desc: { ar: "تعرّف على تاريخ المسجد النبوي الشريف وعمارته مع مرشد معتمد.", en: "Discover the history and architecture of the Prophet's Mosque with a certified guide." },
    duration: { ar: "٣ ساعات", en: "3 hours" } },
  { id: "quba", type: "religious", image: quba, price: 120,
    name: { ar: "زيارة مسجد قباء", en: "Quba Mosque Visit" },
    desc: { ar: "زيارة أول مسجد بُني في الإسلام مع قصة تأسيسه.", en: "Visit the first mosque built in Islam and hear the story of its founding." },
    duration: { ar: "ساعتان", en: "2 hours" } },
  { id: "uhud", type: "historical", image: uhud, price: 180,
    name: { ar: "جبل أحد وشهداء أحد", en: "Mount Uhud & Martyrs" },
    desc: { ar: "جولة في موقع غزوة أحد وجبل الرماة ومقبرة الشهداء.", en: "Tour the site of the Battle of Uhud, the Archers' Hill and the Martyrs' cemetery." },
    duration: { ar: "٣ ساعات", en: "3 hours" } },
  { id: "seven", type: "historical", image: heritage, price: 200,
    name: { ar: "المساجد السبعة والمزارع التراثية", en: "Seven Mosques & Heritage Farms" },
    desc: { ar: "موقع غزوة الخندق ومزارع النخيل والبيوت الطينية القديمة.", en: "The Trench battle site, palm farms and old mud-brick houses." },
    duration: { ar: "٤ ساعات", en: "4 hours" } },
];

export const reviews = [
  { name: { ar: "أحمد من مصر", en: "Ahmed, Egypt" }, rating: 5, comment: { ar: "تنظيم رائع ومرشد يعرف التاريخ بعمق. أنصح بها بشدة.", en: "Great organization and a guide who knows history deeply. Highly recommended." } },
  { name: { ar: "فاطمة من الرياض", en: "Fatima, Riyadh" }, rating: 5, comment: { ar: "جولة أحد كانت مؤثرة جداً، والأطفال استمتعوا كثيراً.", en: "The Uhud tour was very moving, and the kids loved it." } },
  { name: { ar: "Yusuf, UK", en: "Yusuf, UK" }, rating: 4, comment: { ar: "خدمة ممتازة باللغة الإنجليزية ومواعيد دقيقة.", en: "Excellent service in English and punctual timing." } },
];

export const partners = [
  { kind: { ar: "فندق", en: "Hotel" }, name: { ar: "فندق الأنصار", en: "Al Ansar Hotel" } },
  { kind: { ar: "فندق", en: "Hotel" }, name: { ar: "فندق دار الهجرة", en: "Dar Al Hijra Hotel" } },
  { kind: { ar: "نقل", en: "Transport" }, name: { ar: "طيبة للنقل", en: "Taibah Transport" } },
  { kind: { ar: "نقل", en: "Transport" }, name: { ar: "مسار للحافلات", en: "Masar Buses" } },
  { kind: { ar: "مرشدون", en: "Guides" }, name: { ar: "جمعية المرشدين المعتمدين", en: "Certified Guides Association" } },
  { kind: { ar: "مرشدون", en: "Guides" }, name: { ar: "رواة المدينة", en: "Madinah Storytellers" } },
];

export const news = [
  { date: { ar: "نوفمبر ٢٠٢٦", en: "November 2026" }, title: { ar: "عرض الشتاء: خصم ٢٠٪ للعائلات", en: "Winter offer: 20% off for families" }, body: { ar: "استمتعوا بأجواء المدينة الشتوية مع خصم خاص على جميع الجولات العائلية.", en: "Enjoy Madinah's winter weather with a special discount on all family tours." } },
  { date: { ar: "أكتوبر ٢٠٢٦", en: "October 2026" }, title: { ar: "إطلاق جولة المزارع التراثية", en: "Heritage farms tour launched" }, body: { ar: "جولة جديدة بين مزارع النخيل والبيوت الطينية التاريخية.", en: "A new tour through palm farms and historic mud-brick homes." } },
  { date: { ar: "سبتمبر ٢٠٢٦", en: "September 2026" }, title: { ar: "مرشدون بلغات متعددة", en: "Multilingual guides" }, body: { ar: "أصبحت جولاتنا متاحة بالعربية والإنجليزية والأردية والإندونيسية.", en: "Our tours are now available in Arabic, English, Urdu and Indonesian." } },
];
