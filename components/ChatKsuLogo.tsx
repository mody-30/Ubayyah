// components/ChatKsuLogo.tsx
"use client";

import React from "react";

export default function ChatKsuLogo() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-[#E3E0D2] p-4 rounded-lg">
      <svg
        width="200"
        height="100"
        viewBox="0 0 600 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Brain Icon */}
        <g transform="translate(50, 50) scale(2)">
          <path
            d="M24 0C10.75 0 0 10.75 0 24V76C0 89.25 10.75 100 24 100H76C89.25 100 100 89.25 100 76V24C100 10.75 89.25 0 76 0H24ZM70 20C72.2091 20 74 21.7909 74 24C74 26.2091 72.2091 28 70 28C67.7909 28 66 26.2091 66 24C66 21.7909 67.7909 20 70 20ZM30 20C32.2091 20 34 21.7909 34 24C34 26.2091 32.2091 28 30 28C27.7909 28 26 26.2091 26 24C26 21.7909 27.7909 20 30 20ZM24 46C24 43.7909 25.7909 42 28 42H72C74.2091 42 76 43.7909 76 46V54C76 56.2091 74.2091 58 72 58H28C25.7909 58 24 56.2091 24 54V46Z"
            fill="white"
          />
        </g>

        {/* ChatKSU Text */}
        <text
          x="220"
          y="160"
          fontFamily="Segoe UI, sans-serif"
          fontSize="80"
          fill="#0084BD"
        >
          ChatKSU
        </text>
      </svg>
    </div>
  );
}
