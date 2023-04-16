import LandingPage from "../../pages/Landing";
import { RouteType } from "./types";

const Routers: Array<RouteType> = [
  {
    path: "/",
    Page: LandingPage,
    auth: false,
  },
];

export default Routers;
