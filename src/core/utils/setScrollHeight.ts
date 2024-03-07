import { ChangeEvent } from "react";

/**
 * Функция которая позволяет устанвилвать автоматическую высоту для
 * элемента textarea. Если у textarea появляется скролл, то высота элемента
 * увеличивается на этот скролл. Чтобы установить максимальную высоту
 * элемента, достаточно задать стиль max-height
 * @todo когда удаляешь весь текст элемент остается большим
 * @param e Событие change у textarea
 */
export const setScrollHeight = (e: ChangeEvent<HTMLTextAreaElement>): void => {
  const elementScrollHeight: number =
    e.target.scrollHeight - e.target.offsetHeight;

  if (elementScrollHeight !== 0) {
    e.target.style.height = e.target.offsetHeight + elementScrollHeight + "px";
  }
};
