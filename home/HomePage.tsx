import Hero from "./comopnents/hero/Hero";
import Feature from "./comopnents/feature/Feature";
import NearAds from "./comopnents/near-ads/NearAds";
import Discover from "./comopnents/discover/Discover";
import {ContainerFluid} from "../../layouts";

const HomePage = () => {
    return (
        <ContainerFluid className={"bg-b-bg"}>
            <Hero/>
            <Discover/>
            <Feature/>
            <NearAds/>
        </ContainerFluid>
    )
}

export default HomePage