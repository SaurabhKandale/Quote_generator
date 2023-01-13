import React from "react";
import { useSelector } from "react-redux";
import Quotecard from "../Quotecard";
import Navbar from "../Navbar";

const Bookmark=()=>{

    const bkarray=useSelector((state)=>state.bookmarks);

    return(
        <div className="min-w-full min-h-screen font-bold bg-gradient-to-r from-zinc-400 to-zinc-400 pt-2 px-4">
            <Navbar />
            <div>
                {
                    bkarray.map((val,key)=>{return <Quotecard key={key} content={val.content} author={val.author} bk={true} />})
                }
            </div>
        </div>
    )


}

export default Bookmark;