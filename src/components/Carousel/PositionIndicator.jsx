import { useContext } from 'react';
import classNames from 'classnames';
import { CarouselContext } from './Carousel';

export default function PositionIndicator({ className }) {
  const { slides, setCurrentSlide } = useContext(CarouselContext);

  return (
    <div className={classNames(className)}>
      {slides.map((slide, index) => (
        <button key={index} onClick={() => setCurrentSlide(index)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
}
