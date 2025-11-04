// src/i18n/sections/about.ts
import { LangCode } from "../lang";

export type AboutCopy = {
  title: string;
  body: string;
  cta: string;
};

export const ABOUT_COPY: Record<LangCode, AboutCopy> = {
  UZ: {
    title: "Sodiq-Namangan mehmonxonasi haqida",
    body: `Namangan viloyati O‘zbekistonning sharqiy qismida, betakror va go‘zal Farg‘ona vodiysining “Oltin vodiy” deb ataluvchi shimoli-g‘arbiy qismida joylashgan. Mughkala va Axsikent kabi arxeologik yodgorliklar, shuningdek, Namangan, Chortoq, Chust va Uchqo‘rg‘on shaharlaridagi tarixiy meros bu yurtning yuksak madaniyati va sivilizatsiyasidan dalolat beradi...`,
    cta: "Batafsil ko‘rish",
  },

  RU: {
    title: "Об отеле «Sodiq-Namangan»",
    body: `Наманганская область находится в восточной части Узбекистана, в северо-западной стороне прекрасной и неповторимой Ферганской долины, получившей название «Золотая долина». Такие археологические памятники, как Мугкала и Ахсикент, исторические памятники в городах Намангане, Чартаке, Чусте и Учкургане – все это свидетельствует о высокой культуре и достижениях цивилизации...`,
    cta: "Подробнее",
  },

  EN: {
    title: "About Sodiq-Namangan Hotel",
    body: `Namangan Region is located in the eastern part of Uzbekistan, in the northwestern area of the beautiful and unique Fergana Valley, known as the “Golden Valley.” Archaeological monuments such as Mughkala and Akhsikent, and historical landmarks in the cities of Namangan, Chartak, Chust, and Uchqurghon all testify to the region’s rich culture and civilization...`,
    cta: "Learn more",
  },
};

export const getAboutCopy = (code: LangCode) => ABOUT_COPY[code];
