import { Typography, makeStyles} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const ListTitle = ({title='To do'}) => {
    const classes = useStyle();
    return (
        <div className={classes.title}>
            <Typography className={classes.titleText}>
                {title}
            </Typography >
            <MoreHorizIcon />
        </div>
    );
}

const useStyle = makeStyles((theme: any) => ({
    title: {
        display: 'flex',
        margin: theme.spacing(1),
    },

    titleText: {
        flexGrow: 1,
        fontSize: '1.2rem',
        fontWeight: 'bold',
    }
}));

export default ListTitle;