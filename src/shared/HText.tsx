import { motion } from "framer-motion";

type Props = {
    children: React.ReactNode;
};

const HText = ({ children }: Props) => {
    return (
        <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}
        >
            <h2 
                className="font-audiowide text-4xl sm:text-6xl md:text-7xl lg:text-9xl p-4"
            >
                {children}
            </h2>
        </motion.div>
    );
};

export default HText;
