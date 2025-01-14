import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}





const Faq = ({setSelectedPage}: Props) => {
  return (
    <section id="faq" className="w-full bg-blue-1 pb-32">
        <motion.div 
          onViewportEnter={() => setSelectedPage(SelectedPage.FAQ)}
          className="relative">
            
             {/* Header */}
             <div className="bg-blue-3 text-blue-1 h-[25vh] flex items-center justify-center">
                <div className="relative before:absolute sm:before:content-star before:-left-36 lg:before:top-8 before:z-10
                  after:absolute sm:after:content-star after:-right-36 after:top-0 lg:after:top-8 after:z-10">
                  <HText>FAQs</HText>
                </div>
             
            </div>

            <div className="max-w-[1200px] m-auto mt-32 px-5">
                <Accordion disableGutters elevation={0}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="text-blue-3 text-6xl"/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="bg-blue-1"
                    >
                    <Typography 
                        component="span"
                        className="text-2xl text-blue-3">
                            When is Digit Conf?
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        className="bg-blue-1 text-blue-3 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion disableGutters elevation={0}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="text-blue-3 text-6xl"/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="bg-blue-1"
                    >
                    <Typography 
                        component="span"
                        className="text-2xl text-blue-3">
                            Where is it?
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        className="bg-blue-1 text-blue-3 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion disableGutters elevation={0}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="text-blue-3 text-6xl"/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="bg-blue-1"
                    >
                    <Typography 
                        component="span"
                        className="text-2xl text-blue-3">
                            Who is Digit Conf for?
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        className="bg-blue-1 text-blue-3 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion disableGutters elevation={0}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="text-blue-3 text-6xl"/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="bg-blue-1"
                    >
                    <Typography 
                        component="span"
                        className="text-2xl text-blue-3">
                            Will the conference be recorded?
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        className="bg-blue-1 text-blue-3 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion disableGutters elevation={0}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="text-blue-3 text-6xl"/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="bg-blue-1"
                    >
                    <Typography 
                        component="span"
                        className="text-2xl text-blue-3">
                            Is Digit Conf really free?
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        className="bg-blue-1 text-blue-3 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                
                
                
            </div>
  

        </motion.div>

            
                
             

        
    </section>
  )
}

export default Faq