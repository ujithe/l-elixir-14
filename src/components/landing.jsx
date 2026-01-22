import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import Navbar from './navbar';
import PromoBadge from './PromoBadge';
import greenBottle from '../assests/Green bottle.png';

const Landing = () => {
    const navbarRef = useRef(null);

    useEffect(() => {
        if (navbarRef.current) {
            gsap.fromTo(navbarRef.current,
                {
                    y: -200,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.5,
                    ease: 'power3.out'
                }
            );
        }
    }, []);

    const topicRef = useRef(null);

    useEffect(() => {
        if (topicRef.current) {
            gsap.fromTo(topicRef.current,
                {
                    y: -200,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.7,
                    ease: 'power3.out'
                }
            );
        }
    }, []);

    const paraRef = useRef(null);

    useEffect(() => {
        if (paraRef.current) {
            gsap.fromTo(paraRef.current,
                {
                    y: 800,
                    opacity: 0
                },
                {
                    y: 600,
                    opacity: 1,
                    duration: 1,
                    delay: 0.5,
                    ease: 'power3.out'
                }
            );
        }
    }, []);

    const promotionRef = useRef(null);

    useEffect(() => {
        if (promotionRef.current) {
            gsap.fromTo(promotionRef.current,
                {
                    x: 400,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.7,
                    ease: 'power3.out'
                }
            );
        }
    }, []);

    const circleRef = useRef(null);

    useEffect(() => {
        if (circleRef.current) {
            gsap.fromTo(circleRef.current,
                {
                    y: 400,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.7,
                    ease: 'power3.out'
                }
            );
        }
    }, []);

    return (
        <div className='w-full h-screen'>
            <div ref={navbarRef}>
                <Navbar />
            </div>

            <div ref={topicRef} className='cormorant-garamond text-center text-[150px] italic font leading-[160px] absolute top-[260px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                The Science of <br /> Sopistication
            </div>

            <div ref={paraRef} className='px-[100px] tenor-sans-regular'>
                <p className='w-[280px] absolute bottom-[150px]'>L’Elixir 14 is a study in botanical precision. Five numbered formulas, cold-distilled in micro-batches to preserve the volatile essence of every root, petal, and seed.</p>
            </div>

            <div ref={promotionRef}>
                <PromoBadge text="25% OFF" />
            </div>

            <div ref={circleRef} className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2">
                <div className="absolute bottom-[-120px] left-1/2 transform -translate-x-1/2">
                    <div className="semicircle" />
                </div>

                <div className="absolute bottom-[-120px] left-1/2 transform -translate-x-1/2">
                    <div className="circlestroke">
                        <svg width="846" height="423" viewBox="0 0 846 423" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="423" cy="423" rx="415.5" ry="415.5" stroke="#125836" strokeWidth="0.5" fill="none" />
                        </svg>
                    </div>
                </div>

                <div className='w-[1000px] h-[1000px] absolute bottom-[-350px] left-1/2 transform -translate-x-1/2 rotate-[-15deg] flex items-center justify-center z-10'>
                    <img src={greenBottle} alt="Green Bottle" />
                </div>
            </div>



        </div>
    )
}

export default Landing