import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedBackList from "./components/FeedBackList";
import Header from "./components/Header";
import FeedBackStats from "./components/FeedBackStats";
import FeedBackForm from "./components/FeedBackForm";
import About from "./components/pages/About";
import AboutIconLink from "./components/shared/AboutIconLink";
import { FeedBackProvider } from "./context/FeedBackContext";
function App() {
  return (
    <>
      <FeedBackProvider>
        <Header />
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedBackForm />
                  <FeedBackStats />
                  <FeedBackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
          <AboutIconLink />
        </Router>
      </FeedBackProvider>
    </>
  );
}

export default App;
