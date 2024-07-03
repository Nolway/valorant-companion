import { Locale } from "discord.js";
import L from "../i18n/i18n-node";
import { baseLocale, isLocale } from "../i18n/i18n-util";
import { TranslationFunctions } from "../i18n/i18n-types";

export function getTranslate(locale: Locale): TranslationFunctions {
    const parsedLocale = locale.replace('-', '_');
    return isLocale(parsedLocale) ? L[parsedLocale] : L[baseLocale];
}
