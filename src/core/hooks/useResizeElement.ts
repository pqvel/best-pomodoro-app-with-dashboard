import {
  useState,
  useEffect,
  useRef,
  EventHandler,
  RefObject,
  MouseEvent as ReactMouseEvent,
} from "react";

type UseResizeElementParams = {
  // initialWidth: number;
};

type UseResizeElementReturn = {
  resizeElement: ReturnType<typeof useRef>;
  initResizeElement: () => void;
  destroyResizeElement: () => void;
  mouseDownHandler: EventHandler<ReactMouseEvent>;
};

type UseResizeElement = () => UseResizeElementReturn;

/**
 * Хук который позволяет пользователю изменять ширину элементов, например бокового меню
 * Чтобы задать максимальное и минимальное значение элемента
 * нужно прописать стили min-width и max-width
 * @param {number} initialWidth - начальный размер элемента
 *
 */
export const useResizeElement: UseResizeElement = () => {
  const resizeElement = useRef<HTMLElement>();
  const isResized = useRef<any>(false);
  const mouseDownHandler: EventHandler<ReactMouseEvent> = () => {
    isResized.current = true;
  };

  const mouseMoveHandler = (e: MouseEvent): void => {
    // console.log(isResized.current);
    if (isResized.current) {
      const element = resizeElement.current;
      element!.style.width = `${element!.offsetWidth}${e.movementX}px`;
    }
  };

  /**
   * Обработик события клика на элементе после которого начинается изменение
   * ширины resizeElement
   */
  const mouseUpHandler = (): void => {
    isResized.current = false;
  };

  /**
   * Добавляет слушатели событий mousemove и mouseup на документ,
   * @example
   * useEffect(() => {
   *    initResizeElement()
   * }, [])
   */
  const initResizeElement = () => {
    document.addEventListener("mousemove", (e) => mouseMoveHandler(e));
    document.addEventListener("mouseup", () => mouseUpHandler());
  };

  /**
   * Удаляет слушатели событий mousemove и mouseup у документа,
   * @example
   * useEffect(() => {
   *    return destroyResizeElement()
   * }, [])
   */
  const destroyResizeElement = () => {
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  return {
    resizeElement,
    initResizeElement,
    destroyResizeElement,
    mouseDownHandler,
  };
};
