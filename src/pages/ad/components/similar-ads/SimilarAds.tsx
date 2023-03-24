import {ProductCard, ProductGridWrapper} from "../../../../components";

const SimilarAds = () => {
    return (
        <div className={"pt-8 py-12 w-full"}>
            <h1 className={"text-3xl w-full mb-3 font-semibold"}>Similar Advertisements</h1>
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
        </div>
    )
}

export default SimilarAds;