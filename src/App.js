import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from 'routesWrappers';

const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const Layout = lazy(() => import('pages/Layout/Layout'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));

export default function App() {
  return (
    <Suspense fallback="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
            restricted
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}
