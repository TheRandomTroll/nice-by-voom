// Menu items
export const MENU_ITEMS = [
  {
    label: 'Начало',
    path: '#banner_section',
    offset: '70',
  },
  {
    label: 'Продукти',
    path: '#service_section',
    offset: '70',
  },
  {
    label: 'Карта',
    path: '#pricing',
    offset: '70',
  },
  {
    label: 'Контакти',
    path: '#testimonial_section',
    offset: '70',
  },
]

import vapeWhite from '../public/vape-white.png'
import vapeBlack from '../public/vape-black.png'
export const BANNER_DATA = {
  sectionImage: vapeWhite,
  screenImage: vapeWhite,
  screenImageDark: vapeBlack,
  title: 'NICE by VOOM',
  text: 'There will be a day–in our lifetime–when we get to celebrate every person on the planet having access. Moment Pro is the best software platform to collect reviews.',
  tagLine: 'Apps Available to download on',
  buttons: [
    {
      title: 'App Store',
      text: 'Download on the',
      link: '#',
    },
    {
      title: 'Google Play',
      text: 'Download on the',
      link: '#',
    },
  ],
}

// Service
import serviceImg from '../public/service-img.png'
import serviceScreen from '../public/service-screen.png'
import imageCocaColaNicotine from '../public/flavors/nicotine/409-4099485_coca-cola-png.png'
import imageAppleNicotine from '../public/flavors/nicotine/Apple 2.png'
import imageBananaStrawberryNicotine from '../public/flavors/nicotine/Banana Strawberry 1.png'
import imageBananaNicotine from '../public/flavors/nicotine/Banana-4.png'
import imageEnergyDrinkNicotine from '../public/flavors/nicotine/ENERGY-01.png'
import imageGrapeNicotine from '../public/flavors/nicotine/Grape_white.png'
import imageGrapefruitNicotine from '../public/flavors/nicotine/Grapefruit-5.png'
import imageMangoNicotine from '../public/flavors/nicotine/mango-14790.png'
import imageMarakujaNicotine from '../public/flavors/nicotine/marakuq 2.png'
import imageMintNicotine from '../public/flavors/nicotine/Mint 3.png'
import imageBerryMixNicotine from '../public/flavors/nicotine/mix berry1.png'
import imageOrangeNicotine from '../public/flavors/nicotine/Orange 2.png'
import imagePeachNicotine from '../public/flavors/nicotine/Peach 2.png'
import imagePineappleNicotine from '../public/flavors/nicotine/Pineapple 4.png'
import imageTobaccoNicotine from '../public/flavors/nicotine/teaserimage-Pipe-Tobacco-vs-Cigar-Tobacco.png'
import imageWatermelonNicotine from '../public/flavors/nicotine/Watermelon 4.png'

import imageBananaNonNicotine from '../public/flavors/non-nicotine/Banana 3.png'
import imageBlueberryNonNicotine from '../public/flavors/non-nicotine/Blueberry-PNG-HD-Image.png'
import imageGrapeNonNicotine from '../public/flavors/non-nicotine/Grape.png'
import imageCoffeeNonNicotine from '../public/flavors/non-nicotine/imgbin_cuban-espresso-cappuccino-caffè-macchiato-coffee-png.png'
import imageLemonNonNicotine from '../public/flavors/non-nicotine/limon-lemon.png'
import imageMangoNonNicotine from '../public/flavors/non-nicotine/Mango.png'
import imageMelonNonNicotine from '../public/flavors/non-nicotine/Melon.png'
import imagePeachNonNicotine from '../public/flavors/non-nicotine/Peach 1.png'
import imageMintNonNicotine from '../public/flavors/non-nicotine/peppermint-leafs_5f3461c23ba1b.png'
import imagePineappleNonNicotine from '../public/flavors/non-nicotine/Pinnaple2.png'
import imageBerriesNonNicotine from '../public/flavors/non-nicotine/pngaaa.com-116929.png'
import imageTobaccoNonNicotine from '../public/flavors/non-nicotine/pngaaa.com-226034.png'
import imageBubblegumNonNicotine from '../public/flavors/non-nicotine/pngaaa.com-667485.png'
import imageVanillaNonNicotine from '../public/flavors/non-nicotine/pngaaa.com-2824796.png'
import imageStrawberryNonNicotine from '../public/flavors/non-nicotine/Strawberries.png'
import imageWatermelonNonNicotine from '../public/flavors/non-nicotine/Watermelons.png'

