import React, {useState, useEffect} from 'react';
import axios from "axios";
const RandomKitty = () => {
    const [cats, setCats] = useState([])

    const getCats = () => {
        axios("https://api.thecatapi.com/v1/images/search")
            .then(result => setCats(result.data[0]))
    }
    useEffect(() => {
        getCats()
    }, [])
    return (
        <div>

            <div>
                <img src={cats.url} alt="" className="h-56 mx-auto"/>
                <p>{cats.name}</p>
            </div>

            <button onClick={getCats}
                className="bg-transparent hover:bg-red-400 text-pink-dark font-semibold hover:text-white py-2 px-4 border border-pink hover:border-transparent rounded mr-2 mx-auto my-16">
                Change
            </button>
        </div>
    )

}


export default RandomKitty;