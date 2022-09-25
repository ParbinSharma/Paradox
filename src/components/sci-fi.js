import science from './images/science.jpeg'
import data from './json_files/sci.json';
import {useState} from 'react'
import Spinner from './spinner.js'
import test from './images/1.jpg'

export default function SciFi(){
  const[loaded,setLoaded]=useState(false);
let op=()=>{
  setLoaded(true);
}
  return(
    <>
            {loaded ? null : (
        <div>
<Spinner/>
        </div>
      )}
    <img alt='..'   src={science} className='marvel'/>
    
                    
                         
<div className='container'>
            <div className='row row-cols-3'>
   {data.map((element) => {
      return <>
      
             <div className='col cp' key={element.id}>
   <a href={element.video} target="_blank" ><img alt='..'   src={element.image} onLoad={op}/>
           <p className='label'>{element.name}({element.lang}) </p>
                      <p className='year'>{element.released}</p></a>
                  </div>
          </>
    })}
                  </div>
</div>
                    
                    </>
    );
}