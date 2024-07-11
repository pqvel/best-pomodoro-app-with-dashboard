import { FC } from "react";
import { Block } from "../ui/Wrappers";
import {
  DashboardImage,
  dashboardImages,
} from "../../core/constants/dashboardImages";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "../../core/redux/app/hooks";
import { setDashboardBgImg } from "../../core/redux/slices/userSettingsSlice";
import { Typography } from "../ui";

const ChooseContentImage: FC = () => {
  const dispatch = useAppDispatch();
  const currentImage: DashboardImage = useAppSelector(
    (state) => state.settings.dashboardBgImg
  );

  return (
    <Block className="mb-5">
      <Typography.H2>Фоновое изображение</Typography.H2>
      <form className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
        {dashboardImages.map((img) => (
          <label
            className={clsx(
              "flex rounded-lg overflow-hidden shadow cursor-pointer border-2",
              currentImage.url === img.url && "border-blue-500"
            )}
          >
            <img
              className="object-cover w-full"
              src={img.url}
              width={300}
              height={150}
            />
            <input
              className="hidden"
              type="radio"
              name="contentImage"
              onChange={() => dispatch(setDashboardBgImg(img))}
            />
          </label>
        ))}
      </form>
    </Block>
  );
};

export default ChooseContentImage;
