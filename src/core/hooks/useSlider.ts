import { useState, useRef } from "react";

type UseSliderReturnType = {
  slider: any;
  sliderWrapper: any;
  countSlides: number;
  currentSlide: number;
  initSlider: () => void;
  nextSlide: () => void;
  prevSlide: () => void;
};

export const useSlider = ({
  activeSlide = 1,
  gap = 15,
}: {
  activeSlide?: number;
  gap?: number;
}): UseSliderReturnType => {
  const slider = useRef<HTMLElement>();
  const sliderWrapper = useRef<HTMLElement>();

  const [currentSlide, setCurrentSlide] = useState<number>(activeSlide);
  const [countSlides, setCountSlides] = useState<number>(0);

  const initSlider = () => {
    setCountSlides(sliderWrapper.current!.children.length);

    const sliderWidth = slider.current!.offsetWidth;

    sliderWrapper.current!.style.width =
      countSlides * sliderWidth + (countSlides - 1) * gap + "px";
  };

  const nextSlide = () => {
    if (currentSlide >= countSlides) return;
    const slide = currentSlide + 1;
    setCurrentSlide(slide);
    moveSliderWrapper(slide);
  };

  const prevSlide = () => {
    if (currentSlide <= 1) return;
    const slide = currentSlide - 1;
    setCurrentSlide(slide);
    moveSliderWrapper(slide);
  };

  const moveSliderWrapper = (currentSlide: number) => {
    const translatePxValue = -Math.abs(
      (currentSlide - 1) * (slider.current!.offsetWidth / (countSlides - 1))
    );
    // setTranslate(translatePxValue);
    sliderWrapper.current!.style.transform = `translateX(${translatePxValue}px)`;
  };

  return {
    slider,
    sliderWrapper,
    countSlides,
    currentSlide,
    initSlider,
    nextSlide,
    prevSlide,
  };
};
