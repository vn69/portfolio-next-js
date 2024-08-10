"use client";

import { useEffect } from "react";

export default function BgEffect() {
    useEffect(() => {
        const bgMove = document.getElementById("bg-move");
        document.addEventListener("mousemove", (e) => {
            bgMove.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        })
        
    }, []);

    return (
        <div id="bg-move" className="transition pointer-events-none fixed inset-0 z-30">
        </div>
    );
}