import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import WorkshopSchedule from "./WorkshopSchedule";
import ActionButton from "@/shared/ActionButton";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Workshops = ({setSelectedPage}: Props) => {
  return (
    <section id="workshops" className="w-full bg-blue-2 pb-16 text-center">
        <motion.div 
          onViewportEnter={() => setSelectedPage(SelectedPage.Workshops)}>
            
             {/* Header */}
             <div className="bg-blue-1 text-blue-3 h-[25vh] flex items-center justify-center">
                
                <div className="relative before:absolute sm:before:content-network before:-left-32 lg:before:top-4 before:z-10
                  after:absolute sm:after:content-network after:-right-32 after:top-0 lg:after:top-4 after:z-10">
                  <HText>WORKSHOPS</HText>
                </div>        
             
            </div>

            <motion.div
              className="flex items-center justify-center w-full text-center py-16" 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p
                className="text-3xl px-8 leading-normal sm:text-4xl sm:leading-relaxed 
                lg:text-5xl lg:leading-relaxed mx-auto text-blue-1 font-semibold max-w-[1200px]"
              >
                Experience four days of interdisciplinary and interactive workshops led by industry professionals.
              </p>
            </motion.div>
            

            {/* Action */}
            <motion.div 
                className="flex items-center justify-center mb-10"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.2}} /* Animation wird getriggert wenn man 0.5 vom div sieht*/
                transition={{delay: 0.2, duration: 0.4}}
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x:0}
                }}
            >
                
                <ActionButton setSelectedPage={setSelectedPage}>
                    REGISTER FOR FREE
                </ActionButton>   
            </motion.div>

            <div className="max-w-[1200px] m-auto pb-16">
              <WorkshopSchedule />
            </div> 
 

        </motion.div>
    </section>
  )
}

export default Workshops;