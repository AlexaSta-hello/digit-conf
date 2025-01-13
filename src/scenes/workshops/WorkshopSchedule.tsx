import { useState, useEffect } from "react";
import workshopsData from "./workshopsData.json";
import { Workshop } from "@/shared/types";
import { motion } from "framer-motion";
import WorkshopCard from "./Workshop";

const WorkshopSchedule = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);

  useEffect(() => {
    setWorkshops(workshopsData as Workshop[]);
  }, []);

  const times = ["8 - 10 a.m.", "10 - 12 a.m.", "12 - 2 p.m.", "2 - 4 p.m.", "4 - 6 p.m."];
  const days = ["THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];

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
      className="p-12"
      initial="hidden"
      animate="visible"
      variants={parentVariant}
    >
      {/* Grid für Tage und Workshops */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {days.map((day) => (
          <div key={day} className="col-span-1 mb-8">
            {/* Tag-Überschrift */}
            <motion.h3
              className="text-center font-bold text-3xl text-blue-1 mb-4"
              variants={parentVariant}
            >
              {day}
            </motion.h3>

            {/* Zeitabschnitte und Workshops */}
            {times.map((time) => (
              <motion.div
                key={`${day}-${time}`}
                className="-mb-3"
                variants={parentVariant}
              >
                {workshops
                  .filter(
                    (workshop) =>
                      workshop.day.toUpperCase() === day && workshop.time === time
                  )
                  .map((workshop) => (
                    <WorkshopCard key={workshop.name} workshop={workshop} />
                  ))}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkshopSchedule;
