import {Button, Select, TextInput} from "flowbite-react";
import {FaSearch} from "react-icons/fa";
import {ContainerFluid} from "../../../../layouts";
import {useNavigate} from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate()

    return (
        <ContainerFluid>
            <div className="hero min-h-[50vh]" style={{backgroundImage: `url("https://placeimg.com/1000/800/arch")`}}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center flex flex-col text-neutral-content">
                    <h1 className={"text-2xl select-none sm:text-3xl md:text-4xl w-[80vw] sm:w-[60vw] lg:w-full lg:text-5xl font-bold uppercase l"}>One
                        place to find your new place</h1>
                    <div
                        className="flex mt-2 flex-wrap md:flex-row lg:mt-16 items-center rounded-md gap-5 p-5 bg-gray-900">
                        <TextInput
                            className={"w-full md:w-96 "}
                            id="email3"
                            type="text"
                            placeholder="Type the Area or Institute"/>

                        <Select
                            className={"w-full md:w-28 lg:w-56"}
                            id="gender">
                            <option disabled>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </Select>

                        <Select
                            className={"w-full md:w-28 lg:w-56"}
                            id="type">
                            <option disabled>Type</option>
                            <option>Annex</option>
                            <option>Rooms</option>
                            <option>Hotels</option>
                        </Select>

                        <Button onClick={() => navigate("/search")} className={"!bg-green-400 py-[5px] w-full md:w-16 xl:w-44"}>
                            <FaSearch/>
                        </Button>
                    </div>
                </div>
            </div>
        </ContainerFluid>
    )
}

export default Hero;