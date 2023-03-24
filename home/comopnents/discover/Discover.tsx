import {Container} from "../../../../layouts";
import CityAvatar from "./comopnents/city-avatar/CityAvatar";

const Discover = () => {
    return (
        <Container>
            <div className={"bg-white border shadow rounded w-full my-8 px-6 pt-4 pb-6"}>
                <h1 className={"text-xl text-center pb-2 border-b-2"}>Let's Discover Bodim Places</h1>

                <div className={"flex flex-wrap justify-center flex-w gap-12 pt-4"}>
                    <CityAvatar/>
                    <CityAvatar/>
                    <CityAvatar/>
                    <CityAvatar/>
                    <CityAvatar/>
                    <CityAvatar/>
                    <CityAvatar/>
                    <CityAvatar/>
                </div>
            </div>
        </Container>
    )
}

export default Discover;