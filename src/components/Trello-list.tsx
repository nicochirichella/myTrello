import { Paper, CssBaseline, makeStyles } from "@material-ui/core";
import ListTitle from "./List-title";
import TrelloCard from "./Trello-card";
import AddCardOrList from "./AddCardOrList";
import { List } from "../types/types";
import { Draggable, Droppable } from "react-beautiful-dnd";

const useStyle = makeStyles((theme: any) => ({
  root: {
    backgroundColor: "#ebecf0",
    width: "300px",
    margin: theme.spacing(1),
  },
}));

const TrelloList = ({ list, index }: { list: List; index: number }) => {
  const classes = useStyle();
  return (
    // paper use style useStyle
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper className={classes.root}>
            <CssBaseline />
            <ListTitle title={list.title} listId={list.id} />
            <Droppable droppableId={list.id}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {list.cards.map((card, id) => (
                    <TrelloCard key={card.id} card={card} index={id} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <AddCardOrList type="card" listId={list.id} />
          </Paper>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloList;
