import { Fragment, useEffect, useState } from "react";
import Alert from "./Components/Alert";
import ButtonN from "./Components/ButtonN";
import ExpandedText from "./Components/ExpandedText";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Like from "./Components/Like";
import Form from "./Components/Form";
export default function App() {
  const [expanded, setExpanded] = useState(true);
   const [visible, setVisible] = useState(false);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    console.log(liked);
  }, [liked]);
  const onClick = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const like = () => {
    setLiked(!liked);
    console.log("clicked");
  };
  const colorIt = () => {
    return liked ? "red" : "white";
  };
  const onExpand = (expand) => {
    setExpanded(expand);
  };
  return (
    <React.Fragment>
      {/* <Alert
        message="this is alert "
        visible={visible}
        color="danger"
        onClose={onClose}
      />
      <ButtonN content="click me" onClick={onClick} /> */}
      <Like onClick={like} color={colorIt()} />
      {/* <div className="display:flex">
        <ExpandedText
          text="If used for item selection, when opened, simple menus places the initial focus on the selected menu item. The currently selected menu item is set using the selected prop (from ListItem). To use a selected menu item without impacting the initial focus, set the variant prop to  If used for item selection, when opened, simple menus places the initial focus on the selected menu item. The currently selected menu item is set using the selected prop (from ListItem). To use a selected menu item without impacting the initial focus, set the variant prop to "
          expanded={expanded}
          limit={200}
        />
        <ButtonN
          content={expanded ? "show less" : "show more"}
          onClick={() => onExpand(!expanded)}
        />
      </div> */}
{/* <Form/> */}
    </React.Fragment>
  );
}
