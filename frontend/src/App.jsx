import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import HelpCenter from "./pages/NestedFooterPages/HelpCenter";
import Aircover from "./pages/NestedFooterPages/Aircover";
import GethelpwithSafetyIssue from "./pages/NestedFooterPages/GethelpwithSafetyIssue";
import Login from "./pages/Login";
import ScrolltoTop from "./Scrolltotop";
import AntiDiscrimination from "./pages/NestedFooterPages/AntiDiscrimination";
import Disabilitysupport from "./pages/NestedFooterPages/Disabilitysupport";
import CancelSupport from "./pages/NestedFooterPages/CancelSupport";
import CancelOption from "./pages/NestedFooterPages/CancelSupport";
import ReportNeighbourhoodConcern from "./pages/NestedFooterPages/ReportNeighbourhoodConcern";
import AirbnbYourHome from "./pages/NestedHostingPages/AirbnbYourHome";
import AirbnbyourExprience from "./pages/NestedHostingPages/AirbnbyourExprience";
import Wishlist from "./pages/Wishlist";
import AirbnbYourservices from "./pages/NestedHostingPages/AirbnbYourservices";
import AircoverForHost from "./pages/NestedHostingPages/AircoverForHost";
import Freehostingclass from "./pages/NestedHostingPages/Freehostingclass";
import FindaCoHost from "./pages/NestedHostingPages/FindaCoHost";
import Searchpage from "./components/searchpage";

function App() {
  return (
    <BrowserRouter>
    <ScrolltoTop />
      <div className="scrollbar-hide">
        <Routes>
          {/* home */}
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/searchpage" element={<Searchpage />} />
          {/* Footer link setup */}
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/safetyissue" element={<GethelpwithSafetyIssue />} />
          <Route path="/aircover" element={<Aircover />} />
          <Route path="/anti_discrimination" element={<AntiDiscrimination />} />
          <Route path="/disablity_supports" element={<Disabilitysupport />} />
          <Route path="/cancel_option" element={<CancelOption />} />
          <Route path="/report_concern" element={<ReportNeighbourhoodConcern />} />
          <Route path="/airbnbyourhome" element={<AirbnbYourHome />} />
          <Route path="/airbnbexprience" element={<AirbnbyourExprience />} />
          <Route path="/airbnbservices" element={<AirbnbYourservices />} />
          <Route path="/aircoverforhosts" element={<AircoverForHost />} />
          <Route path="/freehostingclass" element={<Freehostingclass />} />
          <Route path="/findcohost" element={<FindaCoHost />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
