import {useNavigate} from "react-router-dom";

const CityAvatar = () => {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate("/search")} className="avatar flex cursor-pointer flex-col items-center">
            <div className="w-24 rounded-full shadow">
                <img src="https://placeimg.com/200/200/arch"/>
            </div>
            <h1 className={"text-sm select-none font-semibold"}>Colombo</h1>
        </div>
    )
}

export default CityAvatar;