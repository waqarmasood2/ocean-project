import React,{useEffect , useRef, useState } from "react";
import "../index.css"; //make sure css is imported

function Depth1(){
    const sectionRef = useRef(null);
    const [visible ,setvisible] =useState(false);

    useEffect(()=>{
        const observer =new IntersectionObserver(
            ([entry]) => setvisible(entry.isIntersecting),
            {threshold: 0.3 }
        );
        if (sectionRef.current){
            observer.observe(sectionRef.current);
        }

        return()=>{
            if (sectionRef.current){
                observer.unobserve(sectionRef.current);
            }
        };
    },[]);

    return(
        <section
         ref ={sectionRef}
         className ={`depth1-content ${visible ? 'visible': ''}`}>
              <div className="depth1-content">
              <h2>🐠 Welcome to Depth 1</h2>
              <p>You're now entering the coral reef zone. Look around!</p>
              <div className="fish"></div>{/* fish element */}
      </div>
        </section>
    );
}

    export default Depth1;
        