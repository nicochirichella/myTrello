import { createContext } from "react";

interface ContextProps {
  getLists?: () => void;
  addList?: (title: string) => void;
  deleteList?: (id: string) => void;
  addCard?: (title: string, description: string, listId: string) => void;
  deleteCard?: (listId: string, cardId: string) => void;
  updateCard?: (
    listId: string,
    cardId: string,
    title: string,
    description: string
  ) => void;
  updateListTitle?: (listId: string, title: string) => void;
}

const Context = createContext<ContextProps>({
  getLists: () => {},
  addList: (title: string) => {},
  deleteList: (id: string) => {},
  addCard: (title: string, description: string, listId: string) => {},
  deleteCard: (listId: string, cardId: string) => {},
  updateCard: (
    listId: string,
    cardId: string,
    title: string,
    description: string
  ) => {},
  updateListTitle: (listId: string, title: string) => {},
});

export default Context;
