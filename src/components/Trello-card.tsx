import { Paper, makeStyles } from "@material-ui/core";
import { Card } from "../types/types";
import { Draggable } from "react-beautiful-dnd";

const TrelloCard = ({ card, index }: { card: Card; index: number }) => {
  const classes = useStyle();
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper className={classes.trellocard}>{card.title}</Paper>
        </div>
      )}
    </Draggable>
  );
};

const useStyle = makeStyles((theme: any) => ({
  trellocard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
}));

export default TrelloCard;
