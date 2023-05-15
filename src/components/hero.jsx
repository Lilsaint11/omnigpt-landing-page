const Hero = () => {
    return ( 
       <div className="flex max-md:flex-col-reverse max-md:gap-y-6 mt-40 mb-44  max-md:mb-[65px]">
         <div className="left relative z-50">
           <h1 className="hero-main text-6xl font-semibold leading-tight pl-5  max-md:pl-0 max-md:text-[80px]">Bring the power<br/> of AI to your conversations</h1>
           <h5 className="text-3xl font-sans my-4">Work Faster, Smarter, and Better Together</h5>
           <p className="text-xl leading-9 font-normal font-sans mb-8 text-slate-300">Experience the power of AI language models with OmniGPT.<br/> Our chat platform provides seamless communication<br/> across multiple channels.</p>
           <div>
           <img src="../../public/oval.svg" alt="" className="absolute top-40 max-md:top-52  max-md:w-[530px] w-96 oval sm:-z-50 max-sm:-z-50"/>
           </div>
           <p className="text-xl font-medium font-sans mb-5">Try the OmniGPT for free. 15-day trial, no credit card required.</p>
           <button className="hero-button w-[183px] h-[48px]  max-md:w-[244px]  max-md:h-[64px] text-center text-base bg-[#1FC77E] rounded leading-4">Start your free trial</button>
         </div>
            <div className="right  flex flex-col gap-8">
                <div className="flex gap-7 max-md:gap-10">
                  <div className="relative w-[320px] h-[107px] max-md:w-[425px] max-md:h-[141px] bg-[#FEEA00] rounded-tl-[67px] rounded-bl-[67px] rounded-br-[67px]">
                    <img src="../../public/bg2.png" alt="" className="absolute -top-[90px] left-2 max-md:-top-[114px] max-md:w-[415px]"/>
                  </div>
                  <span className="bg-[#7F3DD2] h-[107px] w-[107px] max-md:w-[142px] max-md:h-[141px] rounded-full flex items-center justify-center">
                    <img src="../../public/left-arrow.svg" alt="" className="max-md:w-[70px]"/>
                  </span>
                </div>

                <div className="flex gap-7 max-md:hidden">
                  <span className="bg-[#1FC77E] h-[107px] w-[107px] rounded-full flex items-center justify-center">
                    <img src="../../public/right-arrow.svg" alt="" className=""/>
                  </span>
                  <div className="w-[333px] h-[107px] bg-white rounded-full relative">
                    <img src="../../public/bg3.png" alt="" className="absolute -top-8 right-12"/>
                  </div>
                </div>
                <div className="flex max-md:hidden">
                  <div className="relative w-[467px] h-[107px] bg-[#7F3DD2] rounded-tl-[53.5px] rounded-tr-[53.5px] rounded-bl-0 rounded-br-[53.5px] flex items-center justify-end">
                    <p className="font-sans font-normal text-lg  w-[253px] pr-6"><span className="font-medium">@OmniGPT</span> Can you give us<br/> an update on the latest project status?</p>
                  </div>
                </div>
                <div className="flex gap-7 max-md:hidden">
                  <div className="relative w-[320px] h-[107px] bg-[#1FC77E] rounded-tl-[67px] rounded-bl-[67px] rounded-br-[67px]">
                    <img src="../../public/bg1.png" alt="" className="absolute -top-[175px] -left-[10px]"/>
                  </div>
                  <span className="bg-[#FEEA00] h-[107px] w-[107px] rounded-tl-[58px] rounded-tr-[58px] rounded-bl-0 rounded-br-[58px]"></span>
                </div>
            </div>  
        </div>
     );
}
 
export default Hero;