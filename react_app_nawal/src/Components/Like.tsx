import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FcDislike } from "react-icons/fc";

interface LikeProps {
  onClick: () => void;
  color: string;
}

const Like = ({ onClick, color = "white" }: LikeProps) => {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      {color === "white" ? (
        <FcDislike color={color} size={20} />
      ) : (
        <AiFillHeart color={color} size={20} />
      )}
    </div>
  );
};

export default Like;
