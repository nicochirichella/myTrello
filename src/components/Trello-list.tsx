import { Paper, CssBaseline, makeStyles } from '@material-ui/core';
import ListTitle from './List-title';
import TrelloCard from './Trello-card';
import AddCardOrList from './AddCardOrList';
import { List } from '../types/types';

const useStyle = makeStyles((theme: any) => ({
    root: {
        backgroundColor: '#ebecf0',
        width: '300px',
        margin: theme.spacing(1),
    },

}));
const TrelloList = ({list} : {list: List}) => {
    console.log(list);
    return (
        // paper use style useStyle
        <Paper className={useStyle().root}>
            <CssBaseline />
            <ListTitle title={list.title}/>
            {
                list.cardsIds.map((cardId) => {
                    const card = list.cards[cardId];
                    return (
                        <TrelloCard key={cardId} card={card}/>
                    );
                })
            }
            <AddCardOrList type="card"/>
        </Paper>

        
    );
}

export default TrelloList;
 