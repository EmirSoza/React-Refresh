import Header from "./components/Header";
import React from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import Posts from "./pages/Posts";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header title="Feedback UI" />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/:id" element={<Posts />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
