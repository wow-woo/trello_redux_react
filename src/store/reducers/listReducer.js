import { v4 } from "uuid";
import {
  SORT_ORDER,
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
    id: v4(),
    cards: [
      {
        id: v4(),
        text: "lorem lorem lorem yeah",
      },
      {
        id: v4(),
        text: " yeah lorem yellow lorem",
      },
    ],
  },
  {
    title: "second episode",
    id: v4(),
    cards: [
      {
        id: v4(),
        text: "bananas !!",
      },
      {
        id: v4(),
        text: " aka boom ba",
      },
      {
        id: v4(),
        text: "shave your hairs",
      },
      {
        id: v4(),
        text: "shave your hairs",
      },
    ],
  },
  {
    title: "third episode",
    id: v4(),
    cards: [
      {
        id: v4(),
        text: "car racer",
      },
      {
        id: v4(),
        text: "on stick",
      },
      {
        id: v4(),
        text: "smart",
      },
    ],
  },
];

export default (state = init, action) => {
  switch (action.type) {
    //DND
    case SORT_ORDER:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
      } = action.payload;

      if (type === "list") {
        const list = state.splice(droppableIndexStart, 1)[0];
        state.splice(droppableIndexEnd, 0, list);
        return [...state];
      }
      if (droppableIdStart === droppableIdEnd) {
        //in the same list
        const list = state.find((list) => list.id === droppableIdStart);
        const card = list.cards.splice(droppableIndexStart, 1)[0];
        list.cards.splice(droppableIndexEnd, 0, card);

        return [...state];
      } else {
        //in different list
        const card = state
          .find((list) => list.id === droppableIdStart)
          .cards.splice(droppableIndexStart, 1)[0];

        const list = state.find((list) => list.id === droppableIdEnd);
        list.cards.splice(droppableIndexEnd, 0, card);

        return [...state];
      }

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
          id: v4(),
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
