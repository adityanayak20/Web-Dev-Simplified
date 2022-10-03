import React from "react";
import Child from './Child'
import {ThemeProvider} from './ThemeContext'

export default function Parent() {
  return (
    <ThemeProvider>
      <Child />
    </ThemeProvider>
  ) 
} 
