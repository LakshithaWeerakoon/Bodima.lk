import {FaSearch} from "react-icons/fa";

const Filter = () => {
    return (
        <div className={"bg-white border h-fit shadow rounded"}>
            <div className="p-4 border-b-2 w-full">
                <p className="font-semibold">Date</p>
                <div className="px-3 pt-2">
                    <p className={"text-blue-600 cursor-pointer"}>Newest on top</p>
                    <p className={"text-blue-600 cursor-pointer"}>Oldest on top</p>
                </div>
            </div>

            <div className="p-4 border-b-2">
                <p className="font-semibold">Price</p>
                <div className="px-3 pt-2 flex flex-col gap-2">
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="radio" name="radio-10" className="radio checked:bg-blue-500"/>
                            <span className="label-text pl-3">Under Rs. 5000</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="radio" name="radio-10" className="radio checked:bg-blue-500"/>
                            <span className="label-text pl-3">Rs. 5000 to Rs 10,000</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="radio" name="radio-10" className="radio checked:bg-blue-500"/>
                            <span className="label-text pl-3">Over Rs. 10,000</span>
                        </label>
                    </div>

                    <div className="form-control">
                        <div className="flex items-center gap-2">
                            <input type="text" placeholder="Rs"
                                   className="input input-bordered input-sm w-full max-w-xs"/>
                            <p>To</p>
                            <input type="text" placeholder="Rs"
                                   className="input input-bordered input-sm w-full max-w-xs"/>
                            <button className="btn btn-sm btn-square btn-warning">
                                <FaSearch/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 border-b-2">
                <p className="font-semibold">Type</p>
                <div className="px-3 pt-2 flex flex-col gap-2">
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="radio" name="radio-11" className="radio checked:bg-blue-500"/>
                            <span className="label-text pl-3">Single</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="radio" name="radio-11" className="radio checked:bg-blue-500"/>
                            <span className="label-text pl-3">Shared</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="radio" name="radio-11" className="radio checked:bg-blue-500"/>
                            <span className="label-text pl-3">Full House</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="radio" name="radio-11" className="radio checked:bg-blue-500"/>
                            <span className="label-text pl-3">Hostel</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="radio" name="radio-11" className="radio checked:bg-blue-500"/>
                            <span className="label-text pl-3">Any</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <p className="font-semibold">Gender</p>
                <div className="px-3 pt-2 flex flex-col gap-2">
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="radio" name="radio-12" className="radio checked:bg-blue-500"/>
                            <span className="label-text pl-3">Male</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer">
                            <input type="radio" name="radio-12" className="radio checked:bg-blue-500"/>
                            <span className="label-text pl-3">Female</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;