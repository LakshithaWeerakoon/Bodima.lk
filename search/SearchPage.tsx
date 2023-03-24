import Filter from "./comopnents/filter/Filter";
import {ProductCard} from "../../components";
import SearchOuterGridWrapper from "./comopnents/SearchOuterGridWrapper";
import SearchInnerGridWrapper from "./comopnents/SearchInnerGridWrapper";
import {Container, ContainerFluid} from "../../layouts";

const SearchPage = () => {
    return (
        <ContainerFluid className={"bg-b-bg"}>
            <Container>
                <SearchOuterGridWrapper>
                    <Filter/>
                    <SearchInnerGridWrapper>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </SearchInnerGridWrapper>
                </SearchOuterGridWrapper>
            </Container>
        </ContainerFluid>
    )
}

export default SearchPage;