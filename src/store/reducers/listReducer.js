import {
  ADD_CARD,
  ADD_LIST,
  UPDATE_CARD,
  UPDATE_LIST,
  DELETE_CARD,
  DELETE_LIST,
} from "../type.js";

const init = [
  {
    title: "test tile",
    id: 0,
    cards: [
      {
        id: 0,
        text: "lorem lorem lorem yeah",
      },
      {
        id: 1,
        text: " yeah lorem yellow lorem",
      },
    ],
  },
  {
    title: "second episode",
    id: 1,
    cards: [
      {
        id: 0,
        text: "bananas !!",
      },
      {
        id: 1,
        text: " aka boom ba",
      },
      {
        id: 2,
        text: "shave your hairs",
      },
      {
        id: 3,
        text: "shave your hairs",
      },
    ],
  },
  {
    title: "third episode",
    id: 3,
    cards: [
      {
        id: 0,
        text: "car racer",
      },
      {
        id: 1,
        text: "on stick",
      },
      {
        id: 2,
        text: "smart",
      },
    ],
  },
];

export default (state = init, action) => {
  switch (action.type) {
    //CREATE
    case ADD_CARD:
      return [
        ...state.map((list) => {
          if (list.id === action.payload.list_id) {
            return {
              ...list,
              cards: [
                ...list.cards,
                {
                  id: Math.floor(Math.random() * 100),
                  text: action.payload.content,
                },
              ],
            };
          }
          return list;
        }),
      ];
    case ADD_LIST:
      return [
        ...state,
        {
          title: action.payload,
          id: Math.floor(Math.random() * 100),
          cards: [],
        },
      ];

    //DELETE
    case DELETE_CARD:
      return [
        ...state.map((list) => {
          if (list.id === action.payload.list) {
            return {
              ...list,
              cards: list.cards.filter(
                (card) => card.id !== action.payload.card
              ),
            };
          }
          return list;
        }),
      ];

    case DELETE_LIST:
      return [...state.filter((list) => list.id !== action.payload)];

    default:
      return state;
  }
};
