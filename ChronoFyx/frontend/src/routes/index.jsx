import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load pages
const Home = lazy(() => import('../pages/Home'));
const Proposals = lazy(() => import('../pages/Proposals'));
const Vote = lazy(() => import('../pages/Vote'));
const NotFound = lazy(() => import('../pages/NotFound'));

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposals" element={<Proposals />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes; 