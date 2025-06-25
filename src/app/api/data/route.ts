import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { FeaturesType } from '@/app/types/features'
import { ExpertChiefType } from '@/app/types/expertchief'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FooterLinkType } from '@/app/types/footerlink'
import { FullMenuType } from '@/app/types/fullmenu'

const HeaderData: HeaderItem[] = [
  { label: 'About Us', href: '/#aboutus' },
  { label: 'Menu', href: '/#menu' },
  { label: 'Reserve Table', href: '/#reserve' },
  { label: 'Docs', href: '/documentation' },
]

const FeaturesData: FeaturesType[] = [
  {
    imgSrc: '/images/1.svg',
    heading: 'Serene Beauty Lounge',
    subheading:
      'Step into a calming, elegant space designed for relaxation, rejuvenation, and a touch of indulgence.',
  },
  {
    imgSrc: '/images/2.svg',
    heading: 'Signature Beauty Rituals',
    subheading:
     'Experience exclusive treatments thoughtfully designed by our expert stylists and skin specialists — tailored to bring out your natural radiance.',
  },
  {
    imgSrc: '/images/3.svg',
    heading: 'Pure, Skin-Loving Ingredients',
    subheading:
      'We use clean, high-quality products enriched with natural botanicals to nourish your skin and enhance lasting beauty',
  },
  {
    imgSrc: '/images/6.svg',
    heading: 'Effortless Booking Experience',
    subheading:
      'Schedule your glow-up in just a few clicks — or stop by anytime. We’re here when you need a beauty escape.',
  }
]

const ExpertChiefData: ExpertChiefType[] = [
  {
    profession: 'Director Stylist',
    name: 'Marco Benton',
    imgSrc: '/images/Experts/1.jpg',
  },
  {
    profession: 'Master Stylist',
    name: 'Michael Smith',
    imgSrc: '/images/Experts/4.jpg',
  },

  {
    profession: 'Senior Stylist',
    name: 'Madeleine Smith',
    imgSrc: '/images/Experts/3.jpg',
  },
  {
    profession: 'Senior Stylist',
    name: 'John Doe',
    imgSrc: '/images/Experts/5.jpg',
  },
  {
    profession: 'Senior Stylist',
    name: 'Mike',
    imgSrc: '/images/Experts/4.jpg',
  },
]

const GalleryImagesData: GalleryImagesType[] = [
  {
    src: '/images/Gallery/img1.jpg',
    name: 'Unwind. Refresh. Radiate.',
    text: 'Experience a facial that’s more than skincare — it’s self-care.',
    price: 35,
  },
  {
    src: '/images/Gallery/img2.jpg',
    name: 'Smooth Confidence, Every Time',
    text: 'Reveal silky, hair-free skin with our expert waxing services.',
    price: 17,
  },
  {
    src: '/images/Gallery/img3.jpg',
    name: 'Cut Above the Rest',
    text: "Precision cuts that define your style and elevate your confidence.",
    price: 45,
  },
  {
    src: '/images/Gallery/img4..jpg',
    text: 'From natural elegance to full glam — makeup tailored to you.',
    name: 'Beauty, Perfectly Defined',
    price: 27,
  },
]

const FullMenuData: FullMenuType[] = [
  {
    name: 'Radiance Facial',
    price: '$16.00',
    description: 'A glow-boosting facial with deep cleansing and botanical hydration.',
  },
  {
    name: 'HydraGlow Therapy',
    price: '$24.00',
    description: 'Advanced skin hydration with serums and LED light therapy.',
  },
  {
    name: 'Signature Hair Spa',
    price: '$18.00',
    description: 'Intensive hair and scalp treatment with steam and nourishing mask.',
  },
  {
    name: 'Classic Manicure & Pedicure',
    price: '$10.50',
    description: 'Gentle exfoliation, nail care, and polish for hands and feet.',
  },
  {
    name: 'Luxury Body Polish',
    price: '$21.00',
    description: 'Full-body exfoliation with aromatic scrubs for smooth, glowing skin.',
  },
  {
    name: 'Brow & Lash Define',
    price: '$8.75',
    description: 'Brow shaping and lash tinting for a naturally enhanced look.',
  },
  {
    name: 'Rejuvenating Massage',
    price: '$25.00',
    description: '60-minute full-body massage with essential oils for deep relaxation.',
  },
];



const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/#aboutus' },
      { label: 'Menu', href: '/#menu' },
      { label: 'Reserve Table', href: '/#reserve' },
    ],
  },
  {
    section: 'Support',
    links: [
      { label: 'Help/FAQ', href: '/' },
      { label: 'Press', href: '/' },
      { label: 'Affiliates', href: '/' },
      { label: 'Hotel owners', href: '/' },
      { label: 'Partners', href: '/' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeaturesData,
    ExpertChiefData,
    GalleryImagesData,
    FullMenuData,
    FooterLinkData,
  })
}
