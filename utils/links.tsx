import { FcHome, FcSearch, FcKey, FcAbout } from "react-icons/fc";

export const NAV_LINKS = [
  {
    name: "Search",
    route: "/search",
    icon: <FcSearch />,
  },
  {
    name: "Buy",
    route: "/search?purpose=for-sale",
    icon: <FcHome />,
  },
  {
    name: "Rent",
    route: "/search?purpose=for-rent",
    icon: <FcKey />,
  },
  {
    name: "About",
    route: "https://github.com/stefandjikic/realestate-app",
    external: true,
    icon: <FcAbout />,
  },
];
