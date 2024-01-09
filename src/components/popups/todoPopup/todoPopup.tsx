import { FC, useEffect } from "react";
import { useSlider } from "../../../core/hooks/useSlider";
import Button from "../../ui/Button";
import Popup from "../../ui/Popup";
import TextEditor from "../../TextEditor";
const TodoPopup: FC = () => {
  const {
    slider,
    sliderWrapper,
    countSlides,
    currentSlide,
    nextSlide,
    prevSlide,
    initSlider,
  } = useSlider({
    activeSlide: 1,
    gap: 15,
  });

  useEffect(initSlider, []);

  return (
    <Popup>
      <form className="flex flex-col gap-4" name="todo">
        <div className="flex justify-center">
          {currentSlide} / {countSlides}
        </div>
        <div className="flex overflow-hidden" ref={slider}>
          <div className="flex transition-[0.5s]" ref={sliderWrapper}>
            <div className="flex flex-col gap-4 min-w-full">
              <input
                className="w-full px-2 py-2 border border-grayBorder rounded-sm"
                name="title"
                placeholder="Навазние задачи"
              />
              <textarea
                className="w-full px-2 py-2 border border-grayBorder rounded-sm resize-none"
                name="descr"
                placeholder="Описание задачи"
              />
              <TextEditor></TextEditor>
            </div>
            <div className="flex flex-col gap-4 min-w-full">
              <textarea
                className="w-full resize-none"
                name="descr"
                placeholder="Описание"
              />
              <input
                className="w-full"
                name="title"
                placeholder="Навазние задачи"
              />
            </div>
          </div>
        </div>
        <TodoPopupButtons
          currentSlide={currentSlide}
          countSlides={countSlides}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          createTodo={() => {}}
        />
      </form>
    </Popup>
  );
};

export default TodoPopup;

type TodoPopupButtonsProps = {
  currentSlide: number;
  countSlides: number;
  disabled?: boolean;
  nextSlide: () => void;
  prevSlide: () => void;
  createTodo: () => void;
};
const TodoPopupButtons: FC<TodoPopupButtonsProps> = ({
  countSlides,
  currentSlide,
  disabled = false,
  nextSlide,
  prevSlide,
  createTodo,
}) => {
  if (currentSlide === 1) {
    return (
      <div className="flex justify-end items-center gap-4">
        <Button onClick={nextSlide}>Далее</Button>
      </div>
    );
  }

  if (currentSlide === countSlides) {
    return (
      <div className="flex justify-end items-center gap-4">
        <Button theme="white" onClick={prevSlide}>
          Назад
        </Button>
        <Button theme="black" onClick={createTodo}>
          Создать
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-end items-center gap-4">
        <button type="button" onClick={prevSlide}>
          Назад
        </button>
        <button type="button" onClick={nextSlide} disabled={disabled}>
          Далее
        </button>
      </div>
    </>
  );
};
