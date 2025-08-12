"use client"; // Bu komponent client-side da ishlashi kerak

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { getTranslations } from "@/lib/getTranslations";
import type { Language } from "@/types";
import LanguageSwitcher from "./LanguageSwitcher";
import Button from "./button";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { lang } = useParams() as { lang: Language };
  const [t, setT] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Async ma'lumotlarni client-side da olish
    const loadTranslations = async () => {
      const translations = await getTranslations(lang, "navbar");
      setT(translations);
    };
    loadTranslations();
  }, [lang]);

  const handleClick = () => {
    router.push("/about");
  };

  if (!t) return null; // Yoki loading spinner qaytaring

  return (
    <div className="py-5 fixed w-full z-10 px-2 ">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between rounded-[10px] bg-white shadow-[0px_10px_80px_#3333338f] py-5 px-4">
        <Link href={`/${lang}`}>
          <Image src={logo} alt="logo image" priority />
        </Link>
        <div className="flex items-center gap-5">
          <Link href={`/${lang}`} className="text-gray-600 text-[18px]">
            {t.home}
          </Link>
          <Link
            href={`/${lang}/products`}
            className="text-gray-600 text-[18px]"
          >
            {t.products}
          </Link>
          <Link href={`/${lang}/contact`} className="text-gray-600 text-[18px]">
            {t.contact}
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <Button type="button" disabled={false} style="" func={handleClick}>
            {t.start}
          </Button>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
