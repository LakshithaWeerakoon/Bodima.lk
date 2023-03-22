import {Outlet} from "react-router-dom";
import {PrimaryFooter, PrimaryHeader} from "../../components";

const RootLayout = () => {
    return (
        <>
            <PrimaryHeader/>
            <Outlet/>
            <PrimaryFooter/>
        </>
    )
}

export default RootLayout;