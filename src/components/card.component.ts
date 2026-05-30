import type { ICard } from '../interfaces/ui/card.interface';

// Render function
export const createPhotoCard = ({titleTxt, urlImg}: ICard):HTMLElement => {

  const card = document.createElement('div');
  card.className = 'card';
  const title = document.createElement('h2');
  title.textContent = titleTxt ?? 'No description';
  
  if ( urlImg ) {
    const img = document.createElement('img');
    img.src = urlImg;
    img.alt = titleTxt ?? 'photo';
    card.append(title, img);
    return card;
  }
  
  card.append(title);
  return card;
};