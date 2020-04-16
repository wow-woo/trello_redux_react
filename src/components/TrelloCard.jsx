import React from "react";
import { Card, CardContent, Typography, Icon } from "@material-ui/core";
import { connect } from "react-redux";
import { deleteCard } from "../store/actions/listAction";

const TrelloCard = ({ card, list, deleteCard }) => {
  const deleteHandler = (e) => {
    deleteCard(list, card.id);
  };
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom style={{ fontSize: "13px" }}>
          {card.text}
          {/* <Icon onMouseDown={deleteHandler}>close</Icon> */}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default connect(null, { deleteCard })(TrelloCard);
