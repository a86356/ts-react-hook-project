import React, { ChangeEvent, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InitialState } from "./store/root-reducer";
import { ActionType } from "./store/root-reducer";

function Show() {
  const { value, list } = useSelector((state: InitialState) => {
    return {
      value: state.value,
      list: state.list,
    };
  });

  const dispatch = useDispatch();

  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          dispatch({
            type: ActionType.UpdateValue,
            payload: e.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: ActionType.AddValue,
            payload: value,
          });
          dispatch({
            type: ActionType.UpdateValue,
            payload: "",
          });
        }}
      >
        新增
      </button>

      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={(e) => {
                  const target = e.target;
                  const value =
                    target.type === "checkbox" ? target.checked : target.value;
                  dispatch({
                    type: ActionType.Completed,
                    payload: {
                      id: item.id,
                      completed: value,
                    },
                  });
                }}
              />
              <span
                className={[item.completed ? "finished" : "unfinished"].join(
                  " "
                )}
              >
                {item.value}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Show;
