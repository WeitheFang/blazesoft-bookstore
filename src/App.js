import { Route, Routes } from "react-router-dom";
import MainPage from "./components/mainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
    </Routes>
  );
}

export default App;
