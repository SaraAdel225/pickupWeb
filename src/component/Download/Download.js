
import * as React from "react";
import "./Download.css";
import { motion } from "framer-motion";
import book from "../img/Download Icon Animation in Framer_js.gif";
import aboutImg from "../img/download.gif"
import googlePlay from "../img/googlePlay.png"
import appStore from "../img/appStore (1).png"
const About = () => {
return (
    <div class="download" id="download">
        <div className="shapedividers_com-2618"></div>
        <div className="title">
            <motion.h2
            initial={{x:"-2rem" ,opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:2, type:"spring"}}
            className="word"
            >
                تنزيل التطبيق
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
            اكتشف سهولة النقل والتوصيل مع تطبيقنا! قم بتحميل تطبيقنا الآن للاستمتاع بتجربة سلسة وموثوقة لنقل بضائعك وتوصيلها بأمان وفي الوقت المحدد.
            </motion.h4>
            <motion.div 
            initial={{x:"-8rem" ,opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:2, type:"spring"}}
            className="downButton">
            <a href="/"><img src={googlePlay} alt=""/></a>
            <a href="/"><img src={appStore} alt=""/></a>
            </motion.div>
            </div>
            <motion.img className="aboutImg" 
            initial={{x:"8rem" ,opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:2, type:"spring"}}
            src={aboutImg} alt=""/>
        </div>
    </div>
);
};

export default About;