import { Paper, InputBase, makeStyles, Button, IconButton, alpha } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Context from '../ContextApi';
import { useState, useContext } from 'react';

const AddCardOrListText = ({type, listId, setOpen} :
    { type: string,
      listId?: string,
    setOpen: (value: boolean) => void}) => {
  const [title, setTitle] = useState('');
  const classes = useStyle();
  const { addCard, addList } = useContext(Context);

  const handleAddCardOnList = () => {
    console.log('add card on list');
    if (type === 'card') {
       console.log('add card on list');
       console.log(listId);
       const id = listId? listId : '';
       if (addCard) addCard(title, 'description', id);
    } else {
        if (addList) addList(title);
    }

    setTitle('');
    setOpen(false);
  }

  return (
    <>
    <Paper className={classes.card}>
        <InputBase 
            multiline
                value={ title } onChange={e => setTitle(e.target.value)}
            placeholder={ type === 'card' ? 'Enter a title for this card...' : 'Enter list title...'} 
            inputProps={{className: classes.input}}
        />
    </Paper>
    <div className={classes.confirm}>
        <div className={classes.options}>
            <Button className={classes.btnConfirm} onClick={( ) => handleAddCardOnList()}>
                 {`Add ${type}`}
            </Button>
            <IconButton onClick={() => setOpen(false)} >
                <ClearIcon/>
            </IconButton>
        </div>
        
        <IconButton>
            <MoreHorizIcon/>
        </IconButton>
    </div>
    </>
  )
}

const  useStyle = makeStyles((theme: any) => ({
    card: {
        width: '280px', 
        margin: theme.spacing(0, 1, 1, 1),
        paddingBottom: theme.spacing(4), 
    },

    input: {
        margin: theme.spacing(1),
    },
    
    confirm: {
        display: 'flex',
        margin: theme.spacing(0, 1, 1, 1),
    },
    options: {
        flexGrow: 1,
    },
    btnConfirm: {  
        backgroundColor: '#5aac44',
        color: '#fff',
        "&:hover": {
            backgroundColor: alpha('#5aac44', 0.75),
        }
    }
}));

export default AddCardOrListText