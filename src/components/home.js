import marvel from './images/marvel.jpg'
import dc from './images/dc.jpg'
import scifi from './images/sci1.jpg'
import {Link} from 'react-router-dom'
import data from './json_files/marvel.json';
import dcp from './json_files/dc.json';
import sci from './json_files/sci.json';
import {useState} from 'react'
import Spinner from './spinner.js'
import test from './images/1.jpg'
// <strong>{data.name}<br/></strong>


function Home() {
const[loaded,setLoaded]=useState(false);
let op=()=>{
  setLoaded(true);
}
let Ms=data.sort(function(a, b) { return a.Variable1 < b.Variable1 ? 1 : -1; })
                .slice(0, 8);
let dcomics=dcp.sort(function(a, b) { return a.Variable1 < b.Variable1 ? 1 : -1; })
                .slice(0, 8);
let fiction=sci.sort(function(a, b) { return a.Variable1 < b.Variable1 ? 1 : -1; })
                .slice(0, 8);
  return(
    <>
{loaded ? null : (
        <div>
<Spinner/>
        </div>
      )}
    <img alt='..'  className="marvel"  src={marvel}/>
<div className="d-flex justify-content-around label-h">
<p style={{color:'#911b25'}} className="franchise">MARVEL</p>
<Link to='/marvel' className='see-all'>MORE</Link>
</div>
<div className="scroller">
       {Ms.map((element) => {
      return <>
      
          <div className="scroller-item">   
   <a href={element.video} target="_blank" ><img alt='..'  src={element.image} onLoad={op}/></a>
                  </div>
          </>
    })}
                  </div>
    <img alt='..'  className="dc" src={dc}/>
<div className="d-flex justify-content-around label-h">
<p style={{color:'#0376f2'}} className="franchise">DC</p>
<Link to='/dc' className='see-all'>MORE</Link>
</div>
    <div className="scroller">
       {dcomics.map((element) => {
      return <>
          <div className="scroller-item">   
 <a href={element.video} target="_blank" ><img alt='..'  src={element.image} onLoad={op}/></a>
                  </div>
          </>
    })}
      </div>
    <img alt='..'  className="dc" src={scifi}/>
<div className="d-flex justify-content-around label-h">
<p style={{color:'#184870'}} className="franchise">Sci-Fi </p>
<Link to='/sci-fi' className='see-all'>MORE</Link>
</div>
<div className="scroller">
       {fiction.map((element) => {
      return <>
          <div className="scroller-item">   
 <a href={element.video} target="_blank" ><img alt='..'  src={element.image} onLoad={op}/></a>
                  </div>
          </>
    })}
                  </div>
    
    </>
  );
}
export default Home;