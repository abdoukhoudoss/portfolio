import { Project } from "@/types/project.type";

export const projects: Project[] = [

  {
    id: 1,
    title: "Wildy_Gamy",
    description: "Site présentant une salle d'arcade avec intégration d'un jeu en ligne et une gestion des interfaces (visiteur, utilisateur, administrateur) grâce à l'authentification sécurisée",
    technologies: ["React", "Node.js", "API", "SQL", "JWT"]
   },

    {
     id: 2,
     title: "Helpi",
     description: "Application web fast-tract en 48h sous le thème de la Bienveillance, Helpi est une plateforme de mise en relation entre bénévoles et associations pour accomplir des missions humanitaires. Frontend en React, Backend en Node avec Express et la base de données en SQL",
     technologies: ["React", "Node.js", "API", "SQL"]
    },
    {
      id: 3,
      title: "Weatherly",
      description: "Application permettant d'afficher la météo du jour, possibilité d'utiliser la géolocalisation pour la météo en temps réel avec ajout et gestion des favoris. Nous avons intégrer une carte interactive nous permettant d'avoir la météo d'une ville en la sélection depuis la carte avec possibilité de la mettre en favori",
      technologies: ["React", "Leaflet", "Node.js", "API"]
    },
    {
      id: 4,
      title: "Wild-Eat",
      description: "Application web pour repérer les restaurants de notre Campus avec possibilité de filtrer, trier en fonction de paramètres essenteilles (distance, prix, pertinence, genre, notes).Les données ont été chargées depuis un fichier JSON local créé pour les besoins du projet.",
      technologies: ["HTML", "CSS", "JS", "JSON"]
    }, 

    {
      id: 5,
      title: "SoCake",
      description: "Boutique en ligne pour entreprise de vente de gateaux faits maison via le CMS Wordpress. Utilisation et configuration du plugin WooCommerce pour implémenter les modules e-commerce. Intégration des système de paiment avec Stripe, d'un système de sécurité avec certification SSL",
      technologies: ["Wordpress", "WooCommerce", "Stripe",]
    }, 
    {
      id: 6,
      title: "Courrier du Visionnaire",
      description: "Site de journal en ligne pour magazine d'informations sur l'actualité, la science, les technologies réalisé avec le CMS Drupal avec implémentation d'une API d'authentification et configuration des plugins de sécurité et exploitation d'une base de données.",
      technologies: ["Drupal", "HTML", "CSS"]
    }, 
    {
      id: 7,
      title: "Dof-Shop",
      description: "Boutique en ligne pour entreprise de vente de vêtements et chaussures africains en utilsant le plugin WooCommerce pour implémenter les modules e-commerce. Intégration des système de paiment avec Stripe, d'un système de sécurité avec certification SSL",
      technologies: ["Wordpress", "WooCommerce", "Stripe",]
    },
     
  ];