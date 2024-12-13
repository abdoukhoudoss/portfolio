
export interface Award {
    id: number;
    title: string;
    year: string;
    organization: string;
  }
  
  export const awards: Award[] = [
    {
      id: 1,
      title: "Talents de la Diversité",
      year: "2023",
      organization: "Mairie Toulouse"
    },
    {
      id: 2,
      title: "Meilleure Plaidoirie",
      year: "2012",
      organization: "Survie Midi-Pyrénnées"
    }
  
  ];