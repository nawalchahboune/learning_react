import React from "react";

interface ExpandProps {
  text: string;
  expanded: boolean;
  limit: number;
}

const ExpandedText = ({ text, limit, expanded }) => {
  return <p>{expanded ? text : text.slice(0, limit - 3) + "..."}</p>;
};

export default ExpandedText;
