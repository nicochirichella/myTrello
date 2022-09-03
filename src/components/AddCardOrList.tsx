import { Collapse, alpha, makeStyles, Paper, Typography } from '@material-ui/core'
import { useState } from 'react';
import AddCardOrListText from './AddCardOrListText';

function AddCardOrList({type}: {type: string}) {

  const classes = useStyle();
  const [open, setOpen] = useState(true);
  return (
    <div className={classes.root}>
        <Collapse in={open}>
            <AddCardOrListText type ={type} setOpen={() => setOpen(!open)}/>
        </Collapse>
        <Collapse in={!open}>
            <Paper className={classes.addCardOrList} onClick={() => setOpen(true)}>
                <Typography>
                    { `+ Add a ${type}` }
                </Typography>
            </Paper>
        </Collapse>
    </div>
  )
}

const useStyle = makeStyles((theme: any) => ({
    root: {
        width: '300px',
        marginTop: theme.spacing(1),
    },
    addCardOrList: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(1),
        backgroundColor: alpha(theme.palette.primary.light, 0.25),
        "&:hover": {
            backgroundColor: alpha(theme.palette.primary.light, 0.35),
        }
    },
}));

export default AddCardOrList