import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <button 
            onClick={props.onClick} 
            className="relative flex items-center px-4 py-2 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group mt-4 h-[2.6rem] sm:px-6 sm:py-2 md:h-[3rem]"
        >
            <span className="absolute top-0 right-0 inline-block w-3 h-3 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4 sm:w-4 sm:h-4">
                <span className="absolute top-0 right-0 w-4 h-4 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white sm:w-5 sm:h-5" />
            </span>
            <span className="absolute bottom-0 rotate-180 left-0 inline-block w-3 h-3 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4 sm:w-4 sm:h-4">
                <span className="absolute top-0 right-0 w-4 h-4 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white sm:w-5 sm:h-5" />
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0" />
            <span className="relative w-full text-left text-white text-sm transition-colors duration-200 ease-in-out group-hover:text-white sm:text-base md:text-lg">
                {props.title}
                <Link to={props.href}></Link>
            </span>
        </button>
    );
}

export default Button;
