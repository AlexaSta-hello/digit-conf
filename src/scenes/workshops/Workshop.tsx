import { Workshop } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  workshop: Workshop;
};

const WorkshopCard = ({ workshop }: Props) => {
  return (
    <motion.div
      className="relative w-full h-40 rounded-lg shadow-md block mx-auto"
      whileHover={{
        scale: 1.02,
        boxShadow: "3px 3px 8px rgba(0, 0, 0, 0.2)",
      }}
      variants={{
        hidden: { opacity: 0, x: 120 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {/* Vorderseite */}
      <div className="absolute inset-0 bg-blue-3 text-blue-1 text-center p-3 py-8 flex flex-col rounded-lg backface-hidden transition-opacity duration-100 group-hover:opacity-0">
        <h3 className="font-semibold mb-1 text-lg">{workshop.name}</h3>
        <p className="flex-grow">{workshop.time}</p>
        {workshop.speaker && <p>{workshop.speaker}</p>}
      </div>

      {/* Rückseite */}
      <div className="absolute inset-0 bg-blue-1 text-blue-3 text-sm text-center p-6 flex flex-col items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
        <p>{workshop.description}</p>
      </div>
    </motion.div>
  );
};

export default WorkshopCard;
