import React, { useEffect } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import RouterList from "./Routes";

const ProtectedRoute: React.FunctionComponent = () => {
  const accessToken = "";
  useEffect(() => {}, [accessToken]);

  return accessToken ? <Outlet /> : <Navigate to="/" />;
};

const RouterProvider: React.FunctionComponent = () => {
  const protectedRouters = RouterList.filter(({ auth }) => {
    return auth;
  });

  const publicRouters = RouterList.filter(({ auth }) => {
    return !auth;
  });

  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        {protectedRouters.map(({ Page, path }) => {
          return <Route path={path} key={path} element={<Page />} />;
        })}
      </Route>
      {publicRouters.map(({ Page, path }) => {
        return <Route path={path} key={path} element={<Page />} />;
      })}
    </Routes>
  );
};

export default RouterProvider;
