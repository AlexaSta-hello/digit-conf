import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import RegisterVideo from "/assets/register.mp4";
import HText from "@/shared/HText";
import DateAnimation from "@/shared/DateAnimation";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Register = ({setSelectedPage}: Props) => {

    const inputStyles = `w-full md:w-4/5 flex flex-column mb-8 rounded-lg bg-blue-1 px-5 py-3 h-16 placeholder-blue-3`

    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }
  return (
    <section id="register">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Register)}>
            
            {/* Header */}
            <div className="bg-blue-2 text-blue-1 h-[25vh] flex items-center justify-center">
                
                <div className="relative before:absolute sm:before:content-flash before:-left-36 before:top-0 lg:before:top-4 before:z-10
                  after:absolute sm:after:content-flash after:-right-36 after:top-0 lg:after:top-4 after:z-10">
                  <HText>REGISTER</HText>
                </div>        
                
            </div> 

            <DateAnimation />

            {/* Form and Image */}
            <div className="flex justify-center bg-green-2 py-16 px-8">
                <div className="mt-10 justify-between md:flex w-full max-w-[1200px]">
                    <motion.div
                        className="basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}} /* Animation wird getriggert wenn man 0.5 vom div sieht*/
                        transition={{duration: 0.8}}
                        variants={{
                            hidden: {opacity: 0, y:50},
                            visible: {opacity: 1, y:0}
                        }}
                    >
                        <form /* Siehe www.formsubmit.co */
                            target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/alex@better-world-web.de"
                            method="POST"
                        >
                            <input 
                                className={inputStyles}
                                type="text"
                                placeholder="NAME"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })} />
                            {errors.name && (
                                <p className="mt-1 text-secondary-500">
                                    {errors.name.type === "required" && "Please enter your name."}
                                    {errors.name.type === "maxLength" && "Maximal 100 signs."}
                                </p>
                            )}

                            <input 
                                className={inputStyles}
                                type="text"
                                placeholder="EMAIL"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })} />
                            {errors.email && (
                                <p className="mt-1 text-secondary-500">
                                    {errors.email.type === "required" && "Please enter E-Mail."}
                                    {errors.email.type === "pattern" && "No valid E-Mail."}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="mt-10 rounded-full font-semibold text-m bg-blue-2 text-blue-1 px-20 py-3 
                                    transition duration-300 hover:bg-blue-3 hover:text-white shadow-[0_6px_10px_rgba(0,0,0,0.2)]"
                            >
                            SUBMIT  
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        className=" mt-16 basis-2/5 md:mt-0 flex justify-end pb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}} /* Animation wird getriggert wenn man 0.5 vom div sieht*/
                        transition={{delay: 0.2, duration: 0.8}}
                        variants={{
                            hidden: {opacity: 0, y:50},
                            visible: {opacity: 1, y:0}
                        }}
                    >
                        
                        <video 
                            className="w-full rounded-lg md:w-4/5"
                            src={RegisterVideo}
                            autoPlay
                            loop
                            muted
                            playsInline 
                            />
                    
                    </motion.div>
                </div>
            </div>
               
        </motion.div>
    </section>
  )
}

export default Register;