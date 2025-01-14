import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import SpeakersList from "./SpeakersList";
import { motion } from "framer-motion";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
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
                <SpeakersList />
            </div>
             
        </motion.div>
    </section>
  )
};

export default Speakers;