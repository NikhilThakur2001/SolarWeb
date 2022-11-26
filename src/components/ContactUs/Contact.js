import { BsWhatsapp, BsTelephoneForwardFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import classes from "./Contact.module.css";


const Contact= () => {
    return(
        <div className=" flex flex-col justify-center flex-wrap bg-[#002244]">
            <div className={` flex justify-center pt-16 pb-10 text-5xl	text-white `}><span class='animate__animated animate__zoomIn'>Contact With Us</span></div>
            <div className="flex flex-row justify-center flex-wrap gap-10 item-center pt-5 pb-10">
                <button type="button" class={`${classes.contactButtons} gap-6 text-white bg-gradient-to-br w-full md:w-1/4 rounded-xl from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>
                    <BsTelephoneForwardFill alt="WA-icon" color='white' fill='white' size='27px'/>
                    +91-9928290233
                </button>
                <button type="button" class={`${classes.contactButtons} gap-6 text-white bg-gradient-to-br w-full md:w-1/4 rounded-xl from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>
                    <BsWhatsapp alt="call-icon" color='white' fill='white' size='27px' />
                    Connect on WhatsApp
                </button>
                <button type="button" class={`${classes.contactButtons} gap-6 text-white bg-gradient-to-br w-full md:w-1/4 rounded-xl from-red-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 `}>
                    <SiGmail alt="Gmail-icon" color='white' fill='white' size='27px'/>
                    nareshsh2000@yahoo.com
                </button>
            </div>
            <div className="flex items-center justify-center text-blue-200 p-4">Galaxy Solar India® Copyright 2022</div>
        </div>
        
    )
}

export default Contact;