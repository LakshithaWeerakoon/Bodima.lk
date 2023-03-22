import {Navbar} from "flowbite-react";
import {FaFileExport, FaHome, FaPhone} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {LoginModal} from "../../modals";

const PrimaryHeader = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState<boolean>(false);

    const onOpen = () => {
        setShow(true)
    }

    const onClose = () => {
        setShow(false)
    }

    return (
        <>
            <LoginModal show={show} onClose={onClose} onOpen={onOpen}/>
            <div className={"!bg-b-dark"}>
                <Navbar
                    className={"!bg-b-dark 2xl:px-36 container mx-auto"}>
                    <Navbar.Brand onClick={() => navigate("/")} className={"flex items-center gap-3"}>
                        <FaHome className={"mt-0.5 text-3xl text-white"}/>
                        <span
                            className="self-center whitespace-nowrap text-xl select-none cursor-pointer font-semibold text-white">Bodima.lk</span>
                    </Navbar.Brand>

                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Navbar.Link
                            className={"!text-white md:pr-8 flex items-center cursor-pointer gap-2"}
                            onClick={() => navigate("/")}>
                            <p className={"mt-1"}>Home</p>
                            <FaHome className={"mt-0.5 text-xl"}/>
                        </Navbar.Link>

                        <Navbar.Link
                            onClick={onOpen}
                            className={"!text-white md:pr-8 flex items-center cursor-pointer gap-2"}>
                            <p className={"mt-1"}>Login</p>
                            <FaFileExport className={"mt-0.5 text-xl"}/>
                        </Navbar.Link>

                        <Navbar.Link
                            onClick={() => navigate("/contact")}
                            className={"!text-white md:pr-8 flex items-center cursor-pointer gap-2"}>
                            <p className={"mt-1"}>Contact</p>
                            <FaPhone className={"mt-0.5 text-sm"}/>
                        </Navbar.Link>

                        <Navbar.Link
                            className={"!text-white cursor-pointer flex justify-center"}
                            href="/">
                            <button className="d-btn">POST YOUR ADD</button>
                        </Navbar.Link>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default PrimaryHeader;