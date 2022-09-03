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
            cards: {
                "card-1": {
                    title: "Learn React",
                    description: "Learn React and Redux"
                },
                "card-2": {
                    title: "Learn Firebase",
                    description: "Learn Firebase and Firestore"
                }
            },
            cardsIds: ["card-1", "card-2"]
        },
        "list-2": {
            id: "list-2",
            title: "In Progress",
            cards: {
                "card-3": {
                    title: "Learn React Native",
                    description: "Learn React Native and Expo"
                },
                "card-4": {
                    title: "Learn GraphQL",
                    description: "Learn GraphQL and Apollo"
                }
            },
            cardsIds: ["card-3", "card-4"]
        }
    },
    listsIds: ["list-1", "list-2"]
};
