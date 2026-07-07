import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Home } from "../../../Pages/Home";
import { AboutPomodoro } from "../../../Pages/AboutPomodoro";
import { NotFound } from "../../../Pages/NotFound";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
}

export function MainRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route
            path="/about-pomodoro"
            element={<AboutPomodoro></AboutPomodoro>}
          />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
        <ScrollToTop></ScrollToTop>
      </BrowserRouter>
    </>
  );
}
