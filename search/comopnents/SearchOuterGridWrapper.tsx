interface ISearchOuterGridWrapperProps {
    children: any
}

const SearchOuterGridWrapper = ({children}: ISearchOuterGridWrapperProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 w-full gap-8 py-8">
            {children}
        </div>
    )
}

export default SearchOuterGridWrapper;