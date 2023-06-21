import gsap from "https://esm.sh/gsap@3.12.1?target=es2022";
import { useLayoutEffect } from "preact/hooks";

const Stars = () => {
  useLayoutEffect(() => {
    const space = document.getElementById(`space`) as HTMLElement,
      spaceWidth = space.scrollWidth,
      spaceHeight = space.scrollHeight,
      perspective = 100;
    const frag = document.createDocumentFragment();

    space.style.setProperty(`--perspective`, `${perspective}px`);

    const MAX_ELEMENTS = 200;

    function makeStar(index: number) {
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
        backgroundColor: "#06E474",
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

      frag.appendChild(star);

      if (i === MAX_ELEMENTS-1) {space.appendChild(frag);
}
    }

    for (let i = 0; i < MAX_ELEMENTS; i++) {
      setTimeout(makeStar, 0, i);
    }

    
  }, []);

  return (null);
};

export default Stars;
