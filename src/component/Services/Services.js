import React from "react";
import "./Services.css"
import loader from "../img/oie_transparent (3).png"
import goal from "../img/Pick up truck-amico.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruckPickup} from '@fortawesome/free-solid-svg-icons'
import {faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"
import {motion} from "framer-motion"

const contAccordion =[
    {
        icon: <FontAwesomeIcon icon={faTruckPickup} />,
        heading:"نقل وتوصيل البضائع",
        detail:  "بيك أب لنقل وتوصيل البضائع من والى اى مكان ترغب فيه",
    },
    {
        icon: <FontAwesomeIcon icon={faCircleCheck} />,
        heading: "اختار العرض اللي يناسبك",
        detail: "بيك أب لنقل وتوصيل البضائع من والى اى مكان ترغب فيه ",
    },
    {
        icon: <FontAwesomeIcon icon= {faPhoneVolume} />,
        heading: "تابع طلبك أول بأول",
        detail:
            "تابع طلبك مباشرآ مع المندوب وتواصل معه عبر الرسائل ",
    }
]

const Services = ()=> {
    return(
        <div className = "services" id="services">
            <div className="shapedividers_com-3155"></div>
            <div className="title">
                <motion.h2
                initial={{x:"-2rem" ,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                className="word"
                >
                    خدماتنا
                </motion.h2>
                <motion.img
                initial={{x:"2rem" ,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                src={loader}
                className="bookImg"
            />
            </div>
            <div className="container flexBetween">
                <motion.img 
                initial={{x:"8rem" ,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}} 
                className="goalImg"
                src={goal} alt=""/>
                <motion.div 
                initial={{x:"-8rem" ,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}} 
                className="Content">
                    <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
                        {
                            contAccordion.map((data,i)=>{
                                return(
                                    <AccordionItem key={i} uuid={i} className= {`accordionItem`}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="accordionButton">
                                                <div className="icon">{data.icon}</div>
                                                    <h4>{data.heading}</h4>
                                                    <div className="icon">
                                                    <FontAwesomeIcon  icon={faCaretDown} />
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className="accordionItemPanel">
                                            <p className="parg">{data.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                    <div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Services