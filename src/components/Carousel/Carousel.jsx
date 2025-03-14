import { createContext, useState, useEffect } from 'react';
import classNames from 'classnames';

const CarouselContext = createContext();

export default function Carousel({ children, className }) {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() =>{
    const slides = children.filter(child => child.type.name === 'Slide');
    setSlides(slides);
  }, [])

  return (
    <CarouselContext.Provider
      value={{ slides, setSlides, currentSlide, setCurrentSlide }}
    >
      <div className={classNames(className)}>{children}</div>
    </CarouselContext.Provider>
  );
}

export { CarouselContext }