import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import HelpCenter from "./pages/NestedFooterPages/HelpCenter";
import Aircover from "./pages/NestedFooterPages/Aircover";
import GethelpwithSafetyIssue from "./pages/NestedFooterPages/GethelpwithSafetyIssue";
import Login from "./pages/Login";
import ScrolltoTop from "./Scrolltotop";

function App() {
  return (
    <BrowserRouter>
    <ScrolltoTop />
      <div className="scrollbar-hide">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/safetyissue" element={<GethelpwithSafetyIssue />} />
          <Route path="/aircover" element={<Aircover />} />
          <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
