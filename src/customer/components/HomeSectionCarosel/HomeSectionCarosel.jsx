import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectonCard from "../HomeSectionCard/HomeSectonCard";
import { mens_kurta } from "../../../Data/mens_kurta";
// import Button from '@mui/material/Button';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function HomeSectionCarosel({SectionName}) {
    const [activeIndex,setActiveIndex]=useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };
    
    const slidePrev = ()=>setActiveIndex(activeIndex-1);
    const slideNext=()=>setActiveIndex(activeIndex+1);

    const syncActiveIndex=({item})=>setActiveIndex(item)

    const items = mens_kurta.slice(0,10).map((item) => <HomeSectonCard product={item} />)
    return (
        <div className="border">
            <h2 className="text-2xl font-extrabold text-gray-800 py-5">{SectionName}</h2>
            <div className="relative p-5">
            <AliceCarousel
                items={items}
                infinite
                autoPlayInterval={1000}
                disableButtonsControls
                responsive={responsive}
                onSlideChanged={syncActiveIndex}
                activeIndex={activeIndex}
            />
            {/* <button variant="contained" className="z-50" sx={{position:'absolute', top:"8rem", right:"0rem", transform:"translateX(50%) rotate(90deg)"}} aria-label="next">
            <KeyboardArrowLeftIcon/>
            </button> */}
            </div>
        </div>  
    )
}

export default HomeSectionCarosel
