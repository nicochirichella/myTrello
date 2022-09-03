export interface Card {
    title: string;
    description: string;
}

export interface List {
    title: string;
    cards: {
        [key: string]: Card;
    };
    cardsIds: string[];
}