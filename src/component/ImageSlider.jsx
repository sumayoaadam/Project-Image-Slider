import React, { useState } from "react"
function ImageSlider(){
    const [index,setIndex]= useState(0)

    //function HandleNext
    const HandleNext =()=>{
        if(index <image.length -1)
        setIndex(index+1)
    };

    //function HandlePrev
    const HandlePrev =()=>{
        if (index>0){
        setIndex(index-1)}
    };

    const image=["https://img.freepik.com/free-photo/dubai-marina_158595-2000.jpg?size=626&ext=jpg&ga=GA1.2.1200924309.1704545624&semt=ais",
        "https://img.freepik.com/free-photo/dubai-skyline-downtown-skyscrapers-sunset-modern-architecture-concept-with-highrise-buildings-world-famous-metropolis-united-arab-emirates_231208-7630.jpg?size=626&ext=jpg&ga=GA1.1.1200924309.1704545624&semt=ais",
        "https://img.freepik.com/free-photo/new-york-city-skyline_649448-1654.jpg?size=626&ext=jpg&ga=GA1.2.1200924309.1704545624&semt=sph",
        "https://img.freepik.com/free-photo/new-york-city_649448-1679.jpg?size=626&ext=jpg&ga=GA1.2.1200924309.1704545624&semt=sph",
        "https://img.freepik.com/free-photo/complex-aerial-view-city_23-2148975282.jpg?size=626&ext=jpg&ga=GA1.2.1200924309.1704545624&semt=sph"
    ]
    return(
        <div className="text-center mt-[99px]">
            <img className="w-[800px] h-[350px] ml-[300px]" src={image[index]} />
            <button onClick={HandleNext} className="bg-orange-500 py-2 px-4 m-2 rounded-sm text-3xl">Next</button>
            <button onClick={HandlePrev} className="bg-orange-500 py-2 px-4 m-2 rounded-sm text-3xl"> Prev</button>

        </div>
    )
    
}
export default ImageSlider