interface IProductGridWrapper {
    children: any
}

const ProductGridWrapper = ({children}: IProductGridWrapper) => {
    return (
        <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-8"}>
            {children}
        </div>
    )
}

export default ProductGridWrapper