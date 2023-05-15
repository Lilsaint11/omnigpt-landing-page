const Middle = () => {
    return ( 
        <div className="flex gap-[200px] max-md:gap-[119px] mb-52  max-md:flex-col-reverse max-md:items-center">
           <div className="left relative w-[321px]">
                <img src="../../public/apple-iphone-14-pro-max-2022-medium 1.png" alt="" className="absolute -top-4 -left-[3px] z-30 w-[321px] h-[655px]"/>
                <img src="../../public/Rectangle 13053.png" alt="" className="relative z-20 w-[315px] h-[622px]" />

                <span className="bg-white h-[119px] w-[119px] rounded-full flex items-center justify-center absolute top-[57px] -left-20 z-40">
                    <img src="../../public/Facebook_Messenger_logo_2020 1.png" alt="" className=" "/>
                </span>
                <span className="bg-white h-[147px] w-[147px] rounded-full flex items-center justify-center  absolute bottom-[57px] left-56 z-40">
                    <img src="../../public/WhatsApp 1.png" alt="" className=""/>
                </span>
                <span className="bg-[#FEEA00] h-[107px] w-[107px] rounded-tl-[58px] rounded-tr-[58px] rounded-bl-0 rounded-br-[58px] absolute top-[145px] left-[245px]  max-md:left-[270px] z-10"></span>
                <span className="bg-[#1FC77E] h-[107px] w-[107px] rounded-tl-[58px] rounded-tr-[58px] rounded-bl-0 rounded-br-[58px] absolute bottom-[144px] -left-16 z-10"></span>
            </div>
            <div className="right">
                <h1 className="w-[506px] h-[189px] leading-[63px] font-medium text-6xl">The <span className="text-[#1FC77E]">All-in-One</span> Solution for Conversational AI</h1>
                <div className="bg-white w-[436px] h-[123px]  max-md:w-full  max-md:h-[164px] rounded-[10px] mt-7 flex items-center justify-center  max-md:justify-between gap-9 max-md:gap-0 mb-6 max-md:mb-8 max-md:px-[33px]">
                    <div>
                        <h4 className="font-sans text-black font-medium text-base max-md:text-xl mb-2">Seamless Collaboration</h4>
                        <p className="font-sans text-sm max-md:text-lg text-black font-normal leading-5 w-[277px] max-md:w-[425px]">You can easily collaborate with friends and colleagues on projects, whether it's for work<br/> or personal use.</p>
                    </div>
                 
                    <span className=" bg-[#1FC77E] w-[71px] h-[71px] max-md:w-[95px] max-md:h-[95px] rounded-[9px] flex items-center justify-center">
                        <img src="../../public/collaboration 1.png" alt="" />
                    </span>
                    
                </div>
                <div className="flex flex-col gap-4">
                    <span className="grey font-sans font-medium text-base max-md:text-xl w-[436px] h-[55px] max-md:w-full rounded-[10px] px-7 flex items-center">Multi-Channel Support</span>
                    <span className="grey font-sans font-medium text-base max-md:text-xl w-[436px] h-[55px] max-md:w-full rounded-[10px] px-7 flex items-center">AI-Powered Assistance</span>
                    <span className="grey font-sans font-medium text-base max-md:text-xl w-[436px] h-[55px] max-md:w-full rounded-[10px] px-7 flex items-center">Easy to Use</span>
                </div>
            </div>
        </div>
     );
}
 
export default Middle;