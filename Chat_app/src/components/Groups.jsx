import React from 'react'
import './myStyles.css';
import { IconButton } from '@mui/material';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import logo from '/messaging.png'
import { useSelector } from 'react-redux';
import { AnimatePresence,motion } from "framer-motion" 

function Groups() {
    const lighttheme = useSelector((state) => state.themeKey);
  return(
    <AnimatePresence>
    <motion.div 
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    exit={{opacity:0,scale:0}}
    transition={{
        ease:"anticipate",
        duration:"0.3"
    }}
    className='list-container'
    >
        <div className={"ug-header" + (lighttheme ? "" : " dark")}>
            <img 
                src={logo}
                style={{height:"2rem",width:"2rem",padding:"0px 10px"}}
            />
            <p className='ug-title'>online groups</p>

        </div>
        <div className={"sb-search" + (lighttheme ? "" : " dark")}>
            <IconButton>
            <SearchSharpIcon className={lighttheme ? "" : " dark"}/>
            </IconButton>
            <input placeholder='search'  className={"search-box" + (lighttheme ? "" : " dark")}/>
        </div>
        <div className='ug-list'>
            <motion.div  
            whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
            className={"list-tem" + (lighttheme ? "" : " dark")}
            >
                <p className={"con-icon" + (lighttheme ? "" : " dark")}>t</p>
                <p className={"con-title" + (lighttheme ? "" : " dark")}>test groups</p>
            </motion.div>
            <motion.div  
            whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
            className={"list-tem" + (lighttheme ? "" : " dark")}
            >
                <p className={"con-icon" + (lighttheme ? "" : " dark")}>t</p>
                <p className={"con-title" + (lighttheme ? "" : " dark")}>test groups</p>
            </motion.div>
            <motion.div  
            whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
            className={"list-tem" + (lighttheme ? "" : " dark")}
            >
                <p className={"con-icon" + (lighttheme ? "" : " dark")}>t</p>
                <p className={"con-title" + (lighttheme ? "" : " dark")}>test groups</p>
            </motion.div>
            <motion.div  
            whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
            className={"list-tem" + (lighttheme ? "" : " dark")}
            >
                <p className={"con-icon" + (lighttheme ? "" : " dark")}>t</p>
                <p className={"con-title" + (lighttheme ? "" : " dark")}>test groups</p>
            </motion.div>
            <motion.div  
            whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
            className={"list-tem" + (lighttheme ? "" : " dark")}
            >
                <p className={"con-icon" + (lighttheme ? "" : " dark")}>t</p>
                <p className={"con-title" + (lighttheme ? "" : " dark")}>test groups</p>
            </motion.div>
            <motion.div  
            whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
            className={"list-tem" + (lighttheme ? "" : " dark")}
            >
                <p className={"con-icon" + (lighttheme ? "" : " dark")}>t</p>
                <p className={"con-title" + (lighttheme ? "" : " dark")}>test groups</p>
            </motion.div>
            <motion.div  
            whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
            className={"list-tem" + (lighttheme ? "" : " dark")}
            >
                <p className={"con-icon" + (lighttheme ? "" : " dark")}>t</p>
                <p className={"con-title" + (lighttheme ? "" : " dark")}>test groups</p>
            </motion.div>
            <motion.div  
            whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
            className={"list-tem" + (lighttheme ? "" : " dark")}
            >
                <p className={"con-icon" + (lighttheme ? "" : " dark")}>t</p>
                <p className={"con-title" + (lighttheme ? "" : " dark")}>test groups</p>
            </motion.div>
            <motion.div  
            whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
            className={"list-tem" + (lighttheme ? "" : " dark")}
            >
                <p className={"con-icon" + (lighttheme ? "" : " dark")}>t</p>
                <p className={"con-title" + (lighttheme ? "" : " dark")}>test groups</p>
            </motion.div>
            <motion.div  
            whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
            className={"list-tem" + (lighttheme ? "" : " dark")}
            >
                <p className={"con-icon" + (lighttheme ? "" : " dark")}>t</p>
                <p className={"con-title" + (lighttheme ? "" : " dark")}>test groups</p>
            </motion.div>
            <motion.div  
            whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
            className={"list-tem" + (lighttheme ? "" : " dark")}
            >
                <p className={"con-icon" + (lighttheme ? "" : " dark")}>t</p>
                <p className={"con-title" + (lighttheme ? "" : " dark")}>test groups</p>
            </motion.div>
            <motion.div  
            whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
            className={"list-tem" + (lighttheme ? "" : " dark")}
            >
                <p className={"con-icon" + (lighttheme ? "" : " dark")}>t</p>
                <p className={"con-title" + (lighttheme ? "" : " dark")}>test groups</p>
            </motion.div>
            <motion.div  
            whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
            className={"list-tem" + (lighttheme ? "" : " dark")}
            >
                <p className={"con-icon" + (lighttheme ? "" : " dark")}>t</p>
                <p className={"con-title" + (lighttheme ? "" : " dark")}>test groups</p>
            </motion.div>
            
            
        </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Groups