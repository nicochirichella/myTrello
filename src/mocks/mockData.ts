import { List } from "../types/types";

export const mockData: {
  lists: {
    [key: string]: List;
  };
  listsIds: string[];
} = {
  lists: {
    "list-1": {
      title: "To Do",
      id: "list-1",
      cards: [
        {
          id: "card-1",
          title: "Learn React",
          description: "Learn React and Redux",
        },
        {
          id: "card-2",
          title: "Learn Firebase",
          description: "Learn Firebase and Firestore",
        },
      ],
    },
    "list-2": {
      id: "list-2",
      title: "In Progress",
      cards: [
        {
          id: "card-3",
          title: "Learn React Native",
          description: "Learn React Native and Expo",
        },
        {
          id: "card-4",
          title: "Learn GraphQL",
          description: "Learn GraphQL and Apollo",
        },
      ],
    },
  },
  listsIds: ["list-1", "list-2"],
};
