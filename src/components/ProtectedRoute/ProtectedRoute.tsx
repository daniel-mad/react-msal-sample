import { useIsAuthenticated } from "@azure/msal-react";
import { ComponentType, Suspense } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  component: ComponentType<unknown>;
  [key: string]: unknown;
};
export default function ProtectedRoute({
  component: Component,
  ...rest
}: ProtectedRouteProps) {
  const isAuthenticated = useIsAuthenticated();
  return isAuthenticated ? (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...rest} />
    </Suspense>
  ) : (
    <Navigate to="/" />
  );
}
