import { useState, MouseEvent } from "react";

type UseResizeElementParams = {
  minWidth: number;
  maxWidth: number;
  initialWidth: number;
};

type UseResizeElementReturn = {
  width: number;
  mouseMoveHandler: (e: MouseEvent<HTMLElement>) => void;
  mouseDownHandler: (e: MouseEvent<HTMLElement>) => void;
  mouseUpHandler: (e: MouseEvent<HTMLElement>) => void;
};

type UseResizeElementType = (
  params: UseResizeElementParams
) => UseResizeElementReturn;

export const useResizeElement: UseResizeElementType = ({
  maxWidth,
  minWidth,
  initialWidth,
}): UseResizeElementReturn => {
  //   const [isResizing, setResizing] = useState<boolean>(false);
  const [countMouseDown, setCountMouseDown] = useState<number>(0);
  const [isCanResize, setCanResize] = useState<boolean>(false);

  let timeoutId: ReturnType<typeof setTimeout>;

  const [width, setWidth] = useState<number>(initialWidth);
  const [mouseDownCoords, setMouseDownCoords] = useState();

  const mouseMoveHandler = (e: MouseEvent<HTMLElement>) => {
    if (isCanResize) {
      // нужно отнимать от mouseDownCoords координаты события мув
      setWidth(e.clientX);
    }
  };

  const mouseDownHandler = (e: MouseEvent<HTMLElement>) => {
    setCountMouseDown((countMouseDown) => countMouseDown + 1);
    console.log(countMouseDown);
    if (countMouseDown === 2) {
      return setCanResize(true);
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setCountMouseDown(0);
    }, 1000);
  };

  const mouseUpHandler = () => {
    setCanResize(false);
  };

  return {
    width,
    mouseMoveHandler,
    mouseDownHandler,
    mouseUpHandler,
  };
};
