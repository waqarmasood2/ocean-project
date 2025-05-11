import React,{ useEffect, useRef ,useState } from "react";
import "../index.css";

function Depth2(){
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=> setVisible(entry.isIntersecting),
            { threshold: 0.3 }
        );
        if (sectionRef.current){
            observer.observe(sectionRef.current);
        }

        return ()=>{
            if (sectionRef.current){
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className ={`depth2-section ${visible ? "visible " : ""}`}>
            <div className="depth2-content">
                <h2>🪼 Welcome to Depth 2</h2>
                <p>It's getting darker... mysterious jellyfish drift past you.</p>
            </div>
        </section>
    );
}

export default Depth2;