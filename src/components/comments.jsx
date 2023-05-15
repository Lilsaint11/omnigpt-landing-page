import Rating from '@mui/material/Rating';
import { useState } from 'react';

const Comments = () => {
    const [value, setValue] = useState(5);
    return ( 
        <div className="flex flex-col gap-10 mb-[262px] max-md:mb-[387px]">
            <div className="flex gap-28 max-md:gap-0 relative">
                <h1 className="font-medium text-6xl w-[592px] max-md:w-full">See What People<br/> Are <span className="text-[#1FC77E] landing-[63px]"> Saying About Us</span></h1>
                <span className="relative">
                    <img src="../../public/small-star.svg" alt="" className="w-20 max-md:absolute  max-md:-top-5  max-md:-left-20"/>
                    <img src="../../public/big-star.svg" alt="" className="md:absolute  left-20 max-md:left-0 -bottom-[68px] max-md:bottom-0 w-20  max-md:pt-10"/>
                </span>
            </div>
            <div>
                <div className="flex gap-11">
                    <div className="flex flex-col w-[503px] h-[395px] bg-[#494651] items-center justify-center rounded-[10px]">
                        <span className="mx-9">
                            <Rating name="read-only" value={value} readOnly className='mb-4'/>
                            <p className="w-[340px] font-sans font-medium text-base leading-6 mb-4">OmniGPT has completely<br/> transformed the way my team works together.</p>
                            <p className="font-sans font-normal text-[13px] leading-5 w-[431px] text-slate-200 mb-5">“With the ability to seamlessly communicate across<br/> multiple channels, we are able to collaborate in real-time and make<br/> decisions faster than ever. Plus, the AI-powered chatbot saves us time<br/> and resources by handling routine tasks and inquiries. I would highly<br/> recommend OmniGPT to any organization looking to improve their<br/> productivity and efficiency”</p>
                            <span className="flex w-full gap-4 items-center">
                                <img src="../../public/Ellipse 98.png" alt="" />
                                <p className="font-sans font-medium text-[13px]">Luke John</p>
                            </span>
                        </span>
                    </div>
                    <div className="flex flex-col w-[503px] h-[395px] bg-[#494651] items-center  justify-center rounded-[10px]">
                        <span className="mx-9">
                            <Rating name="read-only" value={value} readOnly className='mb-4'/>
                            <p className="w-[340px] font-sans font-medium text-base leading-6 mb-4">OmniGPT has completely<br/> transformed the way my team works together.</p>
                            <p className="font-sans font-normal text-[13px] leading-5 w-[431px] text-slate-200 mb-5">“I was skeptical about using an AI-powered chat tool, but Omnigpt has completely changed my mind. It's like having a virtual assistant that's always available to manage my conversations and keep me organized. I don't know how I managed without it!”</p>
                            <span className="flex w-full gap-4 items-center">
                                <img src="../../public/Ellipse 99.png" alt="" />
                                <p className="font-sans font-medium text-[13px]">Luke John</p>
                            </span>
                        </span>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-8 gap-x-3'>
                    <span className='relative w-[18px] h-[18px] rounded-full bg-white'></span>
                    <span className='relative w-[18px] h-[18px] rounded-full bg-white grey'></span>
                    <span className='relative w-[18px] h-[18px] rounded-full bg-white grey'></span>
                    <span className='relative w-[18px] h-[18px] rounded-full bg-white grey'></span>
                </div>
            </div>
        </div>
     );
}
 
export default Comments;