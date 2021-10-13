export interface ICountry {
  name: Name;
  cca2: string;
  cca3: string;
  capital: string[];
  translations: { [key: string]: Translation; };
  population: number;
  flags: Flags;
}


export interface Flags {
  svg: string;
  png: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  aym: Translation;
  que: Translation;
  spa: Translation;
}

export interface Translation {
  official: string;
  common: string;
}
