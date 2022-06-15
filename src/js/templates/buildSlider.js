import { teamData } from "../../js/data/teamData";
import sprites from '../../images/SVG-sprites/symbol-sprites.svg';

function buildSlide(teamMember) {
    const { name, role, photo, links } = teamMember;
  
    return `
      <div class="image-slider__slide swiper-slide">
        <div class="image-slider__image">
          <img src="${photo}" alt="1" />
        </div>
        <div class="info">
          <h3 class="info-title">${name}</h3>
          <p class="info-role">${role}</p>
  
          <ul class="social-links">${Object.entries(links).map(buildLink).join('')
      } </ul>
        </div>
      </div>
    `
}
  
  
function buildLink([service, link]) {
return `
    <li class="social-links__item">
    <a class="social-links__link" href="${link}">
        <svg class="social-links__icon" width="25" height="25">
        <use href="${sprites}#icon-${service}"></use>
        </svg>
    </a>
    </li>
`
}

export default function buildSlides() {
    return teamData.map(buildSlide).join('')
}