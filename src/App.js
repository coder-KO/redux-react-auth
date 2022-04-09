import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import routes from './routes';

// Layouts
// import AuthLayout from './layouts/AuthLayout';
import PublicLayout from './layouts/PublicLayout';

// Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';

const pages = [
  // Public Pages
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

function App() {
  return (
    <Router>
      <Routes>
        {pages.map(({ path, page: Page, layout: Layout }) => (
          <Route
            path={path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        ))}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
