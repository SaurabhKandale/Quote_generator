import Navbar from "./Navbar";
import QuoteComp from "./QuoteComp";

const Home=()=>{
    return(
        <div className="font-bold min-w-full min-h-screen bg-gradient-to-r from-zinc-200 to-zinc-300 pt-2 px-4">
            <Navbar />
            <QuoteComp />
        </div>
    )
}

export default Home;