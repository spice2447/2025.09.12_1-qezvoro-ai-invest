const cs = {
  privacy: {
    pageTitle: "Stránka Zásady ochrany osobních údajů",
    policyTitle: "Zásady ochrany osobních údajů společnosti Qezvoro Invest",
    updatedAt: "15. srpna 2025",
    effectiveFrom: "15. srpna 2025",

    intro: [
      "Qezvoro Invest Ltd. klade nejvyšší důraz na ochranu vašich osobních údajů a soukromí.",
      "Používáním služeb obchodní platformy Qezvoro souhlasíte se zpracováním informací dle těchto zásad.",
    ],

    categories: {
      title: "Kategorie shromážděných informací",
      personal: {
        title: "Osobní identifikační údaje",
        items: [
          "Základní údaje: celé jméno, datum a místo narození, státní občanství",
          "Kontakty: poštovní adresa, telefon, e-mail",
          "Finanční profil: příjmy, zdroje kapitálu, investiční zkušenost, cíle",
          "Ověřovací dokumenty: pas, ŘP, potvrzení o příjmu, bankovní výpisy",
          "Biometrie: fotografie pro KYC",
        ],
      },
      usage: {
        title: "Údaje o využití platformy",
        items: [
          "Historie transakcí: obchody, vklady, výběry, stav účtu",
          "Technické parametry: IP, prohlížeč, OS, časová razítka",
          "Analýza chování: navigace, doba relace, preference, dotazy",
        ],
      },
      external: {
        title: "Informace z externích zdrojů",
        items: [
          "Partneři: makléřské společnosti, banky, poskytovatelé analýz",
          "Otevřené zdroje: veřejné rejstříky, média, sociální platformy",
          "Poradní informace: doporučení a reference",
        ],
      },
    },

    purposes: {
      title: "Účely zpracování osobních údajů",
      items: [
        "Poskytování investičních služeb (účty, obchodní příkazy, AI reporty)",
        "Soulad s předpisy (KYC/AML, hlášení regulátorům, prevence podvodů)",
        "Zlepšování platformy (UX/UI, nové produkty, optimalizace AI)",
        "Komunikace (notifikace, novinky, vzdělávací obsah, průzkumy)",
      ],
    },

    legalBasis: {
      title: "Právní základ dle GDPR",
      items: [
        "Plnění smluvních závazků",
        "Oprávněné zájmy společnosti (bezpečnost, zlepšování služeb, marketing stávajícím klientům)",
        "Dobrovolný souhlas (newslettery, analytické cookies, doplňkové služby)",
        "Plnění zákonných požadavků (AML/KYC, daně, FATCA/CRS)",
      ],
    },

    sharing: {
      title: "Předávání údajů třetím stranám",
      techProviders: [
        "Cloud: Google Cloud, AWS, Azure",
        "Platby: acquiring, zpracovatelé plateb",
        "Tržní data: Bloomberg, Refinitiv",
        "KYC služby: Jumio, Onfido",
      ],
      regulators: [
        "Finanční dohled (SEC, FCA, CySEC aj.)",
        "Daňové úřady (FATCA/CRS)",
        "Orgány činné v trestním řízení (na základě žádosti)",
      ],
      businessPartners: [
        "Burzy a brokeři pro realizaci obchodů",
        "Depozitní banky",
        "Pojišťovny",
      ],
      note:
        "Osobní údaje NEPRODÁVÁME ani nepronajímáme třetím stranám pro komerční účely.",
    },

    crossBorder: {
      title: "Přeshraniční přenos dat",
      text: [
        "Zpracování může probíhat mimo EHP (USA, Singapur aj.).",
        "Ochrana: rozhodnutí o přiměřenosti, Standardní smluvní doložky EU, Závazná podniková pravidla, zvláštní záruky.",
      ],
    },

    security: {
      title: "Bezpečnostní a organizační opatření",
      technical: [
        "AES-256 (data v klidu), TLS 1.3 (přenos)",
        "MFA, řízení přístupu na základě rolí",
        "24/7 monitoring bezpečnosti, geograficky redundatní zálohy",
      ],
      org: [
        "Školení zaměstnanců",
        "Přísné interní politiky pro zpracování údajů",
        "Každoroční externí audity (PwC aj.)",
        "Fyzická a logická segregace dat",
      ],
    },

    rights: {
      title: "Práva subjektů údajů (GDPR)",
      items: [
        "Přístup, oprava, výmaz („být zapomenut“)",
        "Omezení zpracování a námitka",
        "Přenositelnost údajů",
        "Odvolání souhlasu kdykoli",
      ],
      howTo: [
        "E-mail: privacy@qezvoro.com",
        "Sekce „Správa soukromí“ v uživatelském účtu",
        "Písemná žádost na adresu společnosti",
        "Lhůta pro odpověď: ≤ 30 dní",
      ],
    },

    retention: {
      title: "Doba uchovávání osobních údajů",
      general:
        "Údaje uchováváme pouze po nezbytnou dobu k dosažení účelu nebo dle zákona.",
      specifics: [
        "Aktivní účty: po dobu smlouvy + 7 let",
        "KYC dokumentace: 7 let po uzavření účtu",
        "Záznamy transakcí: 7 let",
        "Marketingová data: do odvolání souhlasu nebo 3 roky neaktivity",
        "Záznamy hovorů: 5 let (MiFID II)",
        "Údaje nezletilých: okamžité smazání po zjištění",
      ],
    },

    cookies: {
      title: "Cookies a podobné technologie",
      types: [
        "Nezbytné (funkce webu, autorizace, bezpečnost)",
        "Funkční (preferenc e nastavení)",
        "Analytické (Google Analytics, Yandex.Metrica)",
        "Marketingové (personalizace, měření kampaní)",
      ],
      control: [
        "Nastavení prohlížeče",
        "Panel správy cookies na webu Qezvoro",
        "Doplněk Google Analytics Opt-out",
      ],
    },

    minors: {
      title: "Ochrana práv nezletilých",
      text: [
        "Služby nejsou určeny osobám mladším 18 let.",
        "Zjistíme-li sběr údajů nezletilých, údaje neprodleně smažeme.",
        "Kontakt: privacy@qezvoro.com",
      ],
    },

    updates: {
      title: "Aktualizace zásad",
      text: [
        "Zásady můžeme čas od času aktualizovat.",
        "O změnách informujeme e-mailem, v účtu nebo na hlavní stránce.",
        "Doporučujeme pravidelnou kontrolu aktuální verze.",
      ],
    },

    contacts: {
      title: "Kontaktní informace",
      controller: {
        name: "Qezvoro Invest Ltd.",
        address: "25 Old Broad Street, London EC2N 1HN, United Kingdom",
        regNo: "12345678",
        fca: "FRN 987654",
      },
      dpo: {
        email: "dpo@qezvoro.com",
        phone: "+44 20 7946 0958",
        postal: "25 Old Broad Street, London EC2N 1HN, UK",
      },
      general: {
        email: "privacy@qezvoro.com",
        phone: "+7 (800) 555-00-77",
      },
      complaints: [
        "UK: ICO — ico.org.uk",
        "EU: národní dozorové orgány",
      ],
    },

    california: {
      title: "Zvláštní ustanovení — Kalifornie (CCPA)",
      text: [
        "Obyvatelé Kalifornie mají rozšířená práva (přístup, výmaz, portabilita, informace o prodeji dat).",
        "Osobní údaje obyvatel Kalifornie NEPRODÁVÁME.",
      ],
    },

    antiFraud: {
      title: "Prevence podvodů — mýty o „Qezvoro podvodu“",
      bullets: [
        "Plný soulad s GDPR/CCPA a dalšími standardy",
        "Nezávislé bezpečnostní audity",
        "Transparentní zpracování bez skrytých podmínek",
        "Licence ve 12+ jurisdikcích",
        "4 roky bez bezpečnostních incidentů",
      ],
      note:
        "Zákaznické recenze Qezvoro potvrzují vysokou úroveň ochrany dat a finančních informací.",
      lastUpdated: "15. srpna 2025",
    },
  },
};
export default cs;
