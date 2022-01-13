import React, { useState, useEffect } from 'react'
import start from '../../axios'
import './row.css'
function Row({ title, fetchURL, isLarge }) {

    const [content, setContent] = useState([]);
    const img_url = "https://image.tmdb.org/t/p/original";
    useEffect(() => {
        async function makeCall() {
            const call = await start.get(fetchURL);
            setContent(call.data.results);
            return call;
        }
        makeCall();
    }, [fetchURL])

    console.log(content);

    return (
        <div>
            <h1 className='row_title'>{title}</h1>
            <div className={`row ${isLarge && "large_row"}`}>
                {
                    content.map(item => {
                        return <img key={item.id} src={`${img_url}${isLarge?item.poster_path:item.backdrop_path}`} alt='' className='poster' />
                    })
                }
            </div>
        </div>
    )

    }

export default Row;
