interface ISearchInnerGridWrapperProps {
    children: any
}

const SearchInnerGridWrapper = ({children}: ISearchInnerGridWrapperProps) => {
    return (
        <div className="sm:col-span-2 lg:col-span-3">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {children}
            </div>
        </div>
    )
}

export default SearchInnerGridWrapper;