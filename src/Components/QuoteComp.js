import React, { useState } from "react";
import Timer from "./Timer";
import {useDispatch} from 'react-redux';
import { addToBook } from "../Redux/Actions/actCreators";
import Quotecard from "./Quotecard";

const QuoteComp = () => {

    const dispatch=useDispatch();
    const [data, setData] = useState(null);
    const [tag,setTag]=useState("Random");
    const [tgArray,setTgArray]=useState([]);

    async function updateQuote() {
        try {
            const url=(tag==="Random")?"https://api.quotable.io/random":`https://api.quotable.io/random?tags=${tag}`;
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setTag("Random");
        } catch (error) {
            console.error(error);
        }
    }

    async function updateTgArray() {
        try {
            const response = await fetch("https://api.quotable.io/tags");
            const data = await response.json();
            setTgArray(data);
        } catch (error) {
            console.error(error);
        }
    }

    const AddBookmark=()=>{
        dispatch(addToBook(data.content,data.author));
        alert("Added To Bookmarks ");
    }

    const TagFun=(event)=>{
        setTag(event.target.value);
    }

    React.useEffect(() => {
        updateQuote();
        updateTgArray();
    }, []);

    if(data===null){
        return <Timer />;
    }
    else{
        return (
            <div className="pt-16">
                <Quotecard content={data.content} author={data.author} bk={false} AddBookmark={AddBookmark} />
                <div className="block items-center sm:w-full md:w-3/4 lg:w-1/2 mx-auto pt-8">
                    <select label="Select Version" className="block w-3/4 md:w-1/2 items-center mx-auto outline-0 p-2 px-4 rounded-lg border-2 border-black" value={tag} onChange={TagFun}>
                        <option>{"Random"}</option>
                        {tgArray.map((val,key)=>{return <option key={key}>{val.name}</option>})}
                    </select>
                </div>
                <div id="nxt_btn" className="block text-center py-8">
                    <button className=" bg-black rounded-lg text-white px-6 py-2 hover:bg-zinc-900 transition-bg duration-300" onClick={updateQuote}>Next Quote</button>
                </div>
            </div>
        )
    }
    
}

export default QuoteComp;