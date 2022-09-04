import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core";
import TrelloList from "./components/Trello-list";
import AddCardOrList from "./components/AddCardOrList";
import background_image from "../src/images/mundial.jpeg";
import { mockData } from "./mocks/mockData";
import ContextApi from "./ContextApi";
import { useState } from "react";
import { List } from "./types/types";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

function App() {
  const classes = useStyle();
  const [data, setData] = useState(mockData);

  const updateDataWithList = (list: List, listId: string) => {
    setData({
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    });
  };

  const updateListTitle = (title: string, listId: string) => {
    const list = data.lists[listId];
    list.title = title;
    updateDataWithList(list, listId);
  };

  const addCard = (title: string, description: string, listId: string) => {
    console.log("about to generate new id", uuidv4());
    const newCard = {
      id: uuidv4(),
      // id: '',
      description,
      title,
    };
    const list = data.lists[listId];
    list.cards.push(newCard);
    updateDataWithList(list, listId);
  };

  const addList = (title: string) => {
    const newList = {
      id: uuidv4(),
      title,
      cards: [],
    };
    setData({
      ...data,
      listsIds: [...data.listsIds, newList.id],
      lists: {
        ...data.lists,
        [newList.id]: newList,
      },
    });
  };

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId, type } = result;
    console.table([source, destination, draggableId, type]);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "list") {
      const listsIds = data.listsIds;
      listsIds.splice(source.index, 1);
      listsIds.splice(destination.index, 0, draggableId);
      setData({
        ...data,
        listsIds,
      });
      return;
    }

    const startList = data.lists[source.droppableId];
    const finishList = data.lists[destination.droppableId];

    if (startList === finishList) {
      const cards = startList.cards;
      const card = cards[source.index]
      cards.splice(source.index, 1);
      cards.splice(destination.index, 0, card);
      const newList = {
        ...startList,
        cards,
      };
      updateDataWithList(newList, newList.id);
      return;
    }

    const startCards = startList.cards;
    const card = startCards[source.index];
    startCards.splice(source.index, 1);
    const newStartList = {
      ...startList,
      cards: startCards,
    };

    const finishCards = finishList.cards;
    finishCards.splice(destination.index, 0, card);
    const newFinishList = {
      ...finishList,
      cards: finishCards,
    };

    updateDataWithList(newStartList, newStartList.id);
    updateDataWithList(newFinishList, newFinishList.id);

    return;
  };

  return (
    <ContextApi.Provider value={{ updateListTitle, addCard, addList }}>
      <div className={classes.root}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="12345" direction="horizontal" type="list">
            {(provided) => (
              <div
                className={classes.container}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {data.listsIds.map((listId: any, index: number) => {
                  const list = data.lists[listId];
                  return <TrelloList key={listId} list={list} index={index} />;
                })}
                <AddCardOrList type="list" />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </ContextApi.Provider>
  );
}

const useStyle = makeStyles((theme: any) => ({
  root: {
    flexDirection: "row",
    minHeight: "100vh",
    backgroundImage: `url(${background_image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  container: {
    display: "flex",
  },
}));

export default App;
