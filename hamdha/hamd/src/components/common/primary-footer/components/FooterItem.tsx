import {FaAngleDoubleRight} from "react-icons/fa";

interface IFooterItemProps {
    text: any,
    onClick?: () => void
}

const FooterItem = ({text = "Item", onClick = () => {}}: IFooterItemProps) => {
    return (
        <div onClick={onClick} className={"flex items-center gap-2 py-1"}>
            <FaAngleDoubleRight className={"text-white"}/>
            <h1 className={"select-none cursor-pointer text-white"}>{text}</h1>
        </div>
    )
}

export default FooterItem;