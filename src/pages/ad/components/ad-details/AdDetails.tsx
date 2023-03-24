import {FaShare, FaStar} from "react-icons/fa";
import {SiFacebook, SiTwitter, SiViber, SiWhatsapp} from "react-icons/si";

const AdDetails = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl select-none font-semibold">
                    LOWA Uncle's Villa
                </h1>

                <div className="flex items-center gap-1 cursor-pointer">
                    <FaShare/>
                    <p className={"select-none"}>Share</p>
                </div>
            </div>

            <div className="pb-4 border-b-2 mt-5">
                <div className="flex items-center select-none">
                    <FaStar className={"text-yellow-300"}/>
                    <p>4.5</p>
                </div>
                <p className={"mt-1"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem.
                </p>
            </div>

            <div className={"mt-5"}>
                <h1 className="text-3xl font-semibold select-none">
                    Rs. 8750.00 per month
                </h1>
            </div>

            <div className="flex items-center gap-4 my-5 text-2xl cursor-pointer">
                <SiWhatsapp className={"text-green-400"}/>
                <SiFacebook className={"text-blue-600"}/>
                <SiViber className={"text-purple-600"}/>
                <SiTwitter className={"text-blue-500"}/>
            </div>

            <button className="d-btn">PURCHASE</button>
        </div>
    )
}

export default AdDetails;