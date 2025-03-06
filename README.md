# react-function-components
A collection of reusable React functional components to help you build modern and scalable applications using React hooks and best practices.

## Features

- Simple and reusable function components
- All components use **React Hooks** (useState, useEffect, etc.)
- Focus on minimal and clean code for easy integration
- Includes components like buttons, modals, forms, and more

// src/components/Button/Button.js
import React from 'react';

const Button = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {text}
    </button>
  );
};

export default Button;
