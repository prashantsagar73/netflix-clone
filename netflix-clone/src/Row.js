import React,{ useState} from 'react';
import axios from './axios';

function Row({title}) {
    const [movies, setMovies] = useState([]);
    // A snippet of code which runs based on a specific condition 
    useState(()=>{
        if [], run once when the row loads , and dont run agian 

    },[]);


    return (
        <div>
            <h2>{title}</h2>
            {/* container -> poster */}
        </div>
    )
}

export default Row
