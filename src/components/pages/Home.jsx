import React from "react";
import TrelloList from "../TrelloList";
import ActionButton from "../ActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { connect } from "react-redux";
import { sortDND } from "../../store/actions/listAction";

const ListsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 14px;
`;

const Home = ({ lists, sortDND }) => {
  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { destination, source, draggableId, type } = result;

        if (!destination) {
          return;
        }

        sortDND({
          droppableIdStart: source.droppableId,
          droppableIdEnd: destination.droppableId,
          droppableIndexStart: source.index,
          droppableIndexEnd: destination.index,
          draggableId,
          type,
        });
      }}
    >
      <Droppable type="list" direction="horizontal" droppableId="appLevel">
        {(provided) => (
          <ListsContainer {...provided.droppableProps} ref={provided.innerRef}>
            {lists.map((list, index) => {
              return <TrelloList key={list.id} list={list} index={index} />;
            })}

            {provided.placeholder}
            <ActionButton add={false} />
          </ListsContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const mapStateToProp = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProp, { sortDND })(Home);
