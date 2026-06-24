const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelector("#year").textContent = new Date().getFullYear();

const translations = {
  en: {
    pageTitle: "Chirag Govindaraj — Industrial Engineer",
    pageDescription:
      "Portfolio of Chirag Govindaraj, an industrial engineer specializing in data analytics, predictive maintenance, continuous improvement, and industrial performance.",
    logoLabel: "Chirag home",
    navLabel: "Main navigation",
    navExperience: "Experience",
    navAbout: "About",
    navContact: "Contact",
    availability: "Open to opportunities",
    availabilityShort: "Available",
    heroEyebrow: "Industrial engineer · Strasbourg, France",
    heroLabel: "I turn industrial data into performance",
    heroLine1: "I turn industrial",
    heroLine2Prefix: "data into",
    heroDecision: "decisions",
    heroAnd: "and",
    heroPerformance: "performance.",
    heroIntro:
      "I connect data, people, and processes to improve industrial performance—from predictive maintenance to operational dashboards.",
    exploreLabel: "Explore professional experience",
    skillsLabel: "Skills",
    skillAnalytics: "Industrial Analytics",
    skillImprovement: "Continuous Improvement",
    skillMaintenance: "Predictive Maintenance",
    skillManufacturing: "Smart Manufacturing",
    experienceEyebrow: "01 / Experience",
    experienceTitle: "Turning analysis<br />into impact.",
    experienceIntro:
      "Experience across quality, maintenance, mechanical engineering, and analytics—with a focus on results that teams can act on.",
    hagerVisualLabel: "Industrial analytics and predictive maintenance",
    equipmentHealth: "Equipment health overview",
    hagerTools: "Python · Power BI · DMAIC",
    hagerRole: "Industrial Engineering & Quality Intern · Obernai, France",
    hagerDate: "Feb 2025 — Aug 2025",
    hagerPoint1:
      "Built KPI reporting and dashboards from production and failure data for Quality and Maintenance decisions.",
    hagerPoint2:
      "Developed a Python-based predictive-maintenance approach using reliability statistics and survival analysis.",
    hagerPoint3:
      "Applied DMAIC, root-cause analysis, and weekly routines to structure continuous improvement.",
    bodhiVisualLabel: "Product and process optimization",
    costSaved: "percent<br />packaging<br />cost saved.",
    bodhiTools: "Design · Process · Cost",
    bodhiRole: "Mechanical Engineering Consultant · Bangalore, India",
    bodhiDate: "Feb 2022 — Apr 2023",
    bodhiPoint1:
      "Redesigned packaging and processes to simplify operational flows.",
    bodhiPoint2:
      "Reduced packaging costs by approximately 60% and material costs by approximately 40%.",
    pollupVisualLabel: "Market research and data dashboards",
    research: "Research",
    dataToInsight: "data to insight",
    pollupTools: "Research · Data · LimeSurvey",
    pollupRole: "Marketing Intern · Berlin, Germany (Remote)",
    pollupDate: "Jun 2024 — Aug 2024",
    pollupPoint1:
      "Supported client projects through market research, data analysis, reporting, and LimeSurvey scripting.",
    pollupPoint2: "Created dashboards for internal networks.",
    aboutEyebrow: "02 / About",
    aboutTitle:
      "Engineer by training.<br />Analyst by instinct.<br /><span>Improver at heart.</span>",
    aboutParagraph1:
      "I’m Chirag, an industrial engineer and graduate of École Centrale de Nantes, where I ranked first in the Smart & Connected Enterprise master’s program.",
    aboutParagraph2:
      "I use analytics, programming, and practical improvement methods to turn operational data into better decisions. I’m especially interested in Industry 4.0, performance management, and change that lasts beyond the dashboard.",
    downloadCv: "Download my CV",
    toolkit: "Core toolkit",
    education: "Education",
    mscTitle: "MSc Industrial Engineering",
    mscSchool: "Smart & Connected Enterprise · École Centrale de Nantes",
    mscDate: "2023 — 2025 · Ranked first in class",
    bengTitle: "BEng Mechanical Engineering",
    podiumLabel:
      "Three equal podiums; the center podium rises with Chirag celebrating first place in his class",
    rankedFirst: "Ranked #1",
    contactEyebrow: "03 / Let’s talk",
    contactTitle: "Building better systems?<br /><span>Let’s talk.</span>",
    phoneLabel: "Phone",
    openCvLabel: "Open CV",
    footerCare: "Built with care.",
    backToTop: "Back to top ↑",
    toggleLabel: "Switch website language to French",
  },
  fr: {
    pageTitle: "Chirag Govindaraj — Ingénieur industriel",
    pageDescription:
      "Portfolio de Chirag Govindaraj, ingénieur industriel spécialisé en analyse de données, maintenance prédictive, amélioration continue et performance industrielle.",
    logoLabel: "Accueil de Chirag",
    navLabel: "Navigation principale",
    navExperience: "Expérience",
    navAbout: "À propos",
    navContact: "Contact",
    availability: "Ouvert aux opportunités",
    availabilityShort: "Disponible",
    heroEyebrow: "Ingénieur industriel · Strasbourg, France",
    heroLabel: "Je transforme les données industrielles en performance",
    heroLine1: "Je transforme les",
    heroLine2Prefix: "données en",
    heroDecision: "décisions",
    heroAnd: "et en",
    heroPerformance: "performance.",
    heroIntro:
      "Je relie les données, les équipes et les processus pour améliorer la performance industrielle—de la maintenance prédictive aux tableaux de bord opérationnels.",
    exploreLabel: "Découvrir mon expérience professionnelle",
    skillsLabel: "Compétences",
    skillAnalytics: "Analyse industrielle",
    skillImprovement: "Amélioration continue",
    skillMaintenance: "Maintenance prédictive",
    skillManufacturing: "Industrie intelligente",
    experienceEyebrow: "01 / Expérience",
    experienceTitle: "De l’analyse<br />à l’impact.",
    experienceIntro:
      "Une expérience en qualité, maintenance, ingénierie mécanique et analyse de données, avec des résultats concrets au service des équipes.",
    hagerVisualLabel: "Analyse industrielle et maintenance prédictive",
    equipmentHealth: "Vue d’ensemble de la santé des équipements",
    hagerTools: "Python · Power BI · DMAIC",
    hagerRole: "Stagiaire Ingénieur industriel / Qualité · Obernai, France",
    hagerDate: "Fév. 2025 — Août 2025",
    hagerPoint1:
      "Conception de reportings KPI et de tableaux de bord à partir des données de production et de panne pour les décisions Qualité et Maintenance.",
    hagerPoint2:
      "Développement d’une approche de maintenance prédictive en Python fondée sur les statistiques de fiabilité et l’analyse de survie.",
    hagerPoint3:
      "Application de la démarche DMAIC, de l’analyse des causes racines et de routines hebdomadaires pour structurer l’amélioration continue.",
    bodhiVisualLabel: "Optimisation des produits et des processus",
    costSaved: "pour cent<br />économisés sur<br />l’emballage.",
    bodhiTools: "Conception · Processus · Coûts",
    bodhiRole: "Consultant en ingénierie mécanique · Bangalore, Inde",
    bodhiDate: "Fév. 2022 — Avr. 2023",
    bodhiPoint1:
      "Reconfiguration des emballages et des processus afin de simplifier les flux opérationnels.",
    bodhiPoint2:
      "Réduction d’environ 60 % des coûts d’emballage et de 40 % des coûts matière.",
    pollupVisualLabel: "Études de marché et tableaux de bord",
    research: "Études",
    dataToInsight: "des données aux décisions",
    pollupTools: "Études · Données · LimeSurvey",
    pollupRole: "Stagiaire Marketing · Berlin, Allemagne (télétravail)",
    pollupDate: "Juin 2024 — Août 2024",
    pollupPoint1:
      "Contribution aux projets clients : études de marché, analyse de données, rédaction de rapports et scripting LimeSurvey.",
    pollupPoint2: "Création de tableaux de bord pour les réseaux internes.",
    aboutEyebrow: "02 / À propos",
    aboutTitle:
      "Ingénieur de formation.<br />Analyste par instinct.<br /><span>Améliorateur dans l’âme.</span>",
    aboutParagraph1:
      "Je suis Chirag, ingénieur industriel diplômé de l’École Centrale de Nantes, où j’ai terminé major de promotion du master Smart & Connected Enterprise.",
    aboutParagraph2:
      "J’utilise l’analyse de données, la programmation et les méthodes d’amélioration continue pour transformer les données opérationnelles en meilleures décisions. Je m’intéresse particulièrement à l’Industrie 4.0, au pilotage de la performance et aux changements qui perdurent au-delà du tableau de bord.",
    downloadCv: "Télécharger mon CV",
    toolkit: "Outils principaux",
    education: "Formation",
    mscTitle: "Master Génie industriel",
    mscSchool: "Smart & Connected Enterprise · École Centrale de Nantes",
    mscDate: "2023 — 2025 · Major de promotion",
    bengTitle: "Bachelor Génie mécanique",
    podiumLabel:
      "Trois podiums initialement égaux ; le podium central s’élève avec Chirag célébrant sa première place dans la promotion",
    rankedFirst: "Classé n°1",
    contactEyebrow: "03 / Échangeons",
    contactTitle:
      "Vous améliorez vos systèmes ?<br /><span>Échangeons.</span>",
    phoneLabel: "Téléphone",
    openCvLabel: "Ouvrir le CV",
    footerCare: "Conçu avec soin.",
    backToTop: "Retour en haut ↑",
    toggleLabel: "Passer le site en anglais",
  },
};

