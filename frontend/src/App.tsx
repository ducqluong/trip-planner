import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
