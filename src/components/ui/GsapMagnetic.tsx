import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

interface Props {
    children: React.ReactElement;
}

export default function index({children}: Props) {
    const magnetic = useRef<HTMLDivElement>(null);

    useEffect( () => {
        const xTo = gsap.quickTo(magnetic.current, "x", {duration: 1, ease: "elastic.out(1, 0.3)"})
        const yTo = gsap.quickTo(magnetic.current, "y", {duration: 1, ease: "elastic.out(1, 0.3)"})

        if (magnetic.current) {
            magnetic.current.addEventListener("mousemove", (e) => {
                const { clientX, clientY } = e;
                if (magnetic.current) {
                    const {height, width, left, top} = magnetic.current.getBoundingClientRect();
                    const x = clientX - (left + width/2)
                    const y = clientY - (top + height/2)
                    xTo(x);
                    yTo(y)
                }
            })
            magnetic.current.addEventListener("mouseleave", (e) => {
                xTo(0);
                yTo(0)
            })
        }
    }, [])

    return (
        React.cloneElement(children, {ref:magnetic})
    )
}