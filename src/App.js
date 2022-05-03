import { render } from 'react-dom';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const Layout = lazy(() => import('pages/MainPage'));

render(
  <BrowserRouter>
    <Suspense fallback="">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="sign-up-form" element={<RegisterPage />} />
        <Route path="log-in-form" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
);
