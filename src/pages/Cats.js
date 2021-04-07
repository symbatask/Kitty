

import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";


const Cats = () => {
    const [cats, setCats] = useState([])
    useEffect(() => {
        axios("https://api.thecatapi.com/v1/breeds")
            .then(json => setCats(json.data))
    }, [])

    return (
        <div className="container mx-auto my-16 text-center">
            <div className="flex flex-wrap -mx-12">
                {cats.map((item) => (

                    <div>
                        <Link to = { `/breeds/${item.id}`}>
                            <img src={item?.image?.url} alt=""/>
                            <div >
                                {item.name}
                            </div>
                        </Link>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Cats;






// <div className="w-1/4 px-12 mb-5">
//     <Link to = { `/breeds/${cat.id}`} >
//         <img src={cat?.image?.url} alt="" className="h-56 mx-auto object-cover"/>
//         <p>{cat.name}</p>
//     </Link>
// </div>