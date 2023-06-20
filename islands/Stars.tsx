import gsap from "npm:gsap";
import { useEffect } from "preact/hooks";

const Stars = () => {
    useEffect(() => {
        const space = document.getElementById(`space`) as HTMLElement,
        spaceWidth = space.scrollWidth,
        spaceHeight = space.scrollHeight,
        perspective = 100;
    
      space.style.setProperty(`--perspective`, `${perspective}px`);
    
      function makeStar() {
        const star = document.createElement(`time`),
          starWidth = gsap.utils.random(0.7, 1.1, 1),
          starHeight = starWidth * gsap.utils.random(10, 20, 1),
          randomRotation = Math.random() * 360,
          scaleModifier = Math.random();
    
        const visibleRangeMaximum =
          (spaceWidth - spaceHeight > 0 ? spaceWidth : spaceHeight) / 1.5;
    
        gsap.set(star, {
          width: `${starWidth}px`,
          height: `${starHeight}px`,
          backgroundColor: "#F3FFF9",
          transform: `
          translateY(${starHeight / 2}px)
          rotate(${randomRotation}deg)
          rotateX(90deg)
          translateZ(0px)
          scaleX(${scaleModifier})
        `,
        });
    
        gsap.to(star, {
          duration: "random(10, 20)",
          transform: `
          translateY(${starHeight / 2}px)
          rotate(${randomRotation}deg)
          rotateX(90deg)
          translateZ(${perspective + visibleRangeMaximum}px)
          scaleX(${scaleModifier})
        `,
          repeat: -1,
          ease: `none`,
        }).progress(Math.random());
    
        space.appendChild(star);
      }
    
      for (let i = 0; i < 200; i++) {
        makeStar();
      }
    }, []);

    return (
        <div>
        </div>
    )
};


export default Stars;