import { SpeakerType } from "@/shared/types";
import {motion} from "framer-motion";

type Props = {
    speaker: SpeakerType;
};

const SpeakerCard = ({speaker}: Props) => {
  return (
   <motion.div
        className="text-center text-white flex items-center gap-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}} /* Animation wird getriggert wenn man 0.5 vom div sieht*/
        transition={{delay: 0.2, duration: 0.2}}
        variants={{
            hidden: { opacity: 0, scale: 0.9},
            visible: { opacity: 1, scale: 1}
        }}
         
    > 
   <div className="mb-12 sm:mb-0">
        <img 
        className="rounded-3xl mb-8"
        src={speaker.image} alt="speaker" 
        />
        <h4 className="font-semibold text-lg text-blue-1 mb-2">{speaker.name}</h4>
        <p className="font-normal">{speaker.description}</p>
   </div>
        
         
   </motion.div>
  )
}

export default SpeakerCard;
