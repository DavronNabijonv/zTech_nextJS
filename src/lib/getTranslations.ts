import type { Language, Namespace } from "@/types";

export async function getTranslations(lang: Language, namespace: Namespace) {
  const supportedLangs: Language[] = ["uz", "ru", "eng"];
  const finalLang = supportedLangs.includes(lang) ? lang : "uz"; // fallback

  try {
    const messages = await import(`@/locales/${finalLang}/${namespace}.ts`)
      .then((m) => m.default);
    return messages;
  } catch {
    const fallback = await import(`@/locales/uz/${namespace}.ts`)
      .then((m) => m.default);
    return fallback;
  }
}