export const SERVICE_DATA = {
  sectionImage: serviceImg,
  screenImage: serviceScreen,
  title: 'We deliver our products as fast as superman can do',
  text: 'Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool.',
  serviceItemsNicotine: [
    {
      icon: imageCocaColaNicotine,
      title: 'Кола',
    },
    {
      icon: imageAppleNicotine,
      title: 'Ябълка',
    },
    {
      icon: imageBananaStrawberryNicotine,
      title: 'Банан & Ягода',
    },
    {
      icon: imageBananaNicotine,
      title: 'Банан',
    },
    {
      icon: imageEnergyDrinkNicotine,
      title: 'Енергийна напитка',
    },
    {
      icon: imageGrapeNicotine,
      title: 'Грозде',
    },
    {
      icon: imageGrapefruitNicotine,
      title: 'Грейпфрут',
    },
    {
      icon: imageMangoNicotine,
      title: 'Манго',
    },
    {
      icon: imageMarakujaNicotine,
      title: 'Маракуя',
    },
    {
      icon: imageMintNicotine,
      title: 'Мента',
    },
    {
      icon: imageBerryMixNicotine,
      title: 'Горски плодове',
    },
    {
      icon: imageOrangeNicotine,
      title: 'Портокал',
    },
    {
      icon: imagePeachNicotine,
      title: 'Праскова',
    },
    {
      icon: imagePineappleNicotine,
      title: 'Ананас',
    },
    {
      icon: imageTobaccoNicotine,
      title: 'Пура',
    },
    {
      icon: imageWatermelonNicotine,
      title: 'Диня',
    },
  ],
  serviceItemsNonNicotine: [
    {
      icon: imageBananaNonNicotine,
      title: 'Банан',
    },
    {
      icon: imageBlueberryNonNicotine,
      title: 'Боровинка',
    },
    {
      icon: imageGrapeNonNicotine,
      title: 'Грозде',
    },
    {
      icon: imageCoffeeNonNicotine,
      title: 'Кафе',
    },
    {
      icon: imageLemonNonNicotine,
      title: 'Лимон',
    },
    {
      icon: imageMangoNonNicotine,
      title: 'Манго',
    },
    {
      icon: imageMelonNonNicotine,
      title: 'Пъпеш',
    },
    {
      icon: imagePeachNonNicotine,
      title: 'Праскова',
    },
    {
      icon: imageMintNonNicotine,
      title: 'Мента',
    },
    {
      icon: imagePineappleNonNicotine,
      title: 'Ананас',
    },
    {
      icon: imageBerriesNonNicotine,
      title: 'Горски плодове',
    },
    {
      icon: imageTobaccoNonNicotine,
      title: 'Тютюн',
    },
    {
      icon: imageBubblegumNonNicotine,
      title: 'Дъвка',
    },
    {
      icon: imageVanillaNonNicotine,
      title: 'Ванилия',
    },
    {
      icon: imageStrawberryNonNicotine,
      title: 'Ягода',
    },
    {
      icon: imageWatermelonNonNicotine,
      title: 'Диня',
    },
  ]
}

//Delivery
import deliveryProductImage from '../public/delivery-img.png'
import productScreen from '../public/product-screen.png'

export const DELIVERY_PRODUCT_DATA = {
  screenImage: productScreen,
  sectionContent: {
    title: 'Most promising secure app with fast &  Entertaining',
    text: 'Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool.',
    image: deliveryProductImage,
  },
  posts: [
    {
      title: 'Easy to use application',
      text: 'We’re driven beyond just finishing the projects. We want to find solutions using our website & apps.',
    },
    {
      title: 'Deliver Food within 30 min',
      text: 'We’re driven beyond just finishing the projects. We want to find solutions using our website & apps.',
    },
    {
      title: '100% Reliable with Privacy',
      text: 'We’re driven beyond just finishing the projects. We want to find solutions using our website & apps.',
    },
  ],
}

//Clients
import geekwire from '../public/client-1.png'
import slack from '../public/client-2.png'
import envato from '../public/client-3.png'
import usaToday from '../public/client-4.png'
import forbes from '../public/client-5.png'
import evernote from '../public/client-6.png'

export const CLIENTS_DATA = {
  title: '210,000+ people already use our app on a daily basis',
  clients: [
    {
      id: 1,
      logo: geekwire,
      name: 'geekwire',
      link: '#1',
    },
    {
      id: 2,
      logo: slack,
      name: 'slack',
      link: '#2',
    },
    {
      id: 3,
      logo: envato,
      name: 'envato',
      link: '#3',
    },
    {
      id: 4,
      logo: usaToday,
      name: 'usa today',
      link: '#4',
    },
    {
      id: 5,
      logo: forbes,
      name: 'forbes',
      link: '#5',
    },
    {
      id: 6,
      logo: evernote,
      name: 'evernote',
      link: '#6',
    },
  ],
}


