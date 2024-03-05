import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import ImageSlider from './component/ImageSlider';


const root = document.getElementById("root")

createRoot(root).render(
  <>
  <ImageSlider />
  </>
);
