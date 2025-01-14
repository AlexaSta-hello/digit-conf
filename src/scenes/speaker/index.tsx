import HText from "@/shared/HText";
import { SpeakerType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Speaker from "./Speaker";
import speakersData from "./speakersData.json";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2} /* Framer Motion Eigenschaft für Zeitversatz der Animation bei Kind Elementen*/
    }
}

const Speakers = ({setSelectedPage}: Props) => {
  return (
    <section id="speakers" className="bg-blue-3">

        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Speakers)}>
            
            {/* Header */}
            <div className="bg-blue-2 text-blue-1 h-[25vh] flex items-center justify-center">
                
                <div className="relative before:absolute sm:before:content-pinkherz before:-left-36 before:top-0 lg:before:top-4 before:z-10
                  after:absolute sm:after:content-pinkherz after:-right-36 after:top-0 lg:after:top-4 after:z-10">
                  <HText>SPEAKERS</HText>
                </div>        
                
            </div>
            

            {/* Speakers */}
            <div className="flex items-center justify-center py-32 px-24 max-w-[1200px] m-auto">
                <motion.div 
                    className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-20 "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    variants={container}
                >
                    {speakersData.map((speaker: SpeakerType) => ( /* Array mit Icon, Überschirft, Text etc */
                        
                        <Speaker
                            key={speaker.name}
                            image={speaker.image}
                            name={speaker.name}
                            description={speaker.description}
                        />
                       
                    ))}
                </motion.div>
            </div>
             
        </motion.div>
    </section>
  )
};

export default Speakers;