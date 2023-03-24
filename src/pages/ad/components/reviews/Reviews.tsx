import {Tabs} from "flowbite-react";
import CommentItem from "./comopnents/CommentItem";

const Reviews = () => {
    return (
        <Tabs.Group
            aria-label="Default tabs"
            style="default">
            <Tabs.Item
                active={true}
                title="Comments">
                <div className="flex items-center gap-3 flex-col">
                    <CommentItem />
                    <CommentItem />
                </div>
            </Tabs.Item>
            <Tabs.Item
                disabled
                title="Rating">
                Dashboard content
            </Tabs.Item>
        </Tabs.Group>
    )
}

export default Reviews;