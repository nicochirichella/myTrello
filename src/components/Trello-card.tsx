import { Paper, makeStyles } from '@material-ui/core';
import { Card } from '../types/types';


const TrelloCard = ({card} : {card: Card}) => {
    const classes = useStyle();
    return (
        <Paper className={classes.trellocard}>
            { card.title }
        </Paper>
    );
}

const useStyle = makeStyles((theme: any) => ({
    trellocard: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(1),
    },
    
}));

export default TrelloCard;
