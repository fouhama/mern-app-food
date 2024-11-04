import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";

import HomePage from "./pages/HomePage";
import AuthCallback from "./pages/AuthCallback";
import UserProfilePage from "./pages/UserProfilePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />
      <Route path='/auth-callback' element={<AuthCallback />} />
      <Route
        path='/user-profile'
        element={
          <Layout>
            <UserProfilePage />
          </Layout>
        }
      />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};
export default AppRoutes;
