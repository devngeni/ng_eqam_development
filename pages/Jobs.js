import React from 'react'
import style from "../styles/Jobs.module.css";
import Navbar from "@/components/Navbar/Navbar";

const Jobs = () => {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.content_head}>Jobs</div>
                </div>
            </div>
        </>
    )
}

export default Jobs