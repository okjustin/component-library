import { CarouselContext } from './Carousel';
import { useContext } from 'react';
import classNames from 'classnames';

export default function Slide({ children, index, className }) {
  const { slides, currentSlide } = useContext(CarouselContext);
  const selectedSlide = slides[currentSlide];
  const thisSlide = slides[index];
  const isSelected = selectedSlide === thisSlide;

  console.log(selectedSlide);
  console.log(thisSlide);
  console.log(isSelected);

  return (
    isSelected &&
    <div className={classNames(className)}>
      {children}
    </div>
  )
}
