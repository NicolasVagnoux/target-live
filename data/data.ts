import { Artist, Concert } from "./types";

export const concerts: Concert[] = [
  {
    title: 'Soirée Panique',
    date: '15/10/2025',
    location: 'Le Transbordeur 1 - Lyon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: './assets/concerts/concert_1.jpeg',
    link: 'https://www.instagram.com/targetlive.production/',
    star: true
  },
  {
    title: 'Soirée Panique 2 Panique 2',
    date: '20/12/2025',
    location: 'Le Transbordeur 2 - Lyon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: './assets/concerts/concert_2.jpeg',
    link: 'https://www.instagram.com/targetlive.production/',
    star: true
  },
  {
    title: 'Concert sur la liste',
    date: '18/01/2026',
    location: 'Le Transbordeur 3 - Lyon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '',
    link: 'https://www.instagram.com/targetlive.production/',
    star: false
  },
  {
    title: 'Soirée Panique 3',
    date: '04/02/2026',
    location: 'Le Transbordeur 4 - Lyon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: './assets/concerts/concert_1.jpeg',
    link: 'https://www.instagram.com/targetlive.production/',
    star: true
  },
];

export const artists: Artist[] = [
  {
    id: 1,
    name: 'Yoann Gallant',
    image: './assets/artists/YoannGallant.jpg',
    logo: '',
    style: 'Folk',
    musicians: '1 membre',
    description: 'Yoann Gallant s’inspire de ses origines québécoises et françaises pour fusionner les musiques folk, rock et la chanson française. Un voyage musical festif entre chansons à texte et cavalcades country, blues et rock’n roll.',
    link: 'https://yoanngallant.com/index.php/yoann-gallant',
    video: 'https://www.youtube.com/embed/5GgSSCwiyuw?si=tRdNrn3SBmRTEq4Z',
  },
  {
    id: 2,
    name: 'Hearscape',
    image: './assets/artists/Hearscape.jpg',
    logo: './assets/artists/Hearscape_logo.png',
    style: 'Rock alternatif',
    musicians: '5 membres',
    description: 'HEARSCAPE déploie un univers musical riche en contrastes, où la délicatesse côtoie la puissance, et où l’intime se mêle au grandiose. Le groupe fusionne la pop et le rock dans un équilibre subtil entre tension et relâchement, clarté et obscurité.',
    link: 'https://hearscape.net',
    video: 'https://www.youtube.com/embed/-qF9Ky8CgKk?si=3CM4xhPZmOqeJoYI'
  },
  {
    id: 3,
    name: 'Horizon Nuit',
    image: './assets/artists/HorizonNuit.jpg',
    logo: '',
    style: '',
    musicians: '3 membres',
    description: '',
    link: '',
    video: ''
  },
  {
    id: 4,
    name: 'Patterson Panique',
    image: './assets/artists/PattersonPanique.jpg',
    logo: '',
    style: 'Soft rock',
    musicians: '2 membres + 3 additionnels en live',
    description: "Paterson Panique c'est deux frères qui font du soft-rock en français. Paterson Panique c'est la vie quotidienne des relations : la peur, les doutes, les hauts, les bas et parfois tout en même temps...surtout tout en même temps.",
    link: 'https://www.instagram.com/patersonpanique/',
    video: ''
  },
  {
    id: 5,
    name: 'Phoque Off',
    image: './assets/artists/PhoqueOff.jpg',
    logo: './assets/artists/PhoqueOff_logo.png',
    style: 'Ambiant rock',
    musicians: '4 membres',
    description: 'Phoque Off mêle riffs puissants et atmosphères planantes pour incarner la rage, les blessures et la renaissance. Entre féminisme engagé et histoires de cœur, leur voix frappe, émeut et reste en tête.',
    link: 'https://www.instagram.com/phoqueoffband/?hl=fr',
    video: ''
  },
  {
    id: 6,
    name: 'Âmé',
    image: './assets/artists/Ame.jpg',
    logo: '',
    style: 'Pop française',
    musicians: '1 membre',
    description: "ÂMÉ, c’est une voix à la fois puissante et douce. Artiste sensible et inspirée par le monde qui l’entoure, elle puise dans les émotions humaines pour créer un univers où se croisent mélancolie et espoir. À travers sa musique, ÂMÉ nous invite à prendre soin de notre cœur.",
    link: 'https://linktr.ee/ameliafrenchmusic',
    video: ''
  },
  {
    id: 7,
    name: 'Synesthese',
    image: './assets/artists/Synesthese.jpg',
    logo: './assets/artists/Synesthese_logo.png',
    style: 'Métal progressif',
    musicians: '6 membres',
    description: 'Produit d’une hybridation hasardeuse entre Ange, Leprous, Magma, Dark Tranquility et un anthropoïde pratchettien évadé de sa bibliothèque, Synesthèse vous propose une une croisière intime sur les flots troublés de la psyché.',
    link: 'https://www.facebook.com/people/Synesth%C3%A8se/100089871158749/',
    video: ''
  },
  {
    id: 8,
    name: 'Eben Band',
    image: './assets/artists/EdenBand.jpg',
    logo: '',
    style: 'Rock-Jazz',
    musicians: '4 membres (formule trio actuellement)',
    description: 'La musique d’Eben band fait voyager son audience à travers des paysages sensoriels variés mêlant contemplation, sensualité mais aussi force et enchantement.',
    link: 'https://linktr.ee/eben.band.music',
    video: "https://www.youtube.com/embed/dP0DBGTO3_0?si=7K2nFqvXgZNpJbLZ"
  },
];
