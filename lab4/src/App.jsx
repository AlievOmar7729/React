import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TabGroup from "./components/TabGroup/TabGroup.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/ua/:tabId/*" element={<TabGroup />} />
                <Route path="*" element={<Navigate to="/ua/university" />} />
            </Routes>
        </Router>
    );
};

export default App;