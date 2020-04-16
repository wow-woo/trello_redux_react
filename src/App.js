import React from "react";
import TrelloList from "./components/TrelloList";
import { connect } from "react-redux";
import listReducer from "./store/reducers/listReducer";
import ActionButton from "./components/ActionButton";

function App({ lists }) {
  return (
    <div className="App">
      <h1>app</h1>
      <div>{JSON.stringify(lists)}</div>
      <div className="grid" style={styles.grid}>
        {lists.map((list) => {
          return <TrelloList key={list.id} list={list} />;
        })}
        <ActionButton add={false} style={styles.add} />
      </div>
    </div>
  );
}

const styles = {
  grid: {
    // display: "grid",
    // gridTemplateColumns: "repeat(auto-fill , minmax( 220px , 320px))",
    // justifyContent: "start",
    // gridGap: "5px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
};

const mapStateToProp = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProp, { listReducer })(App);
