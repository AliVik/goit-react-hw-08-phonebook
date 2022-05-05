import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const Layout = lazy(() => import('pages/Layout'));
const HomePage = lazy(() => import('pages/HomePage'));

export default function App() {
  return (
    <Suspense fallback="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
