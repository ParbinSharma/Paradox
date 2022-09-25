import play from './images/play.jpg'
import insta from './images/insta.jpg'
import face from './images/face.jpg'
import whap from './images/whap.png'
import {Link} from 'react-router-dom'


export default function Footer(){
  return(
    <>
  <div className='footer'>
<div className='dave'>
  <li className='li-ft'>100k+<p className="Views">Total views</p></li><span/>
  <li className='li-ft'>
  <Link className="links" to='/home'><img className="play" alt='Play' src={play}/>&nbsp;&nbsp;Play</Link></li><span/>
  <li className='li-ft'>
  <a href='https://www.facebook.com/parbin.sharma.737448'><img className="play" alt='...' src={face}/></a>
  &nbsp;&nbsp;
  <a href='https://instagram.com/parbin.ig'><img className="play" alt='..' src={insta}/></a>
  &nbsp;&nbsp;
  
  <a href='http://wa.me/917439175814'><img className="play" alt='..' src={whap}/></a>&nbsp;&nbsp;
  <p className="Views">contact me</p>
  </li>
 
</div>
  </div>
   </>
        );
}