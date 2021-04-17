import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sayush Kamat', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Sayush Kamat is a freelance web developer based in Mumbai,India', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello,I\'m',
  name: 'Sayush Kamat',
  subtitle: 'I am a freelance Web Developer',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Clean UI is the most important thing to keep in Mind when designing and developing Solutions for Businesses along with a secure business Logic.',
  paragraphTwo: 'I do not just code . I paint the screen using  various web development languages as my paintbrushes.I am a Bachelor of Technology undergraduate of Veermata Jijabai Technological Institute,Mumbai studying in Third Year of the Four Year Information Technology Programme.I am an active member of the Web Team of Google DSC ,VJTI',
  paragraphThree: 'I have helped various businesses,organizations and NGOs in setting up their online presence.So ,what are you waiting for.'
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'prideca.webp',
    title: 'Pride Commerce Education Website',
    info: 'This is a  fullstack MERN website made for an online commerce course selling business using the MERN stack ',
    info2: 'This website was designed and developed in a team of 9 developers as a part of DSC VJTI.I worked on the react frontend part along with 4 other team members as well as I was the link between the DSC Design Team and the Frontend Team.The website uses two factor OTP based Auth System.My contributions include Landing page,navbar,Animate on Scroll Setup,Axios set up,Marketplace , Product Details page ,OTP Verification page as well as Connecting to the backend APIs ',
    url: 'https://prideca.in',
    repo: 'https://github.com/thedarkdivinity/giftjunction.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.webp',
    title: 'DSC VJTI Website',
    info: 'As a member of the Web Team of Developer Student Club VJTI,developed this website in a team of 5 members.My major contribution was in hosting the Website,setting up the domain,setting up the netlify form submission and the page animations.',
    info2: 'Technologies used are Bootstrap 4,CSS3,HTML5 and Javascript .Animate On Scroll Library was used for Page Animations',
    url: 'https://www.dscvjti.tech',
    repo: 'https://github.com/thedarkdivinity/dsc-vjti.github.io.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.webp',
    title: 'Gift Junction Website',
    info: 'This is a website made for a local gift shop using html5,css3,Bootstrap 4  javascript and JQuery ',
    info2: 'Animate on Scroll Library is used for smooth 60fps scroll animations',
    url: 'https://giftjunction.netlify.app',
    repo: 'https://github.com/thedarkdivinity/giftjunction.git', // if no repo, the button will not show up
  },
  
  {
    id: nanoid(),
    img: 'project3.webp',
    title: 'FLY HIGH NGO',
    info: 'A React Landing Page for an upcoming NGO .I volunteered to develop a website for this NGO ',
  
    url: 'https://flyhighngo.netlify.app/',
    repo: 'https://github.com/thedarkdivinity/ngoflyhigh.git', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Let\'s Talk!',
  btn: 'Reach Out To Me',
 
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sayushkamat',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/thedarkdivinity',
    },
  ],
};


export const githubButtons = {
  isEnabled: false, 
};
