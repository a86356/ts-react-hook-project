import { Action, Reducer } from "redux";
export interface Item {
  id: number;
  completed: boolean;
  value: string;
}

export interface InitialState {
  value: string;
  list: Array<Item>;
}

export const initialState: InitialState = {
  value: "今天要学习前端",
  list: [
    {
      id: 1,
      completed: false,
      value: "今天要学习react",
    },
    {
      id: 2,
      completed: true,
      value: "今天要学习ts",
    },
    {
      id: 3,
      completed: false,
      value: "今天要学习redux",
    },
  ],
};

console.log(new Date().getTime());

export enum ActionType {
  AddValue,
  Completed,
  Imcompleted,
  UpdateValue,
}

export const rootReducer: Reducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === ActionType.UpdateValue) {
    return { ...state, value: payload };
  }

  if (type === ActionType.AddValue) {
    return {
      ...state,
      list: [
        ...state.list,
        { id: new Date().getTime(), completed: false, value: payload },
      ],
    };
  }

  if (type === ActionType.Completed) {
    const { id, completed } = payload;

    const oldList = state.list;

    const newList = oldList.map((item, index) => {
      if (id === item.id) {
        return { ...item, completed: completed };
      }
      return item;
    });

    return {
      ...state,
      list: [...newList],
    };
  }

  return state;
};
