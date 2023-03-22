import {Footer} from "flowbite-react";
import {Container} from "../../../layouts";
import FooterItem from "./components/FooterItem";
import {useNavigate} from "react-router-dom";

const PrimaryFooter = () => {
    const navigate = useNavigate()

    return (
        <Footer className={"!bg-b-dark !rounded-none"}>
            <Container>
                <div className="grid w-full grid-cols-2 gap-8 py-8 md:grid-cols-3">
                    <div>
                        <Footer.Title className={"border-l-2 pl-3 !text-white"} title="Learn More"/>
                        <Footer.LinkGroup col={true}>
                            <Footer.Link href="#">
                                <FooterItem text={"Register"}/>
                            </Footer.Link>
                            <Footer.Link href="#">
                                <FooterItem text={"Post Your Add"}/>
                            </Footer.Link>
                            <Footer.Link href="#">
                                <FooterItem text={"FAQ"}/>
                            </Footer.Link>
                            <Footer.Link href="#">
                                <FooterItem text={"Get Started"}/>
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title className={"border-l-2 pl-3 !text-white"} title="Help & Support"/>
                        <Footer.LinkGroup col={true}>
                            {/*<Footer.Link href="#">*/}
                            {/*    <FooterItem text={"FAQ"}/>*/}
                            {/*</Footer.Link>*/}
                            <FooterItem onClick={() => navigate("/about")} text={"About"}/>
                            <FooterItem onClick={() => navigate("/contact")} text={"Contact Us"}/>
                            {/*<Footer.Link href="#">*/}
                            {/*    <FooterItem text={"Get Started"}/>*/}
                            {/*</Footer.Link>*/}
                            {/*<Footer.Link href="#">*/}
                            {/*    <FooterItem text={"Add Promotion"}/>*/}
                            {/*</Footer.Link>*/}
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title className={"border-l-2 pl-3 !text-white"} title="About"/>
                        <Footer.LinkGroup col={true}>
                            <FooterItem onClick={() => navigate("/about")} text={"About Us"}/>
                            <FooterItem text={"Terms & Conditions"}/>
                            <FooterItem onClick={() => navigate("/privacy-policy")} text={"Privacy Policy"}/>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </Container>
        </Footer>
    )
}

export default PrimaryFooter;