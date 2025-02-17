// No imports - This file only contains TypeScript type definitions

// Defines the structure of a country's data
export interface Country {
  name: string;                    // Country name (e.g., "Afghanistan")
  topLevelDomain: string[];       // Domain extensions (e.g., [".af"])
  alpha2Code: string;             // Two-letter country code (e.g., "AF")
  alpha3Code: string;             // Three-letter country code (e.g., "AFG")
  callingCodes: string[];         // International calling codes
  capital: string;                // Capital city name
  altSpellings: string[];        // Alternative country names/spellings
  subregion: string;             // Geographic subregion
  region: string;                // Continental region
  population: number;            // Total population count
  latlng: number[];             // Latitude and longitude coordinates
  demonym: string;              // Name for country's inhabitants
  area: number;                 // Country's total area
  timezones: string[];         // Country's timezones
  borders: string[];           // Neighboring country codes
  nativeName: string;          // Country name in native language
  numericCode: string;         // Numeric country code
  flags: {                     // Country flag URLs
    svg: string;              // Vector format
    png: string;              // Raster format
  };
  currencies: Array<{         // Country's currency information
    code: string;            // Currency code
    name: string;            // Currency name
    symbol: string;          // Currency symbol
  }>;
  languages: Array<{         // Official languages
    iso639_1: string;       // ISO language codes
    iso639_2: string;
    name: string;           // Language name
    nativeName: string;     // Language name in native script
  }>;
  translations: {           // Country name translations
    [key: string]: string; // Key is language code, value is translated name
  };
  flag: string;            // Legacy flag URL
  regionalBlocs: Array<{   // Regional organization memberships
    acronym: string;       // Organization acronym
    name: string;          // Full organization name
  }>;
  cioc: string;           // International Olympic Committee code
  independent: boolean;    // Independence status
} 