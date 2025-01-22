import { useState, useEffect } from "react";
import speakersData from "./speakersData.json";
import { SpeakerType } from "@/shared/types";
import {motion} from "framer-motion";
import SpeakerCard from "./SpeakerCard";

const SpeakersList = () => {
    const [speakers, setSpeakers] = useState<SpeakerType[]>([]);

    useEffect (() => {
        setSpeakers(speakersData as SpeakerType[]);
    }, []);

    const parentVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
      };
    
    return (
    
        <motion.div 
                    className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-20 "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.2}}
                    variants={parentVariant}
                >
                    {speakers.map((speaker) => ( /* Array mit Icon, Überschirft, Text etc */
                        
                        <SpeakerCard
                            key={speaker.name}
                            speaker={speaker} 
                        />
                       
                    ))}
                </motion.div>
   
    );
};

export default SpeakersList;

