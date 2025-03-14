import { CarouselContext } from './Carousel';
import { useContext } from 'react';
import classNames from 'classnames';

export default function Slide({ children, className }) {
  // Get the slides from the context
  const { slides, currentSlide } = useContext(CarouselContext);
  const slide = slides[currentSlide];
  if (slide !== children) return null

  // Find this slide in there
  // If this slide matches the current slide from the context, render it, otherwise don't
  return (
    <div className={classNames(className)}>
      {children}
    </div>
  )
}