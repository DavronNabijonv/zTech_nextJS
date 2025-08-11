"use client";

import { usePathname, useRouter } from "next/navigation";
import { Language } from "@/types";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (lang: Language) => {
    const segments = pathname.split("/");
    segments[1] = lang; // [lang] param
    router.push(segments.join("/"));
  };

  return (
    <div className="flex gap-3">
      <button onClick={() => changeLanguage("uz")}>Uzb</button>
      <button onClick={() => changeLanguage("ru")}>Rus</button>
      <button onClick={() => changeLanguage("en")}>Eng</button>
    </div>
  );
}
