import React from 'react';
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-red-400 p-6">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <span className="font-bold text-xl tracking-tight text-white mr-6">Hello Kitty! </span>
                <div className="text-sm lg:flex-grow">
                    <Link to="/cats"
                          className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 hover:text-white">

                        Cats
                    </Link>
                    <Link to="/random"
                          className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white hover:text-white">
                        Random cats
                    </Link>
                </div>

            </div>
        </nav>

    );
};

export default Header;




//         <div>
// <Link to="/random">
//     Random cats
// </Link>
//             <Link to="/cats">
//                   Cat breeds
//             </Link>
//         </div>