import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ar" | "en";
export type T = { ar: string; en: string };

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (v: T) => string }>({
  lang: "ar",
  setLang: () => {},
  t: (v) => v.ar,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "ar") setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  const setLang = (l: Lang) => {
    localStorage.setItem("lang", l);
    setLangState(l);
  };
  return <Ctx.Provider value={{ lang, setLang, t: (v) => v[lang] }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
