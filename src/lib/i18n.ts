import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const enTranslations = {
  common: {
    bookNow: "BOOK NOW",
    bookNowLower: "Book now",
    reserveYourStay: "RESERVE YOUR STAY",
    exploreRoom: "Explore room",
    viewAllActivities: "View All Activities",
    viewGallery: "View Gallery",
    upgradeAccess: "Upgrade Access",
    submitBooking: "Submit Booking",
    submitting: "Submitting...",
    thankYou: "Thank you! We'll be in touch soon.",
    somethingWentWrong: "Something went wrong. Please try again.",
    bookingDescription: "Booking Paradox House means committing to transformation. Whether you seek deep rest, focused creation, or a full Residency experience, we tailor every detail to your journey.",
    fullName: "Full Name",
    email: "Email",
    phoneNumber: "Phone Number",
    whyCome: "Why do you want to come?",
    areYouPartOfParadox: "Are you part of Paradox?",
    yes: "Yes",
    no: "No",
    whichCohort: "Which cohort are you in the program?",
    enterCohort: "Enter your cohort",
    whichProgram: "Which program did you buy with us?",
    enterProgram: "Enter the program name"
  },
  hero: {
    title: "PARADOX HOUSE",
    subtitle: "Where deep work meets recovery. Where protocols become practice. For creators and thinkers on the path of mastery."
  },
  about: {
    welcome: "WELCOME TO PARADOX HOUSE.",
    elegantRetreats: "YOUR ELEGANT RETREATS AROUND THE WORLD",
    description: "For most of the year, Paradox House remains a private sanctuary for deep rest and focused creation. Several weeks annually, we open our doors to a small number of guests—creators, thinkers, and those committed to mastery.",
    transformation: "This is where transformation happens."
  },
  hotels: {
    title: "LISBON AWAITS YOU",
    mainLivingTitle: "Main Living\nSpace",
    mainLivingDesc: "A sanctuary designed for deep work and focused creation. Natural light floods through expansive windows, creating an environment where ideas flow and transformation happens. Every detail curated for your journey of mastery.",
    privateSanctuaryTitle: "Kitchen &\nDining",
    privateSanctuaryDesc: "A culinary sanctuary where modern design meets functional elegance. The open kitchen features premium appliances and marble surfaces, flowing seamlessly into a spacious dining area. Gather around the elegant marble table for nourishing meals and meaningful conversations—a space designed for both creation and connection.",
    rooftopTitle: "Private\nBedroom",
    rooftopDesc: "Your personal sanctuary for rest and restoration. A thoughtfully designed space with elegant wardrobes, natural light, and serene ambiance. Every detail curated to ensure deep sleep and peaceful mornings—where your transformation journey finds its foundation."
  },
  activities: {
    title: "WHERE EVERYDAY IS DESIGNED FOR YOU THROUGH CUSTOM LOOPS",
    morningActivation: "Morning Activation",
    deepWork: "Deep Work",
    eveningRecovery: "Evening Recovery",
    transformation: "7-minute Transformation",
    andMore: "And More",
    description: "Your Paradox protocols come to life. From sunrise breathwork on the terrace to evening red-light recovery, each loop guides you into flow state and accelerates your transformation."
  },
  protocols: {
    title: "WHERE PROTOCOLS MEET PRACTICE",
    arrivalRitual: "Your Arrival Ritual",
    arrivalDesc: "Paradox sonic identity welcomes you. Burgundy cedar, oud, and sage fill the space. A breathing exercise card in your hand. Your reflection notebook awaits.",
    curatedMastery: "Curated for Mastery",
    curatedDesc: "Micro-Library of Greatness. Posters exploring mind and purpose. Local art adorning the walls. Guest Manifest Journal for shared wisdom.",
    recoveryProtocols: "Recovery Protocols",
    recoveryDesc: "Eight Sleep syncs with Oura and the PX App. Red-light panel for cellular recovery. Ice bath corner meets infrared sauna. Your transformation toolkit."
  },
  residency: {
    week: "A Week",
    of: "of",
    greatness: "Greatness",
    model: "The Residency Model",
    description: "An immersive transformation experience. Seven days with two like-minded creators in deep work, recovery protocols, and shared rituals. Limited to 12 weeks per year. Bookable only by PX OS+ members."
  },
  gallery: {
    title: "EXPERIENCE PARADOX HOUSE",
    description: "Step inside the world of Paradox House—where minimalist design, cutting-edge wellness, and Lisbon's natural beauty converge for transformation."
  },
  partOfParadox: {
    partOf: "PART OF",
    paradox: "PARADOX",
    description: "For Paradox members—exclusive rates unlock through private booking links. Direct bookings remain available at standard rates."
  },
  ecosystem: {
    distributionProtocol: "The Distribution Protocol",
    title: "THE ECOSYSTEM",
    description: "Paradox House is the physical node of the PX OS. Access is distributed via the collective—granting members the right to inhabit the space at prioritized rates. Choose your tier and unlock exclusive benefits.",
    lastMinute: "Last Minute",
    flashProtocol: "FLASH PROTOCOL",
    discount: "Discount",
    flashDesc: "Last-minute availability dropped via PX App 48 hours before vacancy. For those who move with intention.",
    flashDesc2: "Available to all members. Notifications sent through the PX App when rooms become available at this exclusive rate.",
    tier01: "Tier 01",
    freeUser: "FREE USER",
    collectiveMember: "Collective Member",
    discountOnHouses: "Discount on PX Houses",
    freeUserDesc: "Access to all Paradox House locations with a standard 15% discount. Perfect for first-time visitors exploring the ecosystem.",
    accessLisbonDubai: "Access to Lisbon & Dubai houses",
    pxEcosystemIntegration: "PX Ecosystem integration",
    flashProtocolAccess: "Access to Flash Protocol (60% last-minute discounts)",
    standardBooking: "Standard booking process",
    tier02: "Tier 02",
    paidUser: "PAID USER",
    paidUserDesc: "Enhanced access with deeper discounts and exclusive perks. Designed for committed members who return regularly.",
    earlyCheckin: "Early check-in or ritual kit gift",
    priorityBooking: "Priority booking access",
    ouraSync: "Oura/PX App Sync integration",
    allLocations: "Access to all locations with enhanced rates",
    flashEligibility: "Flash Protocol eligibility (60% last-minute discounts)",
    legacyRituals: "Legacy Rituals Included",
    legacyDesc: "Exclusive access to curated rituals and protocols designed to accelerate your transformation journey.",
    post4x: "Post 4×/year",
    alumniMembers: "PARADOX ALUMNI & MEMBERS",
    offDirectBookings: "Off Direct Bookings",
    alumniDesc: "For Paradox alumni and members — 30% off direct bookings in Lisbon or Dubai. Posted four times per year through exclusive channels.",
    alumniDesc2: "Use a private link; Airbnb price stays high for others. These exclusive offers are shared directly with the Paradox community.",
    exclusiveAccess: "Exclusive access to private booking links",
    availableLocations: "Available in Lisbon and Dubai locations",
    limitedOffers: "Limited-time offers posted quarterly"
  },
  footer: {
    tagline: "Paradox House is a collection of retreats",
    contact: "Contact",
    locations: "Locations",
    socials: "Socials",
    comingSoon: "Coming Soon",
    copyright: "© 2026 All rights reserved.",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy"
  }
}

