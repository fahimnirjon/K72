import React, { useRef } from "react";

const Agency = () => {

  const imgDivRef = useRef(null);

  return (
    <div>
      <div className="section1">
        <div ref={imgDivRef} className="absolute overflow-hidden h-[20vw] w-[15vw] rounded-3xl top-90 left-[30vw]">
          <img
            className="h-full w-full object-cover"
            src="/public/images/Carl_480x640.jpg"
            alt=""
          />
        </div>

        <div className="relative font-[font2]">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              SEVEN7Y <br />
              TWO
            </h1>
            <div className="pl-[40%]">
              <p className="text-6xl">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                We’re inquisitive and open-minded, and we make sure creativity
                crowds out ego from every corner. A brand is a living thing,
                with values, a personality and a story. If we ignore that, we
                can achieve short-term success, but not influence that goes the
                distance. We bring that perspective to every brand story we help
                tell.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agency;
