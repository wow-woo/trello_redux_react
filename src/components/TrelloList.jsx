import React from "react";
import TrelloCard from "./TrelloCard";
import ActionButton from "./ActionButton";
import { connect } from "react-redux";
import { deleteList } from "../store/actions/listAction";
import { Icon } from "@material-ui/core";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  background-color: #dfe3e6;
  border-radius: 3px;
  box-shadow: 1px 2px 3px #999;
  width: 200px;
  padding: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
`;
const CardContainer = styled.div`
  margin-bottom: 8px;
`;
const TitleFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MoreHoriz = styled.span`
  font-weight: 700;
  font-size: 25px;
  letter-spacing: -1px;
  cursor: pointer;
`;

const TrelloList = ({ list, deleteList, index }) => {
  const deleteHandler = (e) => {
    deleteList(list.id);
  };

  return (
    <Draggable draggableId={String(list.id)} index={index}>
      {(provided) => (
        <ListContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String(list.id)}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <TitleFlex>
                  <h4>{list.title}</h4>
                  <MoreHoriz onClick={deleteHandler}>∙∙∙</MoreHoriz>
                </TitleFlex>
                {list.cards.map((card, index) => {
                  return (
                    <Draggable
                      key={card.id}
                      draggableId={String(card.id)}
                      index={index}
                    >
                      {(provided) => (
                        <CardContainer
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <TrelloCard card={card} list={list.id} />
                        </CardContainer>
                      )}
                    </Draggable>
                  );
                })}
                <ActionButton add={true} list={list.id} />

                {/* placeholder for this item. when this component dragged away */}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
  );
};

export default connect(null, { deleteList })(TrelloList);
