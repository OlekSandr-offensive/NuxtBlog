import defaultImg from '../../public/default.jpeg';

export function handleImageError(event: Event): void {
  if (event.target instanceof HTMLImageElement) {
    event.target.src = defaultImg;
  }
}
