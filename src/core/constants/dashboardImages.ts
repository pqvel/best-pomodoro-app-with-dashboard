export const dashboardImages: DashboardImage[] = [
  {
    alias: "canada",
    url: "/images/content/canada.jpg",
    className: `bg-[url('/images/content/canada.jpg')]`,
  },
  {
    alias: "usa",
    url: "/images/content/usa.jpg",
    className: `bg-[url('/images/content/usa.jpg')]`,
  },
  {
    alias: "desert",
    url: "/images/content/desert.jpg",
    className: `bg-[url('/images/content/desert.jpg')]`,
  },
];

export type DashboardImage = {
  alias: string;
  url: string;
  className: string;
};
