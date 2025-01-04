import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useCheckAuth } from "../hook/useCheckAuth";
import { CheckingAuth } from "../ui/components/CheckingAuth";
import { FarmaciaLayout } from "../farmacia/layout/FarmaciaLayout";
import { FarmaciaRoutes } from "../farmacia/routes/FarmaciaRoutes";

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }
  return (
    <>
      <Routes>
        {status === "authenticated" ? (
          <Route path="/*" element={<FarmaciaRoutes />} />
        ) : (
          <Route path="/auth/*" element={<AuthRoutes />} />
        )}
        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
      )
    </>
  );
};
