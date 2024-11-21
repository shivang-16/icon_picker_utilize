import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./component/landingPage";
import IconPicker from "./component/IconPicker";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/icon-picker"
          element={
            <IconPicker
              rowsInOnePage={6}
              columnsInOnePage={7}
              iconHeight={65}
              iconWidth={66}
              pickerHeight={500}
              pickerWidth={500}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
