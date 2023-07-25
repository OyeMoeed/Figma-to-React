import HelpingBusiness from "./Screens/HelpingBusiness";
import Hero from "./Screens/Hero";
import NavBar from "./Screens/NavBar";
import OurClient from "./Screens/OurClient";
import Footer from "./Screens/Footer";
import HappyCustomers from "./Screens/HappyCustomers";
import Video from "./Screens/Video";
import NewsLetter from "./Screens/NewsLetter";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <OurClient />
      <HelpingBusiness />
      <Video />
      <HappyCustomers />

      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
