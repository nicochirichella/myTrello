import { List } from "../types/types";

export const mockData: {
    lists: {
        [key: string]: List;
    },
    listsIds: string[]
} = {
    lists: {
        "list-1": {
            title: "To Do",
            id: "list-1",
            cards: 
                [{
                    title: "Learn React",
                    description: "Learn React and Redux"
                },
                {
                    title: "Learn Firebase",
                    description: "Learn Firebase and Firestore"
                }]
            },
        "list-2": {
            id: "list-2",
            title: "In Progress",
            cards: [
                {
                    title: "Learn React Native",
                    description: "Learn React Native and Expo"
                },
                {
                    title: "Learn GraphQL",
                    description: "Learn GraphQL and Apollo"
                }]
            }
        },
    listsIds: ["list-1", "list-2"]
};
