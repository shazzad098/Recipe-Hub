import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AddRecipePage from "./pages/AddRecipePage.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Contact from "./pages/Contact.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AddRecipePage" element={<AddRecipePage />} />
          <Route path="/recipe" element={<RecipeDetails />} />
          <Route path="/contact" element={<Contact Page />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;