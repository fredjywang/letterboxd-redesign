import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

import '../styles/main.css';

const MovieScroll = ( { text, children }) => {
    let scrl = useRef(null);
    const [scrollStart, setScrollStart] = useState(true);
    const [scrollEnd, setScrollEnd] = useState(false);

    // const slide = (shift) => {
    //     scrl.current.scrollBy({
    //         left: shift,
    //         behavior: 'smooth'
    //     });

    //     scrl.current.scrollLeft += shift;
    //     setscrollX(scrollX + shift);
    //     if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
    //         setScrollEnd(true);
    //     } 
    //     else {
    //         setScrollEnd(false);
    //     }
    // };

    // const scrollCheck = () => {
    //     setscrollX(scrl.current.scrollLeft);
    //     if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
    //         setScrollEnd(true);
    //     } 
    //     else {
    //         setScrollEnd(false);
    //     }
    // };
    const slide = (shift) => {
        scrl.current.scrollBy({
          left: shift,
          behavior: 'smooth'
        });
    
        const newScrollLeft = scrl.current.scrollLeft + shift;
        setScrollEnd(newScrollLeft >= scrl.current.scrollWidth - scrl.current.offsetWidth);
        setScrollStart(newScrollLeft <= 1)
    };
    
    const scrollCheck = () => {
        const newScrollLeft = scrl.current.scrollLeft;
        setScrollStart(newScrollLeft <= 1);
        setScrollEnd(newScrollLeft >= scrl.current.scrollWidth - scrl.current.offsetWidth);
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-normal mr-4 text-white">{text}</h2>
                <button onClick={() => alert("No change from main website, so did not implement for purposes of this assignment.")}>
                    <h2 className="text-1xl font-normal mr-4 text-white">MORE</h2>
                </button>
            </div>
            <div className="border-b border-white flex-grow mt-2 mb-2"></div>
            <div className="flex items-center">
                <div 
                    onClick={() => slide(-100)} 
                    className={`left-arrow-left ${scrollStart || children.length <= 5 ? 'is-disabled-hide' : ''} p-2`}
                >
                    <MdArrowBackIos size="20px" />
                </div>
                <Container fluid className='my-3 item-slider-container'>
                    <div className='item-slider'>
                        <div ref={scrl} onScroll={scrollCheck} className="item-container">
                            {children}
                        </div>
                    
                    </div>
                </Container>
                <div 
                    onClick={() => slide(+100)}
                    className={`right-arrow-right ${scrollEnd || children.length <= 5 ? 'is-disabled-hide' : ''} p-2`}
                >
                    <MdArrowForwardIos size="20px" />
                </div>
            </div>
        </div>
    );
};

export default MovieScroll;
