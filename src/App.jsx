import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const Recipes = lazy(() => import("./pages/Recipes"));
const About = lazy(() => import("./pages/About"));
const RecipeDetail = lazy(() => import("./pages/RecipeDetail"));
const Contact = lazy(() => import("./pages/Contact"));

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="recipe/:id" element={<RecipeDetail />} />

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
