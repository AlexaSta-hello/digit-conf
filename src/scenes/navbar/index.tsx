{/* Arbeiten mit snippets wg Erweiterung -> tsrafce */}


import { useState } from "react";
import Logo from "/assets/Logo.png";
import AbstractWaves from "/assets/AbstractWaves.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {

  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery ("(min-width: 1060px)") /* Boolean for above 1060px */
  
  const handleLinkClick = (page: SelectedPage) => {
    setSelectedPage(page);
    setIsMenuToggled(false); // Menü automatisch schließen
  };

  return <nav>
    <div className={`${flexBetween} bg-blue-3 drop-shadow fixed top-0 z-50 w-full py-4`}>

          <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
              {/*  Left Side */}
              <img src={Logo} alt="logo" className="w-[80px] sm:w-[120px]"/>
              {/*  Right Side */}
              {isAboveMediumScreens ? 
                (
                  <div className={`${flexBetween} w-full`}>

                    <div className={`${flexBetween} gap-8 text-m`}>
                      <Link 
                        page="HOME" 
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                      <Link 
                        page="SPEAKERS"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                      <Link 
                        page="WORKSHOPS"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                      <Link 
                        page="FAQ"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                      <Link 
                        page="REGISTER"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                    </div>

                    <div className={`${flexBetween} gap-8 `}>
                      <ActionButton setSelectedPage={setSelectedPage}>
                        REGISTER FOR FREE
                      </ActionButton>
                    </div>

                  </div> 
                ) : (
                    <div>
                      <button
                      className="rounded-full justify-end p-2"
                      onClick = {() => setIsMenuToggled(!isMenuToggled)}
                      >
                        <img src={AbstractWaves} alt="abstract burger menu" className="h-[55px] sm:h-[70px]" />
        
                      </button>
                    </div>
                    )
              }
              
              
            </div>
          </div>
    </div>

      {/* MObile Menu Modal*/}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-full sm:w-[300px] bg-blue-3 drop-shadow-xl pt-28">
          

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-12 text-xl mt-8"> 

          {["HOME", "SPEAKERS", "WORKSHOPS", "FAQ", "REGISTER"].map((page) => (
              <Link key={page} page={page as SelectedPage} selectedPage={selectedPage} setSelectedPage={handleLinkClick} />
            ))}

            {/* Alternativ 
            <Link 
              page="HOME" 
              selectedPage={selectedPage}
              setSelectedPage={handleLinkClick}
              />
            <Link 
              page="SPEAKERS"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
            <Link 
              page="WORKSHOPS"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
            <Link 
              page="FAQ"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
            <Link 
              page="REGISTER"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              /> */}
          </div>

        </div>
      )}
  </nav>
}

export default Navbar