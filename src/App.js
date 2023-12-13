import "./App.css";
import Affordable from "./components/Affordable";
import BestAgency from "./components/BestAgency";
import Carousel from "./components/Carousel";
import ContactHeader from "./components/ContactHeader";
import Header from "./components/Header";
import Information from "./components/Information";
import LatestFromBlogs from "./components/LatestFromBlogs";
import SignUpEmail from "./components/SignUpEmail";
import Testimonials from "./components/Testimonials";
import Footer from "./pages/Footer";

function App() {
  return (
    <div>
      <ContactHeader />
      <Header />
      <Carousel />
      <BestAgency />
      <Information />
      <Testimonials />
      <LatestFromBlogs />
      <SignUpEmail />
      <Affordable />
      <Footer />
    </div>
  );
}

export default App;
