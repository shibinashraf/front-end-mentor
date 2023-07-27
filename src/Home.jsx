import {useState, useEffect} from 'react';
import Pagenav from './components/Pagenav';
import Load from './components/Load';
export default function Home(){
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        setIsShown(!isShown);
      };
    const [loading, setLoading] = useState(false);

  useEffect(() => { setLoading(true); 
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, []);

    return(
        <>
        
        {loading ? (
        <Load/>
      ) : (
        <div className=" bg-slate-900 h-screen w-screen flex flex-col  items-center justify-center">
            <p className=" text-slate-100 text-center text-2xl ">
            View my frontend practice projects</p>
            <Pagenav/>
    </div>)}
    
          
        </>
    );
}