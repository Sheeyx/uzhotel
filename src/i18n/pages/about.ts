import { LangCode } from "../lang";

/** Use readonly arrays to match `as const` literals */
export interface AboutCopy {
  pageTitle: string;
  galleryAlt: {
    hero: string;
    i1: string; i2: string; i3: string; i4: string;
    m1: string; m2: string; m3: string; m4: string;
  };
  sec1: {
    title: string;
    line1: string; line2: string; line3: string; line4: string;
    amenities: ReadonlyArray<string>;
  };
  sec2: {
    title: string;
    p1: string; p2: string;
  };
  sec3: {
    title: string;
    features: ReadonlyArray<string>;
  };
  booking: {
    title: string;
    checkin: string; checkout: string; guests: string; btn: string;
    guestOptions: ReadonlyArray<string>;
  };
}

export const ABOUT_COPY = {
  RU: {
    pageTitle: "Об отеле «Sodiq-Namangan»",
    galleryAlt: {
      hero: "Отель «Sodiq-Namangan» — главный вид",
      i1: "Лобби и ресепшен",
      i2: "Гостевые номера",
      i3: "Ресторан и зона завтрака",
      i4: "Бассейн и СПА-зона",
      m1: "Лобби",
      m2: "Номер",
      m3: "Ресторан",
      m4: "Бассейн",
    },
    sec1: {
      title: "ООО «Sodiq-Namangan» — «Sodiq-Namangan» Hotel",
      line1:
        "Наманганская область находится в восточной части Узбекистана, в северо-западной стороне прекрасной и неповторимой Ферганской долины, получившей название «Золотая долина».",
      line2:
        "Такие археологические памятники, как Мугкала и Ахсикент, исторические памятники в городах Намангане, Чартаке, Чусте и Учкургане – все это свидетельствует о высокой культуре и достижениях цивилизации.",
      line3:
        "Сегодня город Наманган занимает лидирующие позиции по показателю обеспеченности туристскими средствами размещения в городах Ферганской Долины.",
      line4:
        "Первым звеном в гостиничной сети города Наманган является роскошный HOTEL «Sodik-Namangan».",
      amenities: [
        "Современное и благоустроенное пятиэтажное здание HOTEL «Sodik-Namangan» находится в шаговой доступности, т.е. в двух километрах от международного аэропорта «Наманган» и в четырех километрах от центра города, начал свою деятельность с сентября 2007 года.",
        "HOTEL «Sodik-Namangan» имеет автономную систему горячего водоснабжения и отопления, располагает возможностью бесперебойного обеспечения электроэнергией, водо-, и газоснабжением.",
        "Имеет собственный персонал охраны, оснащен по периметру 24-х часовым видеонаблюдением.",
        "HOTEL «Sodik-Namangan» включает в себя 95 комфортабельных номеров улучшенной планировки, в которые включают завтрак «шведский стол» оснащенные wi-fi, где могут одновременно разместиться 125 человек.",
        "Номера рассчитаны для временного размещения и для длительного проживания гостей, где можно достойно, культурно и содержательно отдыхать всей семьёй.",
        "Специально обученный персонал HOTEL «Sodik-Namangan» обладает такими качествами, как уважение и почитание человека, гостеприимство, внимание и забота, доброжелательность, стремление к труду и знаниям, и создаст Вам благоприятные условия и положительную атмосферу внутри гостиницы.",
        "К Вашим услугам одноместные, двухместные и трехместные номера, в которых удачно сочетается красота и уют, элегантная мебель, сборка которой осуществлялась путем комбинации современного оборудования и ручной сборки.",
        "Все номера оснащены системой кондиционирования, кабельного телевидения, прямая телефонная линия.",
      ],
    },
    sec2: {
      title: "Инфраструктура и обслуживание",
      p1: `На пятом этаже в HOTEL «Sodik-Namangan» к вашим услугам просторный ресторан с уютной атмосферой, современным стилем и комфортной мебелью на 70 человек, где проводятся не только завтраки, а также обеды и ужины, исполненные в лучших традициях многогранной национальной и европейской кухни.`,
      p2: `HOTEL «Sodik-Namangan» открыт к сотрудничеству и приглашает гостей. Путешествуйте и восхищайтесь Узбекистаном, наслаждайтесь Ферганской Долиной, приезжая в город Наманган живите в HOTEL «Sodiq-Namangan», и вам не просто понравится — вы полюбите этот город!`,
    },
    sec3: {
      title: "Дополнительные возможности",
      features: [
        "🍽 Завтрак «шведский стол» с 07:00 до 10:00",
        "🍴 Обеды и ужины в ресторане на 70 человек",
        "🧁 Оригинальные десерты и блюда здорового питания",
        "🏢 Конференц-зал на 1-м этаже (до 40 мест) для встреч, презентаций и семинаров",
        "🖨 Бизнес-центр: интернет, факс, принтер, ксерокс и сканер",
        "🧖‍♂️ Сауна и оздоровительный комплекс",
        "🏊 Летний и крытый бассейны с подогревом и фильтрацией воды",
        "🎱 Бильярдный зал для отдыха после рабочего дня",
        "🌳 Внутренний двор и сад с экзотическими птицами",
      ],
    },
    booking: {
      title: "Бронирование номеров",
      checkin: "Дата заезда",
      checkout: "Дата выезда",
      guests: "Гости",
      btn: "Забронировать",
      guestOptions: ["1", "2", "3", "4+"],
    },
  },

  EN: {
    pageTitle: "About Sodiq-Namangan Hotel",
    galleryAlt: {
      hero: "Sodiq-Namangan Hotel — main view",
      i1: "Lobby and reception",
      i2: "Guest rooms",
      i3: "Restaurant and breakfast area",
      i4: "Pool and spa zone",
      m1: "Lobby",
      m2: "Room",
      m3: "Restaurant",
      m4: "Pool",
    },
    sec1: {
      title: "LLC «Sodiq-Namangan» — «Sodiq-Namangan» Hotel",
      line1:
        "Namangan region is located in the eastern part of Uzbekistan, in the northwestern side of the beautiful and unique Ferghana Valley, known as the 'Golden Valley'.",
      line2:
        "Archaeological sites such as Mugkala and Akhsikent, and historical monuments in Namangan, Chartak, Chust, and Uchqurgan testify to the region’s high culture and civilization.",
      line3:
        "Today, Namangan city holds a leading position in the number of tourist accommodation facilities among the cities of the Ferghana Valley.",
      line4:
        "The first in Namangan’s hotel network is the luxurious HOTEL «Sodik-Namangan».",
      amenities: [
        "The modern five-story HOTEL «Sodik-Namangan» is conveniently located — 2 km from Namangan International Airport and 4 km from the city center, operating since September 2007.",
        "The hotel has an autonomous hot water and heating system and provides uninterrupted electricity, water, and gas supply.",
        "Equipped with its own security personnel and 24-hour video surveillance.",
        "Includes 95 comfortable rooms with buffet breakfast and Wi-Fi, accommodating up to 125 guests.",
        "Rooms are suitable for both short and long-term stays, providing comfort and cultural relaxation for the whole family.",
        "Trained staff show respect, hospitality, attention, care, kindness, diligence, and knowledge, ensuring a pleasant atmosphere.",
        "Single, double, and triple rooms combine elegance and comfort with modern and handcrafted furniture.",
        "All rooms feature air conditioning, cable TV, and direct telephone lines.",
      ],
    },
    sec2: {
      title: "Facilities and hospitality",
      p1: `On the fifth floor, guests can enjoy a spacious restaurant with a cozy atmosphere, modern style, and comfortable seating for 70 people — serving breakfasts, lunches, and dinners in the finest traditions of Uzbek and European cuisine.`,
      p2: `HOTEL «Sodik-Namangan» is open for cooperation and warmly welcomes guests. Travel and admire Uzbekistan, enjoy the beauty of the Ferghana Valley, stay in Namangan at HOTEL «Sodiq-Namangan», and you will not just like it — you will love this city!`,
    },
    sec3: {
      title: "Additional services",
      features: [
        "🍽 Buffet breakfast from 07:00 to 10:00",
        "🍴 Lunches and dinners in the restaurant (70 seats)",
        "🧁 Fine desserts and healthy dishes",
        "🏢 Conference hall (40 seats) for meetings, seminars, and presentations",
        "🖨 Business center with internet, fax, printer, copier, and scanner",
        "🧖 Sauna and relaxation complex",
        "🏊 Summer and indoor pools with heating and filtration systems",
        "🎱 Billiards hall for evening relaxation",
        "🌳 Inner courtyard garden with exotic birds",
      ],
    },
    booking: {
      title: "Book a Room",
      checkin: "Check-in date",
      checkout: "Check-out date",
      guests: "Guests",
      btn: "Book now",
      guestOptions: ["1", "2", "3", "4+"],
    },
  },

  UZ: {
    pageTitle: "Sodiq-Namangan mehmonxonasi haqida",
    galleryAlt: {
      hero: "Sodiq-Namangan mehmonxonasi — asosiy ko‘rinish",
      i1: "Lobbi va qabulxona",
      i2: "Mehmonxona xonalari",
      i3: "Restoran va nonushta zonasi",
      i4: "Basseyn va spa hududi",
      m1: "Lobbi",
      m2: "Xona",
      m3: "Restoran",
      m4: "Basseyn",
    },
    sec1: {
      title: "MCHJ «Sodiq-Namangan» — «Sodiq-Namangan» mehmonxonasi",
      line1:
        "Namangan viloyati O‘zbekistonning sharqiy qismida, go‘zal va betakror Farg‘ona vodiysining shimoli-g‘arbiy tomonida joylashgan bo‘lib, bu vodiy «Oltin vodiy» deb ataladi.",
      line2:
        "Mughkala va Axsikent kabi arxeologik yodgorliklar, Namangan, Chortoq, Chust va Uchqo‘rg‘on shaharlaridagi tarixiy obidalar bu yurtning yuksak madaniyatini va sivilizatsiyasini namoyon etadi.",
      line3:
        "Bugungi kunda Namangan shahri Farg‘ona vodiysi shaharlarida sayyohlik joylashtirish vositalari bo‘yicha yetakchi o‘rinni egallaydi.",
      line4:
        "Namangan shahridagi mehmonxonalar tarmog‘ining birinchi bo‘g‘ini hashamatli «Sodik-Namangan» mehmonxonasi hisoblanadi.",
      amenities: [
        "Zamonaviy besh qavatli «Sodik-Namangan» mehmonxonasi xalqaro aeroportdan 2 km, shahar markazidan 4 km uzoqlikda joylashgan bo‘lib, 2007-yil sentabr oyidan faoliyat yuritadi.",
        "Mehmonxona mustaqil issiq suv va isitish tizimiga ega, elektr, suv va gaz ta’minoti uzluksiz ishlaydi.",
        "O‘zining qo‘riqlash xizmati mavjud, 24 soatlik videokuzatuv tizimi bilan jihozlangan.",
        "95 ta qulay xona mavjud bo‘lib, Wi-Fi va «shved stoli» nonushta bilan 125 mehmonni bir vaqtning o‘zida joylashtira oladi.",
        "Xonalar qisqa muddatli va uzoq muddatli yashash uchun mo‘ljallangan bo‘lib, oila bilan qulay dam olish imkonini beradi.",
        "Xodimlar hurmat, mehmondo‘stlik, e’tibor, g‘amxo‘rlik, mehribonlik, mehnatsevarlik va bilimga intilish fazilatlariga ega bo‘lib, sizga ijobiy muhit yaratadi.",
        "Yagona, ikki va uch kishilik xonalar — zamonaviy va qo‘lda yig‘ilgan mebellar uyg‘unligida go‘zallik va qulaylikni mujassam etadi.",
        "Barcha xonalar konditsioner, kabel televideniye va to‘g‘ridan-to‘g‘ri telefon liniyasi bilan jihozlangan.",
      ],
    },
    sec2: {
      title: "Qulaylik va xizmatlar",
      p1: `Mehmonxonaning beshinchi qavatida 70 o‘ringa mo‘ljallangan zamonaviy restoran mavjud bo‘lib, unda nafaqat nonushta, balki milliy va Yevropa taomlarining eng yaxshi an’analarida tayyorlangan tushlik va kechki ovqatlar ham taqdim etiladi.`,
      p2: `«Sodiq-Namangan» mehmonxonasi hamkorlikka ochiq va barcha mehmonlarni taklif etadi. O‘zbekistonni kashf eting, Farg‘ona vodiysining go‘zalligidan zavq oling, Namanganga tashrif buyuring va «Sodiq-Namangan» mehmonxonasida yashang — sizga bu joy yoqadi, hatto siz uni sevib qolasiz!`,
    },
    sec3: {
      title: "Qo‘shimcha xizmatlar",
      features: [
        "🍽 Nonushta «shved stoli» (07:00–10:00)",
        "🍴 Restoranda tushlik va kechki ovqat (70 o‘rin)",
        "🧁 Nozik desertlar va sog‘lom taomlar",
        "🏢 Konferens-zal (40 o‘rin) — uchrashuvlar, seminarlar, prezentatsiyalar uchun",
        "🖨 Biznes markaz: internet, faks, printer, kseroks va skaner",
        "🧖 Sauna va sog‘lomlashtirish majmuasi",
        "🏊 Issiq va yopiq basseynlar (filtratsiya tizimi bilan)",
        "🎱 Bilyard zali",
        "🌳 Ichki hovli va ekzotik qushlar bog‘i",
      ],
    },
    booking: {
      title: "Xonalarni band qilish",
      checkin: "Kelish sanasi",
      checkout: "Ketish sanasi",
      guests: "Mehmonlar",
      btn: "Band qilish",
      guestOptions: ["1", "2", "3", "4+"],
    },
  },
} as const satisfies Record<LangCode, AboutCopy>;
