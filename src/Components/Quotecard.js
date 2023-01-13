import React from "react";
import bkbtn from '../Components/Images/bookmark.png';

const Quotecard = (props) => {
    return (
        <div className="flex items-center justify-center px-5 py-8">
            <div className="relative bg-black block w-full md:w-3/4 lg:w-1/2 mx-auto rounded-xl px-5 py-12 shadow-black shadow-2xl text-white">
                <div className="w-full mb-12">
                    <div className="text-5xl text-left  h-3">“</div>
                    <p className="text-xl  text-center px-5 py-12 md:py-0 ">{props.content}</p>
                    <div className="text-5xl text-right  h-3 -mt-3">”</div>
                </div>
                <div className="block pt-8">
                    <p className="text-lg font-bold text-center"> ~ {props.author}</p>
                </div>
                {
                    (!props.bk) ?
                        (
                            <div className="absolute right-4 bottom-2 pt-4 sm:right-8 sm:bottom-6 sm:pt-0" >
                                <img className="hover:cursor-pointer" src={bkbtn} alt="BookMark" width="30px" height="30px" onClick={props.AddBookmark} />
                            </div>
                        ):
                        (<></>)
                }
            </div>
        </div>
    )
};

export default Quotecard;