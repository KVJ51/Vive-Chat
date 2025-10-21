// src/utils/languageUtils.js
export function getLanguageFlag(language) {
  switch (language?.toLowerCase()) {
    case "english":
    case "en":
      return "🇬🇧";
    case "french":
    case "fr":
      return "🇫🇷";
    case "spanish":
    case "es":
      return "🇪🇸";
    case "german":
    case "de":
      return "🇩🇪";
    default:
      return "🌐";
  }
}