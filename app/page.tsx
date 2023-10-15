'use client'
import React, { useEffect, useRef } from "react";

export default function Home() {
    const containerRef = useRef(null);

    useEffect(() => {
        const generateHexagons = () => {
            const container = containerRef.current;

            if (container) {
                const hexagonContainer = container.querySelector('.hexagonContainer');

                // Clear existing rows
                while (hexagonContainer.firstChild) {
                    hexagonContainer.removeChild(hexagonContainer.firstChild);
                }

                // Calculate required number of hexagons based on container dimensions
                const hexWidth = 102; // 100px width + 1px margin on each side
                const hexHeight = 57; // 50% of 110px height + 1px margin on top
                const rows = Math.ceil(window.innerHeight / hexHeight);
                const cols = Math.ceil(window.innerWidth / hexWidth);

                // Generate the hexagon rows
                for (let i = 0; i < rows; i++) {
                    let row = document.createElement('div');
                    row.className = "row";
                    for (let j = 0; j < cols; j++) {
                        let hex = document.createElement('div');
                        hex.className = "hexagon";
                        row.appendChild(hex);
                    }
                    hexagonContainer.appendChild(row);
                }
            }
        };

        const curser : any = document.querySelector(".curser");
        const mouseMoveHandler = (e: any) => {
            const X = e.clientX;
            const Y = e.clientY;
            if (curser) {
                curser.style.left = X + "px";
                curser.style.top = Y + "px";
            }
        };
        document.addEventListener('mousemove', mouseMoveHandler);

        const handleResize = () => {
            generateHexagons();
        };
        window.addEventListener('resize', handleResize);

        // Initially generate hexagons
        generateHexagons();

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

	return (
		<main>
			<div className="container" ref={containerRef}>
				<div className="curser"></div>

				<div className="hexagonContainer">
				</div>
				<div className="title logo" style={{ backgroundImage: "url('logo.png')" }}></div>
				<div className="title">Hex Realm</div>
			</div>
		</main>
	);
}
