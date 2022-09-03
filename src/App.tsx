import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core'; 
import TrelloList from './components/Trello-list';
import AddCardOrList from './components/AddCardOrList';
import background_image from '../src/images/mundial.jpeg';
import { mockData } from './mocks/mockData';
import ContextApi from './ContextApi';
import { useState } from 'react';
import { List } from './types/types';

function App() {
  const classes = useStyle();
  const [data, setData] = useState(mockData);

  const updateDataWithList = (list: List, listId: string) => {
    setData({
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      }
    });
  }


  const updateListTitle = (title: string, listId: string) => {
    console.log(title, listId);
    const list = data.lists[listId];
    list.title = title;
    updateDataWithList(list, listId);
  }

  const addCard = (title: string, description: string, listId: string) => {
    const newCard = {
      description,
      title,
    }
    const list = data.lists[listId];
    list.cards.push(newCard);
    updateDataWithList(list, listId);
  }

  return (
    <ContextApi.Provider value={{ updateListTitle, addCard }}>
      <div className={classes.root}>
        <div className={classes.container}>
          {
            data.listsIds.map((listId: any) => {
              const list = data.lists[listId];
              return <TrelloList key={listId} list={list}/>
            })
          }
          <AddCardOrList type="list"/>
        </div>
      </div>
    </ContextApi.Provider>
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
