import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ShowcaseItems from "./ShowcaseItems";
import showcaseItems from "../../showcase/showcase-items.js";
import $ from 'jquery';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Showcase = () => {

  const wrapper = useRef();
  const scrollWrapper = useRef();
  const scrollItem = useRef();

  // Horizontal scroll logic start
  useEffect(() => {
    const scrollEnd = scrollWrapper.current.scrollWidth;
    
    let tl = gsap.timeline({paused: true});
    
    tl.to(scrollWrapper.current, { scrollTo: { x: "max" }, ease: 'linear' });
    
    ScrollTrigger.create({
      trigger: scrollWrapper.current,
      start: 'top top',
      markers: true, 
      end: () => `${scrollEnd}`,
      animation: tl,
      scrub: true,
      pin: true
    });

  }, [scrollWrapper]);
  // Horizontal scroll logic end




  const showCaseBanner = "SHOWCASE / SHOWCASE / SHOWCASE / SHOWCASE / SHOWCASE / SHOWCASE SHOWCASE / SHOWCASE / SHOWCASE / SHOWCASE / SHOWCASE / SHOWCASE";
  return (
    <div className='showcase'>
      <div className='showcase__banner-1'>
        <h2>{showCaseBanner}</h2>
      </div>
      <div className='showcase__banner-2'>
        <h2>{showCaseBanner}</h2>
      </div>
      <div className='wrapper'>
          <div ref={scrollWrapper} className='scrolling-wrapper'>
            {showcaseItems.map((newShowcaseItem, index) => (
              <ShowcaseItems
                key={index}
                id={index}
                url={newShowcaseItem.url}
                image={newShowcaseItem.image}
                item={newShowcaseItem.item}
                chips={newShowcaseItem.chips}
                type={newShowcaseItem.type}
                desc={newShowcaseItem.desc}
                year={newShowcaseItem.year}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Showcase