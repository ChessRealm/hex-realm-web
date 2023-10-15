'use client';
import React, { useEffect, useRef } from "react";

export default function Home() {
    const containerRef = useRef(null);

    useEffect(() => {
        const generateHexagons = () => {
            const container : any = containerRef.current;

            if (container) {
                const hexagonContainer = container.querySelector('.hexagonContainer');

                // Clear existing rows
                while (hexagonContainer.firstChild) {
                    hexagonContainer.removeChild(hexagonContainer.firstChild);
                }

                // Calculate required number of hexagons based on container dimensions
                const hexWidth = 102; 
                const hexHeight = 57; 
                const rows = Math.ceil(window.innerHeight / hexHeight);
                const cols = Math.ceil(window.innerWidth / hexWidth);

                // Generate the hexagon rows
                for (let i = 0; i < rows; i++) {
                    let row = document.createElement('div');
                    row.className = "row";
                    for (let j = 0; j < cols+1; j++) {
                        let hex = document.createElement('div');
                        hex.className = "hexagon";
                        row.appendChild(hex);
                    }
                    hexagonContainer.appendChild(row);
                }
            }
        };

        const curser : any = document.querySelector(".curser");
        let angle = 0;
        const animateCursor = () => {
            const X = window.innerWidth / 2 + (window.innerWidth / 2 - 100) * Math.cos(angle);
            const Y = window.innerHeight / 2 + (window.innerHeight / 2 - 100) * Math.sin(angle);
            if (curser) {
                curser.style.left = X + "px";
                curser.style.top = Y + "px";
            }
            angle += 0.005;
            requestAnimationFrame(animateCursor);
        };

        const handleResize = () => {
            generateHexagons();
        };
        window.addEventListener('resize', handleResize);

        // Initially generate hexagons
        generateHexagons();

        // Start cursor animation
        animateCursor();

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <main>
            <div className="container" ref={containerRef}>
                <div className="hexagonContainer"></div>
                <div className="curser"></div>
                <div className="logo" style={{ backgroundImage: "url('og.png')" }}></div>
            </div>
        </main>
    );
}
