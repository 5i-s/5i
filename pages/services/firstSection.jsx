import React, { useEffect, useRef } from "react";
import style from "./sections.module.css";
import Image from "next/image";
import firsta from "../../assets/shape.svg";
import sec from "../../assets/3orsa.png";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
const FirstSection = ({ isClicked }) => {
  const first = useRef(null);
  useEffect(() => {
    console.log(isClicked);
    const timeline = gsap.timeline();
    timeline
      .from("." + style.firstleft + " h1", {
        duration: 0.5,
        delay: 0.3,
        scale: 0,
        stagger: {
          amount: 1,
        },
        ease: "Elastic.easeOut",
      })
      .from(
        "." + style.firstright + " h1",
        {
          duration: 0.5,
          delay: 0,
          scale: 0,
          stagger: {
            amount: 1,
          },
          ease: "Elastic.easeOut",
        },
        "-=.8"
      )
      .from(
        ".green",
        { translateY: -1000, duration: 0.5, stagger: { amount: 0.4 } },
        "-=1.2"
      )
      .from("." + style.parag, { x: -1000 }, "-=1")
      .from("." + style.blurparent, { scale: 0 });
    gsap.registerPlugin(ScrollTrigger);

    const timelin1 = gsap.timeline({
      scrollTrigger: {
        trigger: first.current,
        start: "top top",
        end: () => innerHeight,
        scrub: true,
      },
    });

    timelin1.fromTo(
      "." + style.glass,
      { translateY: 0, transition: "all linear 1s", duration: 2 },
      { translateY: 200, transition: "all linear 1s", duration: 2 }
    );
     let mouse = {
        x: undefined,
        y: undefined,
      };
    document.addEventListener("mousemove", function () {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      if(innerWidth>1050){
gsap.to( "." + style.glass,
{ translateY: mouse.y-200,translateX:mouse.x-1000, transition: "all linear 1s", duration: 2 },
)} else {
  gsap.to( "." + style.glass,
  { translateY: mouse.y,translateX:mouse.x, transition: "all linear 1s", duration: 2 },
  ) 
}}) });
  return (
    <div className={style.FirstSection} ref={first}>
      <div className={style.firstleft}>
        <h1>Unleashing</h1>
        <h1>Creative</h1>
        <h1>Potential</h1>
      </div>
      <img
        src="https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640528a303087c65a9603d30_underline-green.svg"
        style={{
          rotate: "90deg",
          top: 0,
          transform: " scale(1.5)",
          mixBlendMode: "color-dodge",
          width: "70vw",
          position: "absolute",
          zIndex: 2,
          pointerEvents: "none",
        }}
        alt="green"
        className="green"
      />
      <img
        src="https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640528a303087c65a9603d30_underline-green.svg"
        style={{
          transform: "translate(250px) scale(1.5)",
          mixBlendMode: "color-dodge",
          position: "absolute",
          width: "70vw",
          top: "55%",
          pointerEvents: "none",
        }}
        alt="green"
        className="green"
      />

      <div className={style.firstright}>
        <div className={style.blurparent}>
          <div className={style.blur}></div>{" "}
        </div>
        <h1 style={{ zIndex: 2 }}>Building</h1>
        <h1 style={{ zIndex: 2 }}>Powerful</h1>
        <h1 style={{ zIndex: 2 }}>Brands</h1>
      </div>
      <div className={style.glass}></div>
      <div className={style.parag}>
        <Image
          className={style.oorssa}
          style={{
            width: "15%",
            height: "80%",
            objectFit: "contain",
            minHeight: "150px",
          }}
          src={sec}
        ></Image>
        <p>
          Delivering strategic branding and distinctive app development, we
          elevate businesses to their apex potential. With a meticulous emphasis
          on problem-solving, we foster growth and establish industry leadership
          for technology-forward organizations worldwide, including yours.
        </p>
      </div>
    </div>
  );
};

export default FirstSection;
