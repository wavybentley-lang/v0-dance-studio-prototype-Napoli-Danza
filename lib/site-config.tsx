import {
  Calendar,
  CalendarRange,
  Crown,
  Flame,
  Heart,
  Star,
  Tag,
  Ticket,
  Users,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react"

export type NavLink = {
  href: string
  label: string
}

export type Course = {
  title: string
  age: string
  description: string
  image: string
  Icon: LucideIcon
}

export type CourseCategory = {
  label: string
  courses: Course[]
}

export type ScheduleDay = {
  day: string
  classes: {
    time: string
    name: string
  }[]
}

export type TeamMember = {
  photo: string
  name: string
  role: string
  bio: string
}

export const brand = {
  name: "Il Sogno di Rita Castanò",
  shortName: "Il Sogno",
  tagline: "Scuola di danza per bambini, ragazzi e adulti.",
  logo: "",
  phone: "3347927040",
  phoneHref: "tel:+393347927040",
  whatsappHref: "https://wa.me/393347927040",
  email: "il_sogno@yahoo.com",
  emailHref: "mailto:il_sogno@yahoo.com",
  instagramHref: "https://www.instagram.com/vox_mundi_napoli/",
  facebookHref: "https://www.facebook.com/lovelydancebeautyfitnessvomero",
  mapsHref: "https://maps.google.com/?q=Via+Martiri+D%27Otranto+98%2Fa+80141+Napoli",
  primaryLocation: "Via Martiri D'Otranto, 98/a",
  secondaryLocation: "80141 Napoli",
  cityLine: "Napoli",
  hours:
    "Mercoledì: 10:00-23:00\n" +
    "Giovedì: 10:00-23:00\n" +
    "Venerdì: 10:00-23:00\n" +
    "Sabato: 10:00-23:00\n" +
    "Domenica: 9:00-17:00\n" +
    "Lunedì: 10:00-23:00\n" +
    "Martedì: 10:00-23:00",
  copyright: "© 2026 Il Sogno di Rita Castanò ASD",
}

export const navLinks: NavLink[] = [
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#corsi", label: "Corsi" },
  { href: "#orari", label: "Orari" },
  { href: "#prezzi", label: "Prezzi" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contatti", label: "Contatti" },
]

export const stats = [
  { number: "10+", label: "DISCIPLINE" },
  { number: "DAI 3 ANNI", label: "BAMBINI, RAGAZZI E ADULTI" },
  { number: "2", label: "SPETTACOLI ALLANNO" },
  { number: "CORSI", label: "BASE E AVANZATI" },
]

export const courseCategories: CourseCategory[] = [
  {
    label: "Dance",
    courses: [
      {
        title: "Danza Aerei",
        age: "Tutti i livelli",
        description: "Percorsi di danza aerea per sviluppare forza, eleganza, controllo e presenza scenica.",
        image: "/additional/corsi-aerei.jpg",
        Icon: Zap,
      },
      {
        title: "Danza Classica",
        age: "Tutti i livelli",
        description: "Tecnica, postura, disciplina e musicalita per costruire solide basi artistiche.",
        image: "/additional/corsi-classica.jpg",
        Icon: Flame,
      },
      {
        title: "Danza Contemporanea / Contemporaneo",
        age: "Tutti i livelli",
        description: "Movimento, espressivita e ricerca coreografica per liberare corpo e interpretazione.",
        image: "/additional/corsi-contemporanea.jpg",
        Icon: Crown,
      },
    ],
  },
  {
    label: "Corpo e Movimento",
    courses: [
      {
        title: "Corsi Pilates",
        age: "Tutti i livelli",
        description: "Allenamento controllato per postura, tonificazione, stabilita e consapevolezza corporea.",
        image: "/additional/corsi-pilates.jpg",
        Icon: Wind,
      },
      {
        title: "Corsi Romandanza",
        age: "Tutti i livelli",
        description: "Un percorso coreografico e artistico dedicato a espressione, eleganza e movimento.",
        image: "/additional/corsi-romandanza.jpg",
        Icon: Heart,
      },
    ],
  },
]

export const featuredGalleryPhotos = [
  { src: "/additional/nostri_momenti2.jpg", alt: "Il Sogno momento in sala" },
  { src: "/additional/nostri-momenti1.jpg", alt: "Il Sogno gruppo danza" },
  { src: "/additional/nostri-momenti3.jpg", alt: "Il Sogno lezione di danza" },
  { src: "/additional/nostri-momenti4.jpg", alt: "Il Sogno momento sul palco" },
  { src: "/additional/nostri-momenti5.jpg", alt: "Il Sogno allieve in scena" },
  { src: "/additional/nostri-momenti6.jpg", alt: "Il Sogno saggio di danza" },
]

export const allGalleryPhotos = [
  "/group_outside_.jpg", "/inside_school_children_lesson.jpg", "/male_female_duo.jpg",
  "/outside_event_students.jpg", "/solo_female_air_dance.jpg", "/student_green_dress.jpg",
  "/air_dance_student.jpg", "/collage_children_group.jpg", "/group_male_female_stuends_stage.jpg",
  "/IMG_8356.JPG.webp", "/IMG_8357.JPG.webp", "/IMG_8359.JPG.webp", "/IMG_8360.JPG.webp",
  "/IMG_8363.JPG.webp", "/IMG_8364.JPG.webp", "/IMG_8367.JPG.webp", "/IMG_8368.JPG.webp",
  "/IMG_8369.JPG.webp", "/IMG_8370.JPG.webp", "/IMG_8371.JPG.webp", "/IMG_8373.JPG.webp",
  "/IMG_8377.JPG.webp", "/IMG_8378.JPG.webp", "/IMG_8379.JPG.webp", "/IMG_8380.JPG.webp",
  "/IMG_8382.JPG.webp", "/IMG_8383.JPG.webp", "/IMG_8385.JPG.webp", "/IMG_8387.JPG.webp",
  "/IMG_8390.JPG.webp", "/IMG_8396.JPG.webp", "/IMG_8402.JPG.webp", "/IMG_8413.webp",
  "/additional/saggio-ateneo-agropoli-1.webp", "/additional/saggio-ateneo-agropoli-2.webp",
  "/additional/performance-ateneo-agropoli.webp", "/additional/spettacolo-fine-anno-ateneo-1.webp",
  "/additional/spettacolo-fine-anno-ateneo-3.webp", "/additional/spettacolo-fine-anno-ateneo.webp",
  "/additional/danza-femminile-sedia-agropoli.webp", "/additional/female-perform-sitting-chair.webp",
  "/additional/female-solo.webp", "/additional/females-group-perform.webp",
  "/additional/females-perform-stage.webp", "/additional/females-performs3.webp",
  "/additional/group-performance-4.webp", "/additional/group-performance-all-black.webp",
  "/additional/groupd-perform-1.webp", "/additional/kid-perform-solo.webp",
  "/additional/kid-solo-performance.webp", "/additional/kids-group-performance.webp",
  "/additional/kids-performance.webp", "/additional/kids-performance1.webp",
  "/additional/m-f-performa1.webp", "/additional/male-dancer.webp",
  "/additional/male-fdemale-performance4.webp", "/additional/male-female-ballet-1.webp",
  "/additional/coppia-balletto-ateneo-agropoli.webp",
  "/additional/coppia-balletto-ateneo-agropoli-3.webp",
  "/additional/duo-danza-ateneo-agropoli.webp", "/additional/gruppo-misto-performance-ateneo.webp",
  "/additional/coppia-performance-ateneo-cilento.webp",
  "/additional/coppia-danza-moderna-agropoli.webp",
  "/additional/coppia-danza-moderna-agropoli-1.webp",
  "/additional/coppia-danza-moderna-agropoli-2.webp",
  "/additional/coppia-danza-moderna-agropoli-4.webp",
  "/additional/coppia-performance-palcoscenico-1.webp",
  "/additional/coppia-performance-palcoscenico-2.webp",
  "/additional/coppia-performance-palcoscenico-3.webp",
  "/additional/coppia-danza-ateneo.webp", "/additional/gruppo-misto-danza-ateneo-3.webp",
  "/additional/danzatore-performance-agropoli-2.webp",
  "/additional/danzatore-solo-ateneo-agropoli.webp",
  "/additional/danzatore-solo-palcoscenico-agropoli.webp",
  "/additional/danzatore-solo-palcoscenico-agropoli-1.webp",
  "/additional/duo-misto-performance-ateneo.webp",
  "/additional/uomo-danza-performance-agropoli.webp",
  "/additional/performance-danza-ateneo-agropoli.webp",
  "/additional/due-ragazze-palcoscenico-ateneo.webp",
  "/additional/donna-danza-performance-agropoli-3.webp",
  "/additional/donna-danza-rosso-ateneo-agropoli.webp",
  "/additional/donne-performance-ateneo-agropoli-2.webp",
]

export const salaArmoniaSchedule: ScheduleDay[] = [
  {
    day: "LUNEDÌ",
    classes: [
      { time: "10:00-11:00", name: "Pilates" },
      { time: "11:00-12:00", name: "Gyrokinesis" },
      { time: "14:00-15:00", name: "Danza Classica" },
      { time: "17:00-18:00", name: "Danza Moderna" },
      { time: "19:00-20:00", name: "PBT" },
      { time: "20:30-21:30", name: "Modern Dance" },
      { time: "21:30-22:30", name: "Danza Contemporanea" },
      { time: "22:30-23:30", name: "Danze Orientali" },
    ],
  },
  {
    day: "MARTEDÌ",
    classes: [
      { time: "12:00-13:00", name: "Pilates" },
      { time: "14:00-15:00", name: "PBT" },
      { time: "17:00-18:00", name: "Danza Classica" },
      { time: "18:00-19:00", name: "Hip Hop" },
      { time: "19:30-20:30", name: "Musical" },
      { time: "20:30-21:30", name: "Danze Latino Americane" },
      { time: "21:30-22:30", name: "Danza Moderna" },
      { time: "22:30-23:30", name: "Danza Contemporanea" },
    ],
  },
  {
    day: "MERCOLEDÌ",
    classes: [
      { time: "11:30-12:30", name: "Danza Classica" },
      { time: "14:00-15:00", name: "Gyrokinesis" },
      { time: "16:00-17:00", name: "Danza Moderna" },
      { time: "18:00-19:00", name: "Modern Dance" },
      { time: "19:00-20:00", name: "Pilates" },
      { time: "20:30-21:30", name: "Danze Caraibiche" },
      { time: "21:30-22:30", name: "Danza Contemporanea" },
    ],
  },
  {
    day: "GIOVEDÌ",
    classes: [
      { time: "10:00-11:00", name: "Pilates" },
      { time: "11:00-12:00", name: "Gyrokinesis" },
      { time: "14:00-15:00", name: "PBT" },
      { time: "17:00-18:00", name: "Danza Classica" },
      { time: "18:30-19:30", name: "Modern Dance" },
      { time: "19:30-20:30", name: "Danza Moderna" },
      { time: "20:30-21:30", name: "Danza Contemporanea" },
      { time: "21:30-22:30", name: "Danze Orientali" },
      { time: "22:30-23:30", name: "Musical" },
    ],
  },
  {
    day: "VENERDÌ",
    classes: [
      { time: "14:00-15:00", name: "PBT" },
      { time: "18:00-19:00", name: "Pilates" },
      { time: "19:00-20:00", name: "Danza Classica" },
      { time: "20:00-21:00", name: "Danze Latino Americane" },
      { time: "21:00-22:00", name: "Danza Moderna" },
      { time: "22:00-23:00", name: "Modern Dance" },
    ],
  },
  {
    day: "SABATO",
    classes: [
      { time: "11:00-12:00", name: "Gyrokinesis" },
      { time: "15:30-16:30", name: "Musical" },
      { time: "17:00-18:00", name: "Danze Caraibiche" },
    ],
  },
  {
    day: "DOMENICA",
    classes: [{ time: "10:00-12:30", name: "Danza Contemporanea" }],
  },
]

export const salaRitmoSchedule = salaArmoniaSchedule

export const scheduleBookingServices = [
  "Lezioni individuali di danza",
  "Preparazione esami e concorsi",
  "Percorsi di perfezionamento",
]

export const scheduleContactInfo = {
  address: "Via Martiri D'Otranto, 98/a, 80141 Napoli",
  phone: "3347927040",
}

export const pricingCards = [
  { Icon: Ticket, title: "Lezione Singola", description: "Ideale per provare un corso prima di iscriverti. Nessun impegno, massima flessibilità." },
  { Icon: Calendar, title: "Abbonamento Mensile", description: "La soluzione più flessibile per chi vuole ballare con regolarità ogni mese." },
  { Icon: CalendarRange, title: "Abbonamento Semestrale", description: "Sei mesi di lezioni con un risparmio rispetto all'abbonamento mensile." },
  { Icon: Crown, title: "Abbonamento Annuale", description: "La scelta di chi vuole dare continuità al proprio percorso artistico. Massimo risparmio." },
]

export const pricingHighlights = [
  { Icon: Tag, title: "Tariffe Differenziate", description: "I costi variano in base al corso scelto e all'età dell'allievo. Contattaci per ricevere il preventivo personalizzato." },
  { Icon: Users, title: "Sconti Famiglia", description: "Sono previste riduzioni speciali per fratelli e/o sorelle e per mamme e figlie che si iscrivono insieme." },
]
