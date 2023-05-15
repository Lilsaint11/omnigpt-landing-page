const Header = () => {
    return ( 
        <div className="flex justify-between">
            <div className="flex relative">
                <h2 className="text-4xl font-bold">omnigpt</h2>
                <svg className="absolute -right-4 top-2" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0229 2.22526V0.23877H2.03104V2.23142H9.57661L9.61357 2.31149C9.54581 2.36077 9.46882 2.40389 9.40722 2.4624C7.26367 4.60288 5.12011 6.74644 2.97655 8.89C2.45298 9.41357 1.93248 9.93406 1.41199 10.4576C1.36579 10.5038 1.32884 10.55 1.29188 10.5993L0.660522 11.2307L2.03104 12.6012L2.66857 11.9637C2.724 11.9236 2.77637 11.8774 2.82872 11.8251C5.48661 9.1641 8.14757 6.50313 10.8085 3.84524C10.8671 3.78673 10.9286 3.73129 11.0334 3.62966V11.1999H13.0291V3.15536C13.0291 2.8443 13.0291 2.53016 13.0291 2.2191L13.0229 2.22526Z" fill="#05E283"/>
                </svg>
            </div>
            <div>
                <ul className="nav flex gap-16 text-[18px] max-md:hidden">
                    <li>Blog</li>
                    <li>Contact Us</li>
                    <li>Sign In</li>
                </ul>
                <img src="/burgermenu.svg" alt="" className="md:hidden" />
            </div>
         </div>
     );
}
 
export default Header;