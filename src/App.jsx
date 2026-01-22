import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Loading from './components/loading';
import Landing from './components/landing';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const [showLoading, setShowLoading] = useState(true);
  const loadingRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setShowLoading(false)
    });

    tl.to(loadingRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      ease: 'power2.inOut'
    });
  }, []);

  return (
    <div className='overflow-hidden'>
      {showLoading && (
        <div ref={loadingRef} className='fixed inset-0 z-50 bg-[#E3E3E3]'>
          <Loading />
        </div>
      )}

      <div className='bg-[#D8E2C6]'>
        <Landing />
      </div>
    </div>
  )
}

export default App