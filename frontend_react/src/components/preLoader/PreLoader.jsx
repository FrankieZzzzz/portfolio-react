import React, { useEffect } from 'react';
import './PreLoader.scss'
import {PreLoaderAnimation} from'./PreLoaderAnimation'

const PreLoader = () => {

    useEffect(()=>{
        PreLoaderAnimation();
    },[])

    return (
        <div className="app__preloader">
            <div className="app__preloader-container">
                <span>Hi</span>
                <span>there</span>
                <span>👋</span>
            </div>
        </div>
    )
}

export default PreLoader
