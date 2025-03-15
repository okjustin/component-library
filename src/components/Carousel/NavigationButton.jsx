import { useContext } from 'react';
import classNames from 'classnames';
import { CarouselContext } from './Carousel';

export default function NavigationButton({ direction, className, children }) {
  const { slides, currentSlide, setCurrentSlide } = useContext(CarouselContext);

  return (
    <button
      className={classNames(className)}
      onClick={() => {
        if (direction === 'next') {
          setCurrentSlide((currentSlide + 1) % slides.length);
        } else {
          setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
        }
      }}
    >
      {children}
    </button>
  );
}
