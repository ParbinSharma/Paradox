import black from './images/adam.jpeg'
import ant from './images/ant.jpg'
import bat from './images/bat.jpg'
import captain from './images/captain.jpg'
import civil from './images/civil.jpg'
import justice from './images/justice.jpg'
import love from './images/love.jpg'
import maverick from './images/maverick.jpeg'
import maze from './images/maze.jpg'
import spider from './images/spider.jpeg'
import superm from './images/super.jpg'
import Footer from './footer.js'







import { useState,useEffect } from 'react';


export default function Main() {
const[img,setImg]=useState(null);

const [seconds, setSeconds] = useState(0);
    const loop=()=>{
      if(seconds===11){
        setSeconds(0);
      }
    }
    const op=()=>{
      if(seconds===0){
        setImg(black);
      }
      if(seconds===1){
        setImg(ant);
      }
      if(seconds===2){
        setImg(bat);
      }
      if(seconds===3){
        setImg(captain);
      }
      if(seconds===4){
        setImg(civil);
      }
      if(seconds===5){
        setImg(justice);
      }
      if(seconds===6){
        setImg(love);
      }
      if(seconds===7){
        setImg(maverick);
      }
      if(seconds===8){
        setImg(maze);
      }
      if(seconds===9){
        setImg(spider);
      }
      if(seconds===10){
        setImg(superm);
      }
      
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    useEffect(() => {
  const interval = setInterval(() => {
    setSeconds(seconds=> seconds+1);
  }, 2000);
  return () => clearInterval(interval);
  
}, []);
useEffect(()=>{
  loop()
  op()
});

  return (
<>
<img className='banners' alt='banners' src={img}/>
<Footer/>
</>
  );
}

