const Footer = () => {
    return ( 
        <div className="relative bg-black h-[670px] w-full text-white main flex flex-col justify-center pb-[123px]">
            <div className="bg-[#05E283] w-[1049px] max-md:w-[610px] max-md:h-[454px] h-[328px] absolute -top-[90px] max-md:-top-[250px] left-[80px] flex max-md:flex-col max-md:text-center items-center justify-center gap-[116px] max-md:gap-[16px]  rounded-[10px] max-md:mb-16">
                <h1 className="w-[606px] max-md:w-[432px] max-md:h-[255px] font-medium text-5xl landing-[51px]"><span className="text-black">Join the OmniGPT community</span> and transform the way you collaborate!</h1>
                <button className="footer-btn font-medium font-base w-[178px] max-md:w-[257px] max-md:h-[71px] h-[48px] bg-black text-white flex items-center justify-center rounded-[5px]">Get Started Now</button>
            </div>
            <div className="flex flex-wrap pt-[335px] justify-center max-md:justify-between max-md:px-[75px]">
                <div className="relative flex mr-[216.28px] max-md:w-full">
                    <h2 className="text-4xl font-semibold">omnigpt</h2>
                    <svg className="absolute left-[140px] top-2" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0229 2.22526V0.23877H2.03104V2.23142H9.57661L9.61357 2.31149C9.54581 2.36077 9.46882 2.40389 9.40722 2.4624C7.26367 4.60288 5.12011 6.74644 2.97655 8.89C2.45298 9.41357 1.93248 9.93406 1.41199 10.4576C1.36579 10.5038 1.32884 10.55 1.29188 10.5993L0.660522 11.2307L2.03104 12.6012L2.66857 11.9637C2.724 11.9236 2.77637 11.8774 2.82872 11.8251C5.48661 9.1641 8.14757 6.50313 10.8085 3.84524C10.8671 3.78673 10.9286 3.73129 11.0334 3.62966V11.1999H13.0291V3.15536C13.0291 2.8443 13.0291 2.53016 13.0291 2.2191L13.0229 2.22526Z" fill="#05E283"/>
                    </svg>
                </div>
                <div className="mr-[123px] max-md:mr-0 pt-4">
                    <ul className="font-sans font-medium text-base max-md:text-[22px] flex flex-col gap-y-9">
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                    </ul>
                </div>
                <div className="mr-[100px] max-md:mr-0 pt-4">
                    <ul className="font-sans text-base max-md:text-[22px] flex flex-col gap-y-9">
                        <li className="font-semibold text-[#05E283]">LOREM IPSUM DOLAR</li>
                        <li className="font-medium">Lorem Ipsum</li>
                        <li className="font-medium">Lorem Ipsum</li>
                        <li className="font-medium">Lorem Ipsum</li>
                    </ul>
                </div>
                <div className="font-sans font-base pt-4 flex flex-col gap-7 max-md:hidden">
                    <p className="font-medium">Join our newsletter</p>
                    <span className="relative flex border-[1px] border-white rounded-[10px] px-5">
                        <input type="email" placeholder="Your Email" className="font-normal w-[205px] h-[49px] bg-transparent z-10 outline-none" />
                        <img src="../../public/send.svg" alt="" className="ml-2" />
                    </span>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;