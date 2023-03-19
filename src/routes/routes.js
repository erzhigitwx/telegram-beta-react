import Chat from "../components/chat/chat.jsx";
import Login from "../components/login/login.jsx";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/utils.js";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    component: <Login />,
  },
];
export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    component: <Chat />,
  },
];
