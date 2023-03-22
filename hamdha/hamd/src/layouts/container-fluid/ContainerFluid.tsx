interface IContainerFluid {
    children: any,
    className?: any
}

const ContainerFluid = ({children, className}: IContainerFluid) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default ContainerFluid;