import React from "react";
import TrelloCard from "./TrelloCard";
import ActionButton from "./ActionButton";
import { connect } from "react-redux";
import { deleteList } from "../store/actions/listAction";
import { Icon } from "@material-ui/core";

const TrelloList = ({ list, deleteList }) => {
  const deleteHandler = (e) => {
    deleteList(list.id);
  };

  return (
    <div style={styles.container}>
      <Icon onMouseDown={deleteHandler}>close</Icon>
      <h4>{list.title}</h4>
      {list.cards.map((card) => {
        return <TrelloCard key={card.id} card={card} list={list.id} />;
      })}
      <ActionButton add={true} list={list.id} />
    </div>
  );
};

const styles = {
  container: {
    flexGrow: 0,
    flexShrink: 1,
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    boxShadow: "1px 2px 3px #999",
    width: 300,
    padding: 8,
    marginRight: 8,
    marginBottom: 8,
  },
};

export default connect(null, { deleteList })(TrelloList);
