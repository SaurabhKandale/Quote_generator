import {useNavigate} from 'react-router-dom';

const Navbar=()=>{
 
    const navigate=useNavigate();

    return(
        <div id="navbar" className="flex justify-between bg-black text-white rounded-2xl text-lg">
            <div className="block px-4 md:px-12 py-4 ">
                <span onClick={()=>{navigate('/')}} className="hover:cursor-pointer px- md:px-6 py-2 rounded-xl hover:bg-zinc-800 transition-all duration-300">Home</span>
            </div>
            <div className="block px-4 md:px-12 py-4">
                <span onClick={()=>{navigate('/bookmarks')}} className="hover:cursor-pointer px-2 md:px-6 py-2 rounded-xl hover:bg-zinc-800 transition-all duration-300">Bookmarks</span>
            </div>
        </div>
    )
}

export default Navbar;