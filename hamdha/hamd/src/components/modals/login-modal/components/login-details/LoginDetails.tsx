import {FcApproval, FcDepartment, FcKey} from "react-icons/fc";
import React from "react";

const LoginDetails = () => {
    return (
        <div className={"hidden md:block border-r-2"}>
            <h1 className="font-semibold text-xl">
                Login to Bodima.lk
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur
            </p>

            <div className={"grid grid-cols-4 gap-4 mt-6"}>
                <div>
                    <FcApproval className={"text-[75px]"}/>
                </div>

                <div className={"col-span-3 mt-2"}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
                        quas vel sint commodi repudiandae</p>
                </div>

                <div>
                    <FcDepartment className={"text-[75px]"}/>
                </div>

                <div className={"col-span-3 mt-2"}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
                        quas vel sint commodi repudiandae</p>
                </div>

                <div>
                    <FcKey className={"text-[75px]"}/>
                </div>

                <div className={"col-span-3 mt-2"}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
                        quas vel sint commodi repudiandae</p>
                </div>
            </div>
        </div>
    )
}

export default LoginDetails;