import {Container} from "../../../../layouts";
import {ProductCard, ProductGridWrapper} from "../../../../components";

const NearAds = () => {
    return (
        <Container className={"py-3 pb-12"}>
            <h1 className={"text-3xl text-center w-full mb-3 font-semibold"}>You may try these near you...</h1>
            <ProductGridWrapper>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </ProductGridWrapper>
        </Container>
    )
}

export default NearAds;