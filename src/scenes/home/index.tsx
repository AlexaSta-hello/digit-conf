/* Anlegen mit shortcode tsrafc*/
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import {  motion } from "framer-motion";
import DateAnimation from "@/shared/DateAnimation";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({setSelectedPage}: Props) => {

  return (
    <section id="home" className="min-h-screen">
        <motion.div 
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
            
            {/* Hero */}
            <div className=" bg-hero-pattern bg-no-repeat bg-cover h-[90vh] flex justify-center items-center text-center text-white">
              
                {/* Hero Content */}
                <div className="flex flex-1 flex-col justify-center items-center px-4">
                <motion.div 
                        className="gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}} /* Animation wird getriggert wenn man 0.5 vom div sieht*/
                        transition={{delay: 0.2, duration: 0.4, ease: "easeOut"}}
                        variants={{
                            hidden: {opacity: 0, scale:2, filter:"blur(10px)"},
                            visible: {opacity: 1, scale:1, filter:"blur(0px)"}
                        }}
                    >
                        <HText>DIGIT CON</HText>
                    </motion.div>

                    <p className="mt-3 text-white text-lg">
                        A journey into digital networking, coding and research!
                    </p>
                    
                    {/* Action */}
                    <motion.div 
                        className="mt-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}} /* Animation wird getriggert wenn man 0.5 vom div sieht*/
                        transition={{delay: 0.8, duration: 0.4}}
                        variants={{
                            hidden: {opacity: 0, x:-50},
                            visible: {opacity: 1, x:0}
                        }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            REGISTER FOR FREE
                        </ActionButton>   
                    </motion.div>
                </div>

            </div>

            <DateAnimation />

            {/* JOIN US  */}
            <div className="py-24 flex justify-center px-8 md:flex bg-blue-1 m-auto">
                
                <motion.div
                    className="mt-10 md:mt-0 w-full overflow-hidden max-w-[1200px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}} /* Animation wird getriggert wenn man 0.5 vom div sieht*/
                    transition={{duration: 0.8}}
                    variants={{
                        hidden: {opacity: 0, y:50},
                        visible: {opacity: 1, y:0}
                    }}
                >
                    <div className="text-center flex flex-col items-center">
                        <p 
                            className="mb-10 text-5xl sm:text-7xl lg:text-8xl  mx-auto text-blue-2 font-semibold">
                            Explore the forefront of digital networking and technology, shaping 
                            connections and ideas that inspire the future.
                        </p>
                        <p className="mb-10 text-3xl sm:text-4xl leading-normal sm:leading-relaxed lg:text-5xl lg:leading-relaxed mx-auto text-blue-2 font-semibold">
                            Join us for an unforgettable experience!
                        </p>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            REGISTER FOR FREE
                        </ActionButton>   
                        
                    </div>
                    
                </motion.div>

            </div> 

        </motion.div>
    </section>

    
  )
}

export default Home