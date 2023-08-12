import React from "react";
import "./HomeP.css"
import heroImg from "../img/e9eeb331f78.png"
import hero from "../img/e9eeb331f7 (1).png"
import {motion} from "framer-motion"
const  Home = () =>{
    return(
        <div className="home">
                <div className="mainImg">
                <motion.img
                initial={{x:"8rem" ,opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}} 
                src={hero} alt=""/>
                {/* <div className="circleOne"></div> */}
                <div className="circleTwo"></div>
                </div>
                <div className="content">
                    <motion.h1
                    initial={{y:"2rem" ,opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:2, type:"spring"}}
                    >شركه <span>بيك-اب</span><br/> للنقل والتوصيل
                    </motion.h1>
                    <p className="parg">نقوم بأتمام عمليه النقل علي اكمل وجه بعمدات حديثه ومتطوره تضمن للعميل سلامة وصول الطلبيه</p>
                    <a href="#download" className="load"><span>تحميل التطبيق</span> </a>
                    <a href="#about" className="details"><span>اعرف المزيد</span></a>
                    <motion.img
                    initial={{x:"8rem" ,opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration:2, type:"spring"}} 
                    src={heroImg}
                    className="hoverCar"  
                    alt=""/>
            </div>
        </div>
    )
    
}

export default Home;