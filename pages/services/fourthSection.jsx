import React, { useEffect, useRef, useState } from 'react'
import style from "./sections.module.css"
import Image from 'next/image'
import brain from "../../assets/brain.svg"
import paper from "../../assets/paper.svg"
import puzzle from "../../assets/puzzle.svg"
import eye from "../../assets/eye.png"
import box from "../../assets/box.svg"
import third from "../../assets/third.svg"
import sec from "../../assets/sec.svg"
import first from "../../assets/first.svg"
import e from "../../assets/e.png"

import banner from "../../assets/banner5i.png"
import marketing from "../../assets/marketing.png"
import { gsap } from 'gsap'
import img from "../../assets/web.png"
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
export const FourthSection = () => {
const [pack,setpack]=useState({first:true,sec:false,last:false})
const sectionRef = useRef(null);
const [scroll,setscroll]=useState(undefined)
const [click,setclick]=useState({first:false,sec:false,third:false,frth:false})


useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top top',
      end:'end end',
      scrub: true,
     
    },
  });

  timeline
    .fromTo(
      ".psycho",
      {bottom:-500,scale:1.6,duration: .05, opacity:0, ease: "none" },
      { top:250,scale:1.6, duration: .05,opacity:0.2, ease: "none",rotate:18}
     ,"-=.1")
  .fromTo(`.first`,{x:200,transition:"all ease 1s",delay:1},{x:0})
.fromTo(".sec .textheader2",{paddingBottom:100},{paddingBottom:0})
  .fromTo(`.third`,{x:-200,transition:"all ease 1s",delay:1},{x:0})
  .fromTo('.images',{y:-1000,opacity:0},{y:0,paddingTop:"10px",opacity:1,transition:"all ease 1s"})
  .fromTo('.textheader2',{fontSize:"40px",transition:"all ease .2s",textAlign:"center"},{fontSize:"20px"})
  return () => {
    timeline.kill();
  };
}, []);
  return (
    <div className={style.fourth } ref={sectionRef}  >       
      <Image className='psycho' src={banner} alt='psycho' style={{position:"absolute",right:-650,opacity:.2,transition:"all 1s linear"}}></Image>

      <div className={style.pack_container}>
        <div className={style.text_animated}>
       
        <h1 className='text'><span>PACKS WE PROVIDE</span><span>*</span><span>PACKS WE PROVIDE</span><span>*</span><span>PACKS WE PROVIDE</span><span>*</span><span>PACKS WE PROVIDE</span><span>*</span><span>PACKS WE PROVIDE</span><span>*</span></h1>
        <h1><span>CHOOSE THE ONE THAT SUITS YOU</span><span>*</span><span>CHOOSE THE ONE THAT SUITS YOU</span><span>*</span><span>CHOOSE THE ONE THAT SUITS YOU</span><span>*</span><span>CHOOSE THE ONE THAT SUITS YOU</span><span>*</span></h1>
        </div>
        <p style={{fontSize:"40px",width:"100%",textAlign:"center "}}>We elevate phenomenal solutions for growth by translating their future potential into a strategic brand narrative</p>
<div className={style.pack}> 
<div className="first">
 <div className={style.border}>
<div className={style.first}>
<div className="images" style={{position:"relative",overflow:"hidden"}}>
<Image className={style.image} src={sec} alt='sec'></Image>
<Image className={style.invert} src={brain}></Image>
</div>
<p style={{color:"#fff",padding:0,margin:0,fontSize:"25px",marginTop:"10px"}} className='textheader2'>KICKSTART YOUR BRAND</p>
  <button className={style.interested}>Interested ?</button>
  <div className={style.texts}>
    <p style={{fontSize:"15px",padding:14}}>brand development</p>
    <p style={{fontSize:"15px",padding:14}}>Etude de faisabilité</p>
    <p style={{fontSize:"15px",padding:14}}>Etude de collection</p>
    <p style={{fontSize:"15px",padding:14}}>Prototypage</p>
    <p style={{fontSize:"15px",padding:14}}>Production</p>
    <p style={{fontSize:"15px",padding:14}}>Canaux de distribution</p>
    <p style={{fontSize:"15px",padding:14}}>Logistics</p>
   <a  href="kickstart"> <p style={{fontSize:"15px",textAlign:"center"}}>And a lot more</p>
   </a>
  </div>
  </div>
</div>
</div>
<div className="sec" style={{zIndex:10000}}>
<div className={`${style.border} ${style.acolor}`}>
<div className={style.first}>

<div className="images" style={{position:"relative",overflow:"hidden"}}>
<Image className={style.image} src={third} alt='third'></Image>
<Image className={style.invert} src={puzzle} style={{right:"25px"}}></Image>

</div>

<p style={{color:"#fff",padding:0,margin:0,fontSize:"25px",marginTop:"10px"}} className='textheader2'>FOR EXISTING BRAND</p>
<button className={style.interested}>Interested ?</button>
<div className={style.texts}>
    <p style={{fontSize:"15px",padding:14}}>brand development</p>
    <p style={{fontSize:"15px",padding:14}}>Etude de faisabilité</p>
    <p style={{fontSize:"15px",padding:14}}>Etude de collection</p>
    <p style={{fontSize:"15px",padding:14}}>Prototypage</p>
    <p style={{fontSize:"15px",padding:14}}>Production</p>
    <p style={{fontSize:"15px",padding:14}}>Canaux de distribution</p>
    <p style={{fontSize:"15px",padding:14}}>Logistics</p>
    <p style={{fontSize:"15px",textAlign:"center"}}>And a lot more</p>

  </div>
  </div>
</div>
</div>
<div className="third">
<div className={`${style.border} ${style.bcolor}`}>
<div className={style.first}>
<div className="images" style={{position:"relative",overflow:"hidden"}}>
<Image className={style.image} src={first} alt='first'></Image>
<Image className={style.invert}  style={{right:"25px"}} src={box}></Image>

</div>
<p style={{color:"#fff",padding:0,margin:0,fontSize:"25px",marginTop:"10px"}} className='textheader2'>BUSINESS SOLUTIONS</p>
<button className={style.interested}>Interested ?</button>
<div className={style.texts}>
    <p style={{fontSize:"15px",padding:14}}>brand development</p>
    <p style={{fontSize:"15px",padding:14}}>Etude de faisabilité</p>
    <p style={{fontSize:"15px",padding:14}}>Etude de collection</p>
    <p style={{fontSize:"15px",padding:14}}>Prototypage</p>
    <p style={{fontSize:"15px",padding:14}}>Production</p>
    <p style={{fontSize:"15px",padding:14}}>Canaux de distribution</p>
    <p style={{fontSize:"15px",padding:14}}>Logistics</p>
    <p style={{fontSize:"15px",textAlign:"center"}}>And a lot more</p>

  </div>


</div>
  </div>
</div>
</div>
       
     
       
       </div>
      
    </div>
  )
}