export const TESTIMONIALS = [
  {
    review:
      'Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. We are super excited about it. Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. We are super excited about it.',
    name: 'Jon Doe',
    designation: 'CEO of Dell Co.'
  },
  {
    review:
      'Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. We are super excited about it. Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. We are super excited about it.',
    name: 'Jon Doe',
    designation: 'Co Founder of IBM'
  },
  {
    review:
      'Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. We are super excited about it. Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. We are super excited about it.',
    name: 'Jeny Doe',
    designation: 'Manager of Hp co.'
  },
  {
    review:
      'Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. We are super excited about it. Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. We are super excited about it.',
    name: 'Jon Doe',
    designation: 'CEO of Dell Co.'
  },
  {
    review:
      'Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. We are super excited about it. Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. We are super excited about it.',
    name: 'Jon Doe',
    designation: 'Co Founder of IBM'
  },
]

//Pricing policy
import iceCreamIconBlack from '../public/plan-icecream-black-icon.svg'
import iceCreamIconWhite from '../public/plan-icecream-white-icon.svg'
import donutIconBlack from '../public/plan-donut-black-icon.svg'
import donutIconWhite from '../public/plan-donut-white-icon.png'
import pizzaIconBlack from '../public/plan-pizza-black-icon.svg'
import pizzaIconWhite from '../public/plan-pizza-white-icon.svg'
import linkIcon from '../public/plan-link-icon.png'

export const pricing = {
  linkIcon,
  title: 'Meet our awesome pricing plan',
  monthly: [
    {
      id: 1,
      title: 'Starter Pack',
      description: 'Complete time tracking & proper reporting',
      suggested: false,
      price: '16',
      iconBlack: iceCreamIconBlack,
      iconWhite: iceCreamIconWhite,
    },
    {
      id: 2,
      title: 'Premium Pack',
      description: 'Effortless team with time management.',
      suggested: true,
      price: '29',
      trail: 14,
      trailLink: '#',
      iconBlack: donutIconBlack,
      iconWhite: donutIconWhite,
    },
    {
      id: 3,
      title: 'Ultimate Pack',
      description: 'A custom plan for complex or large organization.',
      suggested: true,
      price: '35',
      trail: 14,
      trailLink: '#',
      iconBlack: pizzaIconBlack,
      iconWhite: pizzaIconWhite,
    },
  ],
  annualy: [
    {
      id: 1,
      title: 'Starter Pack',
      description: 'Complete time tracking & proper reporting',
      suggested: false,
      price: '160',
      iconBlack: iceCreamIconBlack,
      iconWhite: iceCreamIconWhite,
    },
    {
      id: 2,
      title: 'Premium Pack',
      description: 'Effortless team with time management.',
      suggested: true,
      price: '290',
      trail: 14,
      trailLink: '#',
      iconBlack: donutIconBlack,
      iconWhite: donutIconWhite,
    },
    {
      id: 3,
      title: 'Ultimate Pack',
      description: 'A custom plan for complex or large organization.',
      suggested: true,
      price: '350',
      trail: 14,
      trailLink: '#',
      iconBlack: pizzaIconBlack,
      iconWhite: pizzaIconWhite,
    },
  ],
}

// faq
export const faq = {
  slogan: 'FREQUENT QUESTION',
  title: 'Do you have any question?',
  faqs: [
    {
      id: 11,
      question: 'How to contact with riders emergency?',
      answer:
        'Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home. Your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.',
    },
    {
      id: 12,
      question: 'App installation failed, how to update system information?',
      answer:
        'Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home. Your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.',
    },
    {
      id: 13,
      question: 'Website reponse taking time, how to improve?',
      answer:
        'Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home. Your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.',
    },
    {
      id: 14,
      question: 'New update fixed all bug and issues',
      answer:
        'Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home. Your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.',
    },
  ],
}

//QualityFeatures
import featureIcon1 from '../public/feature-icon-1.png'
import featureIcon2 from '../public/feature-icon-2.png'
import featureIcon3 from '../public/feature-icon-3.png'
import featureIcon4 from '../public/feature-icon-3.png'
import featureIcon5 from '../public/feature-icon-5.png'
import featureIcon6 from '../public/feature-icon-6.png'

export const QUALITY_FEATURES_DATA = {
  title: 'Meet our Quality Features',
  posts: [
    {
      icon: featureIcon1,
      title: 'Analytics Business',
      text: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
    },
    {
      icon: featureIcon2,
      title: 'Artificial Intelligence',
      text: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
    },
    {
      icon: featureIcon3,
      title: 'Privacy & Security',
      text: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
    },
    {
      icon: featureIcon4,
      title: 'Annual Reports',
      text: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
    },
    {
      icon: featureIcon5,
      title: 'Video Tutorial',
      text: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
    },
    {
      icon: featureIcon6,
      title: 'Performance Analysis',
      text: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
    },
  ],
}
