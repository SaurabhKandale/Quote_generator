import React from "react";
import { useSelector } from "react-redux";
import Quotecard from "../Quotecard";
import Navbar from "../Navbar";

const Bookmark = () => {

    const bkarray = useSelector((state) => state.bookmarks);

    return (
        <div className="min-w-full min-h-screen font-bold bg-gradient-to-r from-zinc-200 to-zinc-300 pt-2 px-4">
            <Navbar />
            {
                (bkarray.length == 0) ?
                    (<div className="text-3xl text-center py-16 md:py-56">
                        <p>NO BOOKMARKS !!</p>
                    </div>) :
                    (
                        <div>
                            {
                                bkarray.map((val, key) => { return <Quotecard key={key} content={val.content} author={val.author} bk={true} /> })
                            }
                        </div>
                    )
            }
        </div>
    )


}

export default Bookmark;