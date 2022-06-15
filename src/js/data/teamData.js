import Ilya from '../../images/team/Ilya.jpg';
import Anton from '../../images/team/Anton.jpg';
import Denis from '../../images/team/Denis.jpg';
import Olga from '../../images/team/Olga.jpg';
import Sasha from '../../images/team/Sasha.jpg';
import Serhii from '../../images/team/Serhii.jpg';
import Vova from '../../images/team/Vova.jpg';
import Yana from '../../images/team/Yana.jpg';
import Zhenya from '../../images/team/Zhenya.jpg';
import ZhenyaA from '../../images/team/ZhenyaA.jpg';
import Marina from '../../images/team/Marina.jpg';
// import sprites from '../../images/SVG-sprites/symbol-sprites.svg';

export const teamData = [
  {
    id: 1,
    name: 'Евгений Арабаджийский',
    role: 'TeamLead',
    photo: ZhenyaA,
    links: {
      github: 'https://github.com/EvgeniyArabadzhiyskiy',
      linkedin: '',
      facebook: '',
      telegram: '',
    },
  },
  {
    id: 2,
    name: 'Пятничук Илья',
    role: 'ScrumMaster',
    photo: Ilya,
    links: {
      github: 'https://github.com/ZeinHome',
      linkedin: '',
      facebook: '',
      telegram: '',
    },
  },
  {
    id: 3,
    name: 'Антон Гончар',
    role: 'Developer',
    photo: Anton,
    links: {
      github: 'https://github.com/axtellion',
      linkedin: '',
      facebook: '',
      telegram: '',
    },
  },
  {
    id: 4,
    name: 'Сергей Ханас',
    role: 'Developer',
    photo: Serhii,
    links: {
      github: 'https://github.com/zhchok',
      linkedin: '',
      facebook: '',
      telegram: '',
    },
  },
  {
    id: 5,
    name: 'Владимир Шкуратовский',
    role: 'Developer',
    photo: Vova,
    links: {
      github: 'https://github.com/VSHKURAT',
      linkedin: '',
      facebook: '',
      telegram: '',
    },
  },
  {
    id: 6,
    name: 'Денис Прекслер',
    role: 'Developer',
    photo: Denis,
    links: {
      github: 'https://github.com/Preksler',
      linkedin: '',
      facebook: '',
      telegram: '',
    },
  },
  {
    id: 7,
    name: 'Евгений Синегин',
    role: 'Developer',
    photo: Zhenya,
    links: {
      github: 'https://github.com/Yevhen-Synehin',
      linkedin: '',
      facebook: '',
      telegram: '',
    },
  },
  {
    id: 8,
    name: 'Марина Хижняк',
    role: 'Developer',
    photo: Marina,
    links: {
      github: 'https://github.com/Marina-Hizhnyak',
      linkedin: '',
      facebook: '',
      telegram: '',
    },
  },
  {
    id: 9,
    name: 'Лесо Яна',
    role: 'Developer',
    photo: Yana,
    links: {
      github: 'https://github.com/yanaleso',
      linkedin: '',
      facebook: '',
      telegram: '',
    },
  },
  {
    id: 10,
    name: 'Шкапенко Александра',
    role: 'Developer',
    photo: Sasha,
    links: {
      github: 'https://github.com/sasha-shkapenko ',
      linkedin: '',
      facebook: '',
      telegram: '',
    },
  },
  {
    id: 11,
    name: 'Ходоренко Ольга',
    role: 'Developer',
    photo: Olga,
    links: {
      github: 'https://github.com/OlhaKhodorenko',
      linkedin: '',
      facebook: '',
      telegram: '',
    },
  },
]


// function buildSlide(teamMember) {
//   const { name, role, photo, links } = teamMember;

//   return `
//     <div class="image-slider__slide swiper-slide">
//       <div class="image-slider__image">
//         <img src="${photo}" alt="1" />
//       </div>
//       <div class="info">
//         <h3 class="info-title">${name}</h3>
//         <p class="info-role">${role}</p>

//         <ul class="social-links">${Object.entries(links).map(buildLink).join('')
//     } </ul>
//       </div>
//     </div>
//   `
// }
// export default function buildSlides() {
//   return teamData.map(buildSlide).join('')
// }

// function buildLink([service, link]) {
//   return `
//     <li class="social-links__item">
//       <a class="social-links__link" href="${link}">
//         <svg class="social-links__icon" width="25" height="25">
//           <use href="${sprites}#icon-${service}"></use>
//         </svg>
//       </a>
//     </li>
//   `
// }