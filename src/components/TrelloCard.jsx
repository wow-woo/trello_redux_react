import React from "react";
import { Card, CardContent, Typography, Icon } from "@material-ui/core";
import { connect } from "react-redux";
import { deleteCard } from "../store/actions/listAction";

const TrelloCard = ({ card, list, deleteCard }) => {
  const deleteHandler = (e) => {
    deleteCard(list, card.id);
  };
  return (
    <Card style={styles.cardContainer}>
      <Icon onMouseDown={deleteHandler}>close</Icon>
      <CardContent>
        <Typography gutterBottom>{card.text}</Typography>
      </CardContent>
    </Card>
  );
};

const styles = {
  cardContainer: {
    marginBottom: 8,
  },
};

export default connect(null, { deleteCard })(TrelloCard);
