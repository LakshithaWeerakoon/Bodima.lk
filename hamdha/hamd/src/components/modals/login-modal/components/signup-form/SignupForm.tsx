import {Label, TextInput} from "flowbite-react";
import React from "react";

interface ISignupFormProps {
    changeToggle: () => void
}

const SignupForm = ({
                        changeToggle = () => {
                        }
                    }: ISignupFormProps) => {
    return (
        <div>
            <form className="flex flex-col gap-4 px-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="fname"
                            value="First Name"
                        />
                    </div>
                    <TextInput
                        id="fname"
                        type="text"
                        placeholder=""
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="lname"
                            value="Last Name"
                        />
                    </div>
                    <TextInput
                        id="lname"
                        type="text"
                        placeholder=""
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Email Address"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="sample@gmail.com"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password2"
                            value="Confirm Password"
                        />
                    </div>
                    <TextInput
                        id="password2"
                        type="password"
                        required={true}
                    />
                </div>
                <div className="flex items-center w-fulls justify-between">
                    <p onClick={changeToggle} className={"text-center cursor-pointer text-blue-600"}>I have an
                        accounts</p>
                    <button className={"d-btn w-fit bg-gray-500 text-white hover:bg-gray-800"}
                            type="button">
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignupForm;