import Navbar from "@/scenes/navbar/index.tsx";
import Home from "./scenes/home";
import Speakers from "@/scenes/speaker";
import Workshops from "@/scenes/workshops";
import Register from "@/scenes/register";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Faq from "./scenes/faq";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0 && selectedPage !== SelectedPage.Home) {
        setSelectedPage(SelectedPage.Home);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
  <div className="app bg-gray-20">
    <Navbar
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />

    <Home setSelectedPage={setSelectedPage}/>
    <Speakers setSelectedPage={setSelectedPage}/>
    <Workshops setSelectedPage={setSelectedPage}/>
    <Faq setSelectedPage={setSelectedPage}/>
    <Register setSelectedPage={setSelectedPage}/>
    <Footer/>
  </div>
  );
}

export default App;