import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import StarSvg from '../assests/Star.svg'

const PromoBadge = ({ text = "25% OFF", className = "" }) => {
    const starRef = useRef(null);

    useEffect(() => {
        if (starRef.current) {
            gsap.to(starRef.current, {
                rotation: 360,
                duration: 8,
                repeat: -1,
                ease: 'linear'
            });
        }
    }, []);

    return (
        <div className={`relative inline-block ${className} w-[197px] h-[197px] absolute left-[1200px] top-[100px]`}>
            <img ref={starRef} src={StarSvg} alt="Star"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="cormorant-garamond text-black font-bold text-[50px] leading-tight text-center" style={{ fontStyle: 'italic' }}>
                    {text.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                    ))}
                </span>
            </div>
        </div>
    )
}

export default PromoBadge
