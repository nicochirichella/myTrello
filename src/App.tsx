import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core'; 
import TrelloList from './components/Trello-list';
import AddCardOrList from './components/AddCardOrList';
import background_image from '../src/images/mundial.jpeg';
import { mockData } from './mocks/mockData';

function App() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {
          mockData.listsIds.map((listId: any) => {
            const list = mockData.lists[listId];
            return <TrelloList key={listId} list={list} />
          })
        }
        <AddCardOrList type="list"/>
      </div>
      
    </div>
  );
}

const useStyle = makeStyles((theme: any) => ({
  root: {
    flexDirection: 'row',
    minHeight: '100vh', 
    backgroundImage: `url(${background_image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  container: {
    display: 'flex',
   },
}));

export default App;
