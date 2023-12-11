// import images
import Logo from '../src/img/header/logo.svg';
import GalleryImg1 from '../src/img/gallery/1.png';
import GalleryImg2 from '../src/img/gallery/2.png';
import GalleryImg3 from '../src/img/gallery/3.png';
import GalleryImg4 from '../src/img/gallery/4.png';
import GalleryImg5 from '../src/img/gallery/5.png';
import GalleryImg6 from '../src/img/gallery/6.png';
import GalleryImg7 from '../src/img/gallery/7.png';
import GalleryImg8 from '../src/img/gallery/8.png';
import { GrFacebookOption } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
} from 'react-icons/io';

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '/', name: '' },
    { href: '/', name: '' },
    { href: '/', name: '' },
    { href: '/', name: '' },
  ],
};

export const socialData = [
  { href: 'https://www.facebook.com/kelemen.gergo.90', icon: <GrFacebookOption /> },
  { href: 'https://www.instagram.com/kristofkelementattoo/', icon: <IoLogoInstagram /> },
];

export const heroData = {
  title: 'Kristof Kelemen',
  subtitle:
    'Tattoos have their own unique power and magic. They not only beautify the body but also the psyche.',
  
};

export const aboutData = {
  title: 'My Story:',
  subtitle1:
    'Welcome to my website! My name is [Name], and I am pleased to say that I have more than 10 years of tattooing experience. Drawing started for me in my childhood, and over the years, I have specialized in tattooing. After completing my university studies, I decided that tattooing would be my main focus.',
  subtitle2:
    'Over the years, I have worked in many different styles and motifs, so every tattoo I create is unique and personalized. I place great importance on detail and meticulous work to ensure that my clients are satisfied with my work.',
};

export const galleryData = {
  title: 'Check my gallery:',
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 380,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 380,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 380,
      height: 412,
    },
  ],
};

export const contactData = {
  title: 'Get in touch with me:',
  info: [
    {
      title: 'Basel office',
      subtitle:
        '---------------',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '-----------',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '123456789',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@email',
      },
      link: 'Get location',
    },
   
  ],
  form: {
    name: 'Write your name here',
    email: 'Write your email address',
    message: 'Write your messages here',
    btnText: 'Send it',
  },
};

export const footerData = {
  about: {
    title: 'Contact Me',
    subtitle:
      'Kristof Kelemen Tattoo Artist',
    address: {
      icon: <FaMapMarkerAlt />,
      name: 'Basel , Switzerland',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '123456789',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'contact@email',
    },
  },
  links: {
    title: 'Contacy my Salon',
    items: [
      { href: '/', name: '' },
      { href: '/', name: '' },
      { href: '/', name: '' },
      { href: '/', name: '' },
    ],
  },
  program: {
    title: 'Working Time',
    items: [
      { name: 'Mon - Tue / Appointment' },
      { name: 'Wed - Fri / 10:00 - 9:00pm' },
      { name: 'Sat / 10:00 - 6:00pm' },
      { name: 'Sun / no work on this day' },
    ],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle:
      '----------',
    form: {
      placeholder: 'Your email address',
      icon: <FiSend />,
    },
  },
};