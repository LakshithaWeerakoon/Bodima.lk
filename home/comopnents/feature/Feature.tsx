import {Town} from "../../../../assets";
import {Container} from "../../../../layouts";

const Feature = () => {
    return (
        <Container>
            <div className={"grid grid-cols-1 md:grid-cols-2 -mt-4 lg:py-4 lg:my-4 items-center"}>
                <img className={"object-cover order-2 md:order-1 "} src={Town} alt="town"/>

                <div className="flex w-full md:pl-4 md:order-2 flex-col py-8 lg:mr-4">
                    <h1 className={"font-semibold text-center md:text-left text-3xl"}>Find the best place for your money</h1>
                    <p className={"mt-3 border-b-2 pb-3 pr-4 text-center md:text-left"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem.
                    </p>
                    <button className="d-btn mx-auto md:mx-0 w-fit mt-3">POST YOUR ADD</button>
                </div>
            </div>
        </Container>
    )
}

export default Feature;