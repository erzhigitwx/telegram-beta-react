import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes/routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./routes/utils/utils";

const AppRouter = function () {
  const isAuth = useSelector((state) => state.userState.isAuth);
  return (
    (isAuth && (
      <div className="chat-route">
        <Routes>
          <>
            {privateRoutes.map(({ path, component }) => (
              <Route path={path} element={component} key={path} />
            ))}
            <Route path="*" element={<Navigate to={CHAT_ROUTE} replace />} />
          </>
        </Routes>
      </div>
    )) || (
      <Routes>
        <>
          {publicRoutes.map(({ path, component }) => (
            <Route path={path} element={component} key={path} />
          ))}
          <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />} />
        </>
      </Routes>
    )
  );
};

export default AppRouter;
