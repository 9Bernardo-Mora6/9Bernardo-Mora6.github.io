import React from "react"


const Svg = (props) => (
    
        <svg
            style={{
                transform: "rotate(360deg)",
                transition: ".3s",
            }}
            viewBox="0 0 800 180"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <defs>
                <linearGradient id="a" x1={0} x2={0} y1={1} y2={0}>
                    <stop stopColor="rgba(243, 175.812, 62, 1)" offset="0%" />
                    <stop stopColor="rgba(255, 230.548, 11, 0.26)" offset="100%" />
                </linearGradient>
            </defs>
            <path
                style={{
                    transform: "translate(0,0)",
                    opacity: 0.8,
                    
                }}
                fill="url(#a)"
                d="m0 162 10-6c10-6 30-18 50-39s40-51 60-69 40-24 60-30 40-12 60 9 40 69 60 93 40 24 60 3 40-63 60-84 40-21 60-21 40 0 60 15 40 45 60 45 40-30 60-30 40 30 60 36 40-12 60-27 40-27 60-15 40 48 60 51 40-27 60-45 40-24 60-24 40 6 60 30 40 66 60 63 40-51 60-72 40-15 60 0 40 39 60 48 40 3 60 9 40 24 50 33l10 9v36H0Z"
            />
            <defs>
                <linearGradient id="b" x1={0} x2={0} y1={1} y2={0}>
                    <stop stopColor="rgba(225.722, 176.951, 161.287, 1)" offset="0%" />
                    <stop stopColor="rgba(255, 179, 11, 1)" offset="100%" />
                </linearGradient>
            </defs>
            <path
                style={{
                    transform: "translate(0,50px)",
                    opacity: 0.35,

                }}
                fill="url(#b)"
                d="m0 72 10-6c10-6 30-18 50-12s40 30 60 24 40-42 60-48 40 18 60 45 40 57 60 69 40 6 60-21 40-75 60-96 40-15 60 12 40 75 60 87 40-12 60-24 40-12 60-6 40 18 60 15 40-21 60-24 40 9 60 6 40-21 60-30 40-9 60-12 40-9 60-3 40 24 60 42 40 36 60 30 40-36 60-36 40 30 60 45 40 15 60 0 40-45 60-42 40 39 50 57l10 18v18H0Z"
            />
        </svg>
    
)

export default Svg;


