import { Paper, Typography, InputBase, makeStyles, Button, IconButton, alpha } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { useState } from 'react';

const AddCardOrListText = ({type, setOpen} :
    { type: string,
    setOpen: () => void}) => {
  const [title, setTitle] = useState('');
  const classes = useStyle();

  return (
    <>
    <Paper className={classes.card}>
        <InputBase 
            multiline
                value={ title } onChange={e => setTitle(e.target.value)}
                onBlur={() => setOpen()}
            placeholder={ type == 'card' ? 'Enter a title for this card...' : 'Enter list title...'} 
            inputProps={{className: classes.input}}
        />
    </Paper>
    <div className={classes.confirm}>
        <div className={classes.options}>
            <Button className={classes.btnConfirm}>
                 {`Add ${type}`}
            </Button>
            <IconButton onClick={() => setOpen()} >
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