import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import InitialLoadingScreen from './components/InitialLoadingScreen';

const Home = React.lazy(() => import('./pages/Home'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));

function App() {
  return (
    <InitialLoadingScreen>
      <Router>
        <div className="min-h-screen bg-navy-900">
          <Navbar />
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </InitialLoadingScreen>
  );
}

export default App;