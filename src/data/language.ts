import { Interest } from "@/types/interest.type";
import { Language } from "@/types/language.types";


export const languages: Language[] = [
    { id: 1, name: "Français", level: "niveau C2" },
    { id: 2, name: "Anglais", level: "niveau A2" },
    { id: 3, name: "Wolof/Maternelle", level: "niveau C2" },
  ];
  

  export const interests: Interest[] = [
    { id: 1, category: "Technologie", details: "Web, Sécurité, I.A" },
    { id: 2, category: "Lecture", details: "Politique, Société, Poésie" },
    { 
      id: 3, 
      category: "Bénévolat associatif", 
      details: "Secrétaire Général Association Massalik : Humanitaire, Education, Culture" 
    }
  ];
  