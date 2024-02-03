import { ChangeEvent } from "react";

/**
 * Функция которая позволяет устанвилвать автоматическую высоту для
 * элемента textarea. Если у textarea появляется скролл, то высота элемента
 * увеличивается на этот скролл. Чтобы установить максимальную высоту
 * элемента, достаточно задать стиль max-height
 * @param e Событие change у textarea
 */
export const setScrollHeight = (e: ChangeEvent<HTMLTextAreaElement>): void => {
  const elementScrollHeight: number =
    e.target.scrollHeight - e.target.offsetHeight;
  console.log(elementScrollHeight);
  if (elementScrollHeight !== 0) {
    e.target.style.height = e.target.offsetHeight + elementScrollHeight + "px";
  }
};
