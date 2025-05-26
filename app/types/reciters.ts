export interface Ireciters {
  id: number;
  name: string;
  letter: string;
  moshaf: [
    {
      id: number;
      name: string;
      server: string;
      surah_total: number;
      moshaf_type: number;
      surah_list: string;
    }
  ];
}

export interface  Imoshaf   {
      id: number;
      name: string;
      server: string;
      surah_total: number;
      moshaf_type: number;
      surah_list: string;
}

export interface IreciterDetails {
  reciters: [Ireciters];
}

export interface Isurah {
  id: number;
  name: string;
  start_page: number;
  end_page: number;
  makkia: number;
  type: number;
}

export interface IallSuwar {
  suwar: [Isurah];
}

export interface IreciterParams {
  params: {
    reciter_details: string[];
  };
}

export interface ItafsirParams {
  params: {
    tafsir_id: string;
  };
}

export interface Ilive {
  id: number;
  name: string;
  url: string;
}

export interface IsearchParams {
  channel: string;
  url: string;
}

export interface Iradios {
  radios: [Ilive];
}

export interface ItafasirsCategories {
  tafasir: [Ilive];
}

export interface IsurahTafsirDetails {
  id: number;
  sura_id: number;
  tafsir_id: number;
  url: string;
  name: string;
}

export interface ItafasirDetails {
  tafasir: {
    name: string;
    soar: [IsurahTafsirDetails];
  };
}

export interface IsurahTafsirAllDetails {
  tafasir: {
    name: string;
    soar: {
      [key:string]: [IsurahTafsirDetails];
    };
  };
}

export interface IsurahTafsirParams {
  params : {
    tafsir_id: string,
    surah_tafsir: string,
  }
}

export interface IsectionDetails {
  start: number;
  title: string;
}
