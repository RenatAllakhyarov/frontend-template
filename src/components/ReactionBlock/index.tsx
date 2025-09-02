import IconButton from "@components/IconButton";
import likeIconSvg from "@public/icons/likeIcon.svg";
import dislikeIconSvg from "@public/icons/dislikeIcon.svg";
import { IconButtonTypes } from "@components/IconButton";
import { ReactElement } from "react";
import "./style.css";

export interface IReactionBlockProps {
    likesCount: number;
    dislikesCount: number;
}

const ReactionBlock = ({
    likesCount,
    dislikesCount,
}: IReactionBlockProps): ReactElement => {
    return (
        <div className="reaction-block">
            <IconButton
                src={likeIconSvg}
                label={String(likesCount)}
                onClick={() => console.log("YOU CREATE LIKE ON THIS REVIEW!")}
                alt={"reaction like icon"}
                textClassname="body-small-text"
                iconSize={24}
                type={IconButtonTypes.GHOST}
                textStyles={{ color: "#161616" }}
            />
            <IconButton
                src={dislikeIconSvg}
                label={String(dislikesCount)}
                onClick={() =>
                    console.log("YOU CREATE DISLIKE ON THIS REVIEW!")
                }
                alt={"reaction dislike icon"}
                textClassname="body-small-text"
                iconSize={24}
                type={IconButtonTypes.GHOST}
                textStyles={{ color: "#161616" }}
            />
        </div>
    );
};

export default ReactionBlock;
