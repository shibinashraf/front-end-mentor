import {useState} from 'react';
import Pagenav from './components/Pagenav';
export default function Home(){
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        setIsShown(!isShown);
      };

    return(
        <>
        
        
        <div className="bg-slate-900 h-screen w-screen flex flex-col  items-center justify-center">
            <p className=" text-slate-100 text-center text-2xl">
            View my frontend practice projects</p>
            <button className="mt-4 text-gray-100  p-4 rounded-xl bg-slate-600 hover:bg-orange-400" 
          onClick={handleClick}>View Projects</button>
            {isShown && <Pagenav />}
    </div>
    
          
        </>
    );
}