const frTranslations = {
  common: {
    bookNow: "RÉSERVER MAINTENANT",
    bookNowLower: "Réserver maintenant",
    reserveYourStay: "RÉSERVEZ VOTRE SÉJOUR",
    exploreRoom: "Explorer la chambre",
    viewAllActivities: "Voir toutes les activités",
    viewGallery: "Voir la galerie",
    upgradeAccess: "Améliorer l'accès",
    submitBooking: "Soumettre la réservation",
    submitting: "Envoi en cours...",
    thankYou: "Merci ! Nous vous contacterons bientôt.",
    somethingWentWrong: "Une erreur s'est produite. Veuillez réessayer.",
    bookingDescription: "Réserver Paradox House, c'est s'engager dans une transformation. Que vous recherchiez un repos profond, une création focalisée ou une expérience de Résidence complète, nous adaptons chaque détail à votre parcours.",
    fullName: "Nom complet",
    email: "E-mail",
    phoneNumber: "Numéro de téléphone",
    whyCome: "Pourquoi souhaitez-vous venir ?",
    areYouPartOfParadox: "Faites-vous partie de Paradox ?",
    yes: "Oui",
    no: "Non",
    whichCohort: "Dans quelle cohorte êtes-vous dans le programme ?",
    enterCohort: "Entrez votre cohorte",
    whichProgram: "Quel programme avez-vous acheté chez nous ?",
    enterProgram: "Entrez le nom du programme"
  },
  hero: {
    title: "PARADOX HOUSE",
    subtitle: "Là où le travail profond rencontre la récupération. Là où les protocoles deviennent pratique. Pour les créateurs et penseurs sur le chemin de la maîtrise."
  },
  about: {
    welcome: "BIENVENUE À PARADOX HOUSE.",
    elegantRetreats: "VOS RETRAITES ÉLÉGANTES À TRAVERS LE MONDE",
    description: "La plupart de l'année, Paradox House reste un sanctuaire privé pour le repos profond et la création focalisée. Plusieurs semaines par an, nous ouvrons nos portes à un petit nombre d'invités—créateurs, penseurs et ceux engagés dans la maîtrise.",
    transformation: "C'est là que se produit la transformation."
  },
  hotels: {
    title: "LISBONNE VOUS ATTEND",
    mainLivingTitle: "Espace de Vie\nPrincipal",
    mainLivingDesc: "Un sanctuaire conçu pour le travail profond et la création focalisée. La lumière naturelle inonde à travers de vastes fenêtres, créant un environnement où les idées circulent et la transformation se produit. Chaque détail est soigné pour votre parcours de maîtrise.",
    privateSanctuaryTitle: "Cuisine &\nSalle à Manger",
    privateSanctuaryDesc: "Un sanctuaire culinaire où le design moderne rencontre l'élégance fonctionnelle. La cuisine ouverte dispose d'appareils haut de gamme et de surfaces en marbre, s'écoulant harmonieusement dans un espace de restauration spacieux. Rassemblez-vous autour de la table en marbre élégante pour des repas nourrissants et des conversations significatives—un espace conçu pour la création et la connexion.",
    rooftopTitle: "Chambre\nPrivée",
    rooftopDesc: "Votre sanctuaire personnel pour le repos et la restauration. Un espace soigneusement conçu avec des armoires élégantes, une lumière naturelle et une ambiance sereine. Chaque détail est soigné pour assurer un sommeil profond et des matins paisibles—où votre parcours de transformation trouve ses fondations."
  },
  activities: {
    title: "OÙ CHAQUE JOUR EST CONÇU POUR VOUS À TRAVERS DES BOUCLES PERSONNALISÉES",
    morningActivation: "Activation Matinale",
    deepWork: "Travail Profond",
    eveningRecovery: "Récupération du Soir",
    transformation: "Transformation de 7 Minutes",
    andMore: "Et Plus",
    description: "Vos protocoles Paradox prennent vie. De la respiration au lever du soleil sur la terrasse à la récupération par lumière rouge le soir, chaque boucle vous guide vers l'état de flux et accélère votre transformation."
  },
  protocols: {
    title: "OÙ LES PROTOCOLES RENCONTRENT LA PRATIQUE",
    arrivalRitual: "Votre Rituel d'Arrivée",
    arrivalDesc: "L'identité sonore Paradox vous accueille. Cèdre bordeaux, oud et sauge remplissent l'espace. Une carte d'exercice de respiration dans votre main. Votre carnet de réflexion vous attend.",
    curatedMastery: "Sélectionné pour la Maîtrise",
    curatedDesc: "Micro-Bibliothèque de Grandeur. Affiches explorant l'esprit et le but. Art local ornant les murs. Journal Manifeste des Invités pour la sagesse partagée.",
    recoveryProtocols: "Protocoles de Récupération",
    recoveryDesc: "Eight Sleep se synchronise avec Oura et l'application PX. Panneau de lumière rouge pour la récupération cellulaire. Coin bain de glace rencontre sauna infrarouge. Votre boîte à outils de transformation."
  },
  residency: {
    week: "Une Semaine",
    of: "de",
    greatness: "Grandeur",
    model: "Le Modèle de Résidence",
    description: "Une expérience de transformation immersive. Sept jours avec deux créateurs partageant les mêmes idées dans le travail profond, les protocoles de récupération et les rituels partagés. Limité à 12 semaines par an. Réservable uniquement par les membres PX OS+."
  },
  gallery: {
    title: "DÉCOUVREZ PARADOX HOUSE",
    description: "Entrez dans le monde de Paradox House—où le design minimaliste, le bien-être de pointe et la beauté naturelle de Lisbonne convergent pour la transformation."
  },
  partOfParadox: {
    partOf: "FAIT PARTIE DE",
    paradox: "PARADOX",
    description: "Pour les membres Paradox—des tarifs exclusifs se débloquent via des liens de réservation privés. Les réservations directes restent disponibles aux tarifs standard."
  },
  ecosystem: {
    distributionProtocol: "Le Protocole de Distribution",
    title: "L'ÉCOSYSTÈME",
    description: "Paradox House est le nœud physique du PX OS. L'accès est distribué via le collectif—accordant aux membres le droit d'habiter l'espace à des tarifs prioritaires. Choisissez votre niveau et débloquez des avantages exclusifs.",
    lastMinute: "Dernière Minute",
    flashProtocol: "PROTOCOLE FLASH",
    discount: "Réduction",
    flashDesc: "Disponibilité de dernière minute déposée via l'application PX 48 heures avant la vacance. Pour ceux qui bougent avec intention.",
    flashDesc2: "Disponible pour tous les membres. Notifications envoyées via l'application PX lorsque des chambres deviennent disponibles à ce tarif exclusif.",
    tier01: "Niveau 01",
    freeUser: "UTILISATEUR GRATUIT",
    collectiveMember: "Membre du Collectif",
    discountOnHouses: "Réduction sur les Maisons PX",
    freeUserDesc: "Accès à tous les emplacements Paradox House avec une réduction standard de 15%. Parfait pour les visiteurs de première fois explorant l'écosystème.",
    accessLisbonDubai: "Accès aux maisons de Lisbonne et Dubaï",
    pxEcosystemIntegration: "Intégration à l'écosystème PX",
    flashProtocolAccess: "Accès au Protocole Flash (réductions de dernière minute de 60%)",
    standardBooking: "Processus de réservation standard",
    tier02: "Niveau 02",
    paidUser: "UTILISATEUR PAYANT",
    paidUserDesc: "Accès amélioré avec des réductions plus importantes et des avantages exclusifs. Conçu pour les membres engagés qui reviennent régulièrement.",
    earlyCheckin: "Enregistrement anticipé ou cadeau de kit rituel",
    priorityBooking: "Accès prioritaire à la réservation",
    ouraSync: "Intégration de synchronisation Oura/Application PX",
    allLocations: "Accès à tous les emplacements avec tarifs améliorés",
    flashEligibility: "Éligibilité au Protocole Flash (réductions de dernière minute de 60%)",
    legacyRituals: "Rituels Hérités Inclus",
    legacyDesc: "Accès exclusif aux rituels et protocoles sélectionnés conçus pour accélérer votre parcours de transformation.",
    post4x: "Publication 4×/an",
    alumniMembers: "ANCIENS ÉLÈVES ET MEMBRES PARADOX",
    offDirectBookings: "Sur Réservations Directes",
    alumniDesc: "Pour les anciens élèves et membres Paradox—30% de réduction sur les réservations directes à Lisbonne ou Dubaï. Publié quatre fois par an via des canaux exclusifs.",
    alumniDesc2: "Utilisez un lien privé; le prix Airbnb reste élevé pour les autres. Ces offres exclusives sont partagées directement avec la communauté Paradox.",
    exclusiveAccess: "Accès exclusif aux liens de réservation privés",
    availableLocations: "Disponible dans les emplacements de Lisbonne et Dubaï",
    limitedOffers: "Offres à durée limitée publiées trimestriellement"
  },
  footer: {
    tagline: "Paradox House est une collection de retraites",
    contact: "Contact",
    locations: "Emplacements",
    socials: "Réseaux Sociaux",
    comingSoon: "Bientôt Disponible",
    copyright: "© 2026 Tous droits réservés.",
    terms: "Conditions Générales",
    privacy: "Politique de Confidentialité"
  }
}

// Get language from URL or default to 'en'
const getLanguageFromPath = () => {
  if (typeof window === 'undefined') return 'en'
  const path = window.location.pathname
  if (path.startsWith('/fr')) return 'fr'
  if (path.startsWith('/en')) return 'en'
  return 'en'
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      fr: {
        translation: frTranslations,
      },
    },
    lng: getLanguageFromPath(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
