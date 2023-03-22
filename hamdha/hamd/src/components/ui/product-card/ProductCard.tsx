import {FaStar} from "react-icons/fa";
import ProductImage from "./components/ProductImage";
import {useNavigate} from "react-router-dom";

const ProductCard = () => {
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(`/ads/ad-title`)
    }
    return (
        <div
            className={"flex flex-col shadow rounded-b cursor-pointer hover:scale-[1.005] transition-all duration-400"}>
            <ProductImage/>
            <div className={"px-5 pt-5 bg-white"}>
                <div className={"flex justify-between border-b-2 pb-3"}>
                    <div>
                        <h1 className={"font-bold"}>Uncle's place</h1>
                        <h1 className={"select-no"}>Piliyandala</h1>
                    </div>

                    <div className={"flex flex-col items-center"}>
                        <FaStar/>
                        <h1>4.6</h1>
                    </div>
                </div>

                <div className={"py-2"}>
                    <div className={"flex justify-between"}>
                        <h1 className={"select-no"}>Starting at</h1>
                        <h1>Rs. 12500.00</h1>
                    </div>

                    <div className={"flex justify-between mt-2"}>
                        <div className={"flex flex-col items-center"}>
                            <h1 className={"text-sm select-no"}>Rooms</h1>
                            <div className={"flex items-center"}>
                                <FaStar/>
                                <h1>4</h1>
                            </div>
                        </div>

                        <div className={"flex flex-col items-center"}>
                            <h1 className={"text-sm select-no"}>Bathrooms</h1>
                            <div className={"flex items-center"}>
                                <FaStar/>
                                <h1>2</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"p-3 flex justify-center items-center bg-gray-50"}>
                <button onClick={clickHandler} className="d-btn mx-auto md:mx-0 w-fit">FIND OUT MORE</button>
            </div>
        </div>
    )
}

export default ProductCard;