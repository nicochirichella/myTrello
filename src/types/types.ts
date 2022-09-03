export interface Card {
    title: string;
    description: string;
}

export interface List {
    id: string,
    title: string;
    cards: {
        [key: string]: Card;
    };
    cardsIds: string[];
}