const languageToggle = document.querySelector(".language-toggle");
const languageCurrent = document.querySelector(".language-current");
const languageNext = document.querySelector(".language-next");
const description = document.querySelector('meta[name="description"]');

const getSavedLanguage = () => {
  try {
    return localStorage.getItem("portfolio-language");
  } catch {
    return null;
  }
};

const saveLanguage = (language) => {
  try {
    localStorage.setItem("portfolio-language", language);
  } catch {
    // The language still switches when local storage is unavailable.
  }
};

const applyLanguage = (language) => {
  const selected = translations[language] || translations.en;

  document.documentElement.lang = language;
  document.title = selected.pageTitle;
  description.setAttribute("content", selected.pageDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (selected[key]) element.textContent = selected[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (selected[key]) element.innerHTML = selected[key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    if (selected[key]) element.setAttribute("aria-label", selected[key]);
  });

  const nextLanguage = language === "en" ? "fr" : "en";
  languageCurrent.textContent = language.toUpperCase();
  languageNext.textContent = nextLanguage.toUpperCase();
  languageToggle.setAttribute("aria-label", selected.toggleLabel);
  languageToggle.setAttribute("aria-pressed", String(language === "fr"));
};

let currentLanguage = getSavedLanguage() === "fr" ? "fr" : "en";
applyLanguage(currentLanguage);

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "fr" : "en";
  applyLanguage(currentLanguage);
  saveLanguage(currentLanguage);
});

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((element) => observer.observe(element));

if (!reducedMotion && window.matchMedia("(pointer: fine)").matches) {
  const glow = document.querySelector(".cursor-glow");

  window.addEventListener("pointermove", (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  });
}

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});
