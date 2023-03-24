import AdSlider from "./components/ad-slider/AdSlider";
import AdDetails from "./components/ad-details/AdDetails";
import Reviews from "./components/reviews/Reviews";
import SimilarAds from "./components/similar-ads/SimilarAds";
import {Container, ContainerFluid} from "../../layouts";

const AdPage = () => {
    return (
        <ContainerFluid className={"bg-b-bg py-2"}>
            <Container className={"w-full flex flex-col"}>
                <div className="rounded w-full shadow bg-white">
                    <div className="p-4">
                        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
                            <AdSlider/>
                            <AdDetails/>
                        </div>

                        <div className={"pt-4 pb-1"}>
                            <Reviews/>
                        </div>
                    </div>
                </div>

                <SimilarAds/>
            </Container>
        </ContainerFluid>
    )
}

export default AdPage;