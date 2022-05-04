import { render } from 'react-dom';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ContactsPage, RegisterPage, HomePage, LoginPage, Layout } from 'pages';

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
          <Route path="sign_up" element={<RegisterPage />} />
          <Route path="log_in" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
