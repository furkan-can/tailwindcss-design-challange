import Icon from '../assets/engIcon.svg'
import AppStore from '../assets/appstore.svg'
import GooglePlay from '../assets/googleplay.svg'
import Youtube from '../assets/youtube.svg'
import Facebook from '../assets/facebook.svg'
import Twitter from '../assets/twitter.svg'
import Instagram from '../assets/instagram.svg'
import Linkedin from '../assets/linkedin.svg'
function Footer() {
    return (
        <div className='bg-slate-900 w-full h-[464px]  iphone:w-screen iphone:h-full  items-center justify-center flex'>
            <div className='w-[1440px] h-full iphone:w-full'>
                <div className=' relative flex flex-row gap-24 iphone:gap-16 py-12 border-y iphone:flex-col iphone:text-center items-start justify-start  border-slate-700 text-slate-200'>
                    <div className='gap-2 flex justify-center flex-col w-72 iphone:w-full h-[282px] border-white'>
                        <p className='h-[42px] font-medium'>Product</p>
                        <a href='!#' className='h-[46px] py-3'>Pricing</a>
                        <a href='!#' className='h-[46px] py-3'>Overview</a>
                        <a href='!#' className='h-[46px] py-3'>Browse</a>
                        <a href='!#' className='h-[46px] py-3'>Accessibility</a>
                        <a href='!#' className='h-[46px] py-3'>Five</a>
                    </div>
                    <div className='gap-2 flex flex-col justify-center w-72 iphone:w-full h-[282px]'>
                        <p className='h-[42px] font-medium'>Solutions</p>
                        <a href='!#' className='h-[46px] py-3'>Brainstorming</a>
                        <a href='!#' className='h-[46px] py-3'>Ideation</a>
                        <a href='!#' className='h-[46px] py-3'>Wireframing</a>
                        <a href='!#' className='h-[46px] py-3'>Research</a>
                        <a href='!#' className='h-[46px] py-3'>Design</a>
                    </div>
                    <div className='gap-2 flex flex-col justify-center  w-72 iphone:w-full h-[282px]'>
                        <p className='h-[42px] font-medium py-3'>Support</p>
                        <a href='!#' className='h-[46px] py-3'>Contact Us</a>
                        <a href='!#' className='h-[46px] py-3'>Developers</a>
                        <a href='!#' className='h-[46px] py-3'>Documentation</a>
                        <a href='!#' className='h-[46px] py-3'>Integrations</a>
                        <a href='!#' className='h-[46px] py-3'>Reports</a>
                    </div>
                    <div className='gap-2 flex flex-col iphone:items-center  w-72 iphone:w-full h-[282px]'>
                        <p className='h-[42px] font-medium '>Get the App</p>
                        <a href='!#' className='h-[46px] '><img src={AppStore} alt="" /></a>
                        <a href='!#' className='h-[46px] '><img src={GooglePlay} alt="" /></a>
                        <p className='h-[78px]  pt-12 py-3'>Follow Us</p>
                        <div className='flex items-center h-6 gap-4 py-3'>
                            <a href="!#"><img src={Youtube} alt="" /></a>
                            <a href="!#"><img src={Facebook} alt="" /></a>
                            <a href="!#"><img src={Twitter} alt="" /></a>
                            <a href="!#"><img src={Instagram} alt="" /></a>
                            <a href="!#"><img src={Linkedin} alt="" /></a>
                        </div>
                    </div>

                </div>
                <div className='flex h-20 items-center iphone:h-full iphone:gap-6 justify-between iphone:flex-col iphone:py-12'>
                    <div className=''>
                        <p className='text-white'>Collers @ 2023. All rights reserved.</p>
                    </div>

                    <div className='flex text-white gap-8'>
                        <a href="!#">Terms</a>
                        <a href="!#">Privacy</a>
                        <a href="!#"> Contact</a>
                        <a href="!#" className='flex gap-2'><img src={Icon} alt="" /> EN</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer