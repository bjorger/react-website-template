import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "pages";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
