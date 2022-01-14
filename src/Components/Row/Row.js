import React, { useState, useEffect } from 'react'
import start from '../../axios'
import Modal from './Modal';
import './row.css'
function Row({ title, fetchURL, isLarge }) {

    const [content, setContent] = useState([]);
    const [isTrue,setTrue]=useState(false);
    const [object,setObject]=useState({});
    const img_url = "https://image.tmdb.org/t/p/original";
    useEffect(() => {
        async function makeCall() {
            const call = await start.get(fetchURL);
            setContent(call.data.results);
            return call;
        }
        makeCall();
    }, [fetchURL])

    const handleClick=(item)=>{
        setObject(item);
        setTrue(true);
    }
    return (
        <div>
            <h1 className='row_title'>{title}</h1>
            <div className={`row ${isLarge && "large_row"}`}>
                {
                    content.map(item => {
                        return <div key={item.id} className="poster_div" >
                            <img  src={`${img_url}${isLarge?item.poster_path:item.backdrop_path}`} alt='' className='poster' />
                            <i className="fa fa-info-circle" onClick={()=>{handleClick(item)}} ></i>
                        </div>
                    })
                }
            </div>
            {isTrue && <Modal pop={object} set={setTrue} />}
        </div>
    )

    }

export default Row;
