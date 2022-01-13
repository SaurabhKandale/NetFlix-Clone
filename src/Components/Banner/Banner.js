import React,{useState,useEffect} from 'react'
import start from '../../axios';
import requests from '../../reqsender';
import './banner.css';
function Banner() {
    const [picture,setPicture]=useState([]);
    useEffect(()=>{
        async function call(){
            const arr=await start.get(requests.fetchTrending);
            setPicture(arr.data.results[
                Math.floor(Math.random()*arr.data.results.length-1)
            ]);
            return arr;
        }
        call();
    },[]);
    return (
        <div className='banner' style={{
            backgroundImage:`url("https://image.tmdb.org/t/p/original${picture.backdrop_path}")`,
            backgroundSize:"cover",
            backgroundPosition:"center top",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backgroundBlendMode:"overlay"
        }} >
            
            <div className="banner_content">
                <h1 className="ban_title">{picture?.name || picture?.title}</h1>
                <div className="ban_button">
                    <button className="btn1">Add to List</button>
                    <button className="btn2"> <i className="fa fa-play"></i>  Play</button>
                </div>
                <p className="ban_description">{picture.overview}</p>
            </div>

        </div>
    )
}

export default Banner;
