import { motion } from "framer-motion";


const DateAnimation = () => {
  return (
    <div className="relative flex items-center h-[10vh] bg-blue-3 overflow-hidden">
            
        <motion.div
            className="absolute flex whitespace-nowrap font-semibold italic text-2xl text-green-1 overflow-hidden"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
            }}
        >
            <span className="mr-8">January 2nd to 5th, 2025 in Leipzig.</span>
            <span className="mr-8">January 2nd to 5th, 2025 in Leipzig.</span>
            <span className="mr-8">January 2nd to 5th, 2025 in Leipzig.</span>
            <span className="mr-8">January 2nd to 5th, 2025 in Leipzig.</span>
        </motion.div>

        <motion.div
            className="absolute flex whitespace-nowrap text-2xl font-semibold italic text-green-1 overflow-hidden"
            animate={{ x: ["100%", "0%"] }}
            transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
            }}
        >
            <span className="mr-8">January 2nd to 5th, 2025 in Leipzig.</span>
            <span className="mr-8">January 2nd to 5th, 2025 in Leipzig.</span>
            <span className="mr-8">January 2nd to 5th, 2025 in Leipzig.</span>
            <span className="mr-8">January 2nd to 5th, 2025 in Leipzig.</span>
        </motion.div>
    </div>
  )
}

export default DateAnimation



