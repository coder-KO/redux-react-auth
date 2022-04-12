import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import routes from './routes';

// Layouts
import AuthLayout from './layouts/AuthLayout';
import PublicLayout from './layouts/PublicLayout';
import PrivateOutlet from './routes/PrivateOutlet';

// Public Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';

// Private Pages
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

const publicPages = [
  {
    path: routes.landing,
    page: Landing,
    layout: PublicLayout,
  },
  {
    path: routes.login,
    page: Login,
    layout: PublicLayout,
  },
  {
    path: routes.signup,
    page: Signup,
    layout: PublicLayout,
  },
];

const privatePages = [
  {
    path: routes.dashboard,
    page: Dashboard,
    layout: AuthLayout,
  },
  {
    path: routes.settings,
    page: Settings,
    layout: AuthLayout,
  },
];

function App() {
  return (
    <Router>
      <Routes>
        {/* Mapping Public Routes */}
        {publicPages.map(({ path, page: Page, layout: Layout }) => (
          <Route
            path={path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        ))}

        {/* Mapping Private Routes */}
        {privatePages.map(({ path, page: Page, layout: Layout }) => (
          <Route
            path={path}
            element={
              <PrivateOutlet>
                <Layout>
                  <Page />
                </Layout>
              </PrivateOutlet>
            }
          />
        ))}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
