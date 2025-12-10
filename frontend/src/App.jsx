import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import HelpCenter from "./pages/NestedFooterPages/HelpCenter";

function App() {
  return (
    <BrowserRouter>
      <div className="scrollbar-hide">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
