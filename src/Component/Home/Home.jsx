import { useState } from "react";
import Header from "../Header/Header";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Nevbar from "../Nevbar/Nevbar";
import RightSideNav from "../RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import { useEffect } from "react";

import News from "./News";


const Home = () => {
    const [allnews , setnews] =useState([])
    useEffect(() =>{
        fetch('news.json')
        .then(res => res.json())
        .then(data => setnews(data))
    },[])
    
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Nevbar></Nevbar>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2"> 
                   {
                    allnews.slice(0 , 4).map(news => <News key={news.id} news={news}></News>)
                   }
                </div>
                <div>
                <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;