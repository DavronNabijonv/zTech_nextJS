"use client";

import { usePathname, useRouter } from "next/navigation";
import { Language } from "@/types";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  
  // Joriy tilni URL dan olamiz
  const currentLang = pathname.split("/")[1] as Language;

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value as Language;
    const segments = pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/"));
  };

  return (
    <select
      value={currentLang}
      onChange={changeLanguage}
      className="appearance-none hover:bg-gray-700 shadow-white p-[8px] rounded-[10px] flex flex-col justify-center items-center"
    >
      <option value="uz">O`z</option>
      <option value="ru">Py</option>
      <option value="en">Eng</option>
    </select>
  );
}