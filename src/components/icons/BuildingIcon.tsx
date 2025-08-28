import React from "react";

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.851074 8.62645V6.50009H19.2151V8.62645H0.851074Z"
        stroke="white"
        strokeWidth="1.15983"
      />
      <path
        d="M3.36438 1.47418V6.50012H6.45726V1.47418H3.36438Z"
        stroke="white"
        strokeWidth="1.15983"
      />
      <path
        d="M3.36438 10.3664V21.1915H6.45726V10.3664"
        stroke="white"
        strokeWidth="1.15983"
      />
      <path
        d="M0.271179 21.1913H9.16322"
        stroke="white"
        strokeWidth="1.15983"
      />
      <path d="M17.475 8.6265V12.2993" stroke="white" strokeWidth="1.15983" />
      <circle
        cx="17.6687"
        cy="16.552"
        r="2.31966"
        stroke="white"
        strokeWidth="0.773221"
      />
      <path
        opacity="0.7"
        d="M0.851074 6.50012L3.36404 1.47418"
        stroke="white"
        strokeWidth="0.579916"
      />
      <path
        opacity="0.7"
        d="M6.45679 1.47418L19.2149 6.50012"
        stroke="white"
        strokeWidth="0.579916"
      />
    </svg>
  );
}

export default BuildingIcon;
