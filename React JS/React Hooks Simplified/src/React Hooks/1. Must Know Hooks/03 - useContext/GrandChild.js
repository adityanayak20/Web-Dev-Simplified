import React, {useState, useContext}  from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function GrandChild() {
  const darkTheme = useTheme()
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem'
  }


  const toggleTheme = useThemeUpdate()

  return (
    <>
    <button onClick={toggleTheme}>Toggle Theme</button>
    <div style= {themeStyles}>Theme</div>
    </>
    
  )
} 
