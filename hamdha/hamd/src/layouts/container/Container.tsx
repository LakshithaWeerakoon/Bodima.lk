interface IContainerProps {
    children: any,
    className?: any
}

const Container = ({children, className = ''}: IContainerProps) => {
    return (
        <div className={`mx-auto flex flex-wrap items-center justify-between container px-3 sm:px-0 2xl:px-36 ${className}`}>
            {children}
        </div>
    )
}

export default Container