import React, { useState, useRef } from "react";
import { Icon, Card, Button } from "@material-ui/core";
import {
  addCard,
  addList,
  updateCard,
  updateList,
} from "../store/actions/listAction";
import { connect } from "react-redux";

const ActionButton = ({
  add,
  addCard,
  addList,
  updateCard,
  updateList,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const textArea = useRef("");

  const styles = {
    clear: {
      backgroundColor: "#999",
      color: "white",
      fontSize: 11,
    },
    center: {
      display: "flex",
      alignItems: "center",
    },
    button: {
      backgroundColor: "#5aac44",
      color: "white",
      marginRight: 5,
      fontSize: 11,
    },
    card: {
      maxWidth: "200px",
      padding: 15,
      minHeight: 85,
    },
    textarea: {
      resize: "none",
      width: "100%",
      border: "none",
      outline: "none",
      overflowY: "hidden",
      fontSize: 15,
      transition: "height .5s ease-in",
    },
    container: {
      minWidth: !add && "200px",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      borderRadius: 3,
      fontSize: 13,
      color: add ? "#999" : "white",
      opacity: add ? 1 : 0.5,
      backgroundColor: add ? "inherit" : "rgba(0,0,0,0.15)",
      paddingLeft: 5,
    },
  };

  const handleClick = (e) => {
    if (add) {
      addCard(props.list, textArea.current.value);
      textArea.current.value = "";
    } else {
      addList(textArea.current.value);
      textArea.current.value = "";
    }
  };

  const updateHandler = (e) => {
    if (add) {
      updateCard(props.list, textArea.current.value);
    } else {
      updateList(textArea.current.value);
    }
  };

  return open ? (
    <div>
      <Card style={styles.card} onMouseDown={updateHandler}>
        <textarea
          autoFocus
          onBlur={() => setOpen(false)}
          placeholder={
            add ? "Write what on your mind" : "Write title for new list"
          }
          ref={textArea}
          onChange={(e) => {
            let overflowed = e.target.scrollTop;

            if (overflowed !== 0) {
              let cal = e.target.scrollHeight;
              e.target.style.height = cal + "px";
            }
          }}
          style={styles.textarea}
        />
      </Card>
      <div style={{ ...styles.center, marginTop: 10 }}>
        <Button
          variant="contained"
          style={styles.button}
          onMouseDown={handleClick}
        >
          Add {add ? "Card" : "List"}
        </Button>
        <Button
          variant="contained"
          style={styles.clear}
          onClick={() => setOpen(false)}
        >
          clear
        </Button>
      </div>
    </div>
  ) : (
    <div style={styles.container} onClick={() => setOpen(true)}>
      <Icon>add</Icon>Add {add ? "Card" : "List"}
    </div>
  );
};

export default connect(null, { addCard, addList, updateCard, updateList })(
  ActionButton
);
