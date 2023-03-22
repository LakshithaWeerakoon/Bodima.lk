import React, {useState} from "react";
import {Modal} from "flowbite-react";
import LoginDetails from "./components/login-details/LoginDetails";
import SignupForm from "./components/signup-form/SignupForm";
import LoginForm from "./components/login-form/LoginForm";

interface ILoginModalProps {
    onOpen: () => void,
    onClose: () => void,
    show: boolean
}

const LoginModal = (
    {
        onOpen = () => {
        },
        onClose = () => {
        },
        show = false
    }: ILoginModalProps) => {

    const [activeFrom, setActiveFrom] = useState<boolean>(false);

    const changeActiveForm = () => {
        setActiveFrom((curr: boolean) => !curr);
    }

    return (
        <Modal
            size="4xl"
            show={show}
            onClose={onClose}>
            <Modal.Header>
                Bodima.lk
            </Modal.Header>
            <Modal.Body>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                    <LoginDetails/>
                    {activeFrom && <LoginForm changeToggle={changeActiveForm}/>}
                    {!activeFrom && <SignupForm changeToggle={changeActiveForm}/>}
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default LoginModal;