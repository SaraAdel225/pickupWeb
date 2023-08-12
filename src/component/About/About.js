
import * as React from "react";
import "./About.css";
import { motion } from "framer-motion";
import book from "../img/Icon Reward.gif";
import aboutImg from "../img/The driver's on his way.gif"

const About = () => {
return (
    <div class="about" id="about">
        <div className="title">
            <motion.h2
            initial={{x:"-2rem" ,opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:2, type:"spring"}}
            className="word"
            >
                من نحن
            </motion.h2>
            <motion.img
            initial={{x:"2rem" ,opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:2, type:"spring"}}
            src={book}
            className="bookImg"
            />
        </div>
        <div className = "container flexBetween">
            <div class="read">
            <motion.h4
            initial={{y:"5rem" ,opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:2, type:"spring"}}
            > 
            شركتنا هي شركة بضائع متخصصة في النقل والتوصيل، حيث نقدم خدماتنا لجميع أنحاء المنطقة، سواء كانت بضائع تجارية أو شحنات شخصية، بأمان وفعالية عالية، ونسعى جاهدين لتلبية احتياجات عملائنا وتحقيق رضاهم
            .انضم إلينا الآن واستفد من خدماتنا الاستثنائية! اشترك معنا لتجربة نقل وتوصيل يتميز بالموثوقية والسرعة
            ، واحصل على تجربة لوجستية فريدة تلبي احتياجاتك وتسهل حياتك اليومية.
            </motion.h4>
            </div>
            <motion.img className="aboutImg" 
            initial={{y:"-5rem" ,opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:2, type:"spring"}}
            src={aboutImg} alt=""/>
        </div>
    </div>
);
};

export default About;