const CommentItem = () => {
    return (
        <div className={"border shadow rounded w-full p-3"}>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-8 rounded-full">
                            <img src="https://placeimg.com/192/192/people"/>
                        </div>
                    </div>
                    <h1 className={"select-none text-lg text-semibold text-gray-500"}>Jhon Doe</h1>
                </div>

                <h1 className={"select-none text-gray-500"}>03 January 2023</h1>
            </div>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit
            </p>
        </div>
    )
}

export default CommentItem