import { useMemo } from "react";
import { useStore } from "../store";
import "./Column.css";
import Task from "./Task";

export default function Column({ state }) {
  const tasks = useStore(
    (store) => store.task //.filter(task=>task.state===state)
  );
  const filtered = useMemo(
    () => tasks.filter((task) => task.state === state),
    [tasks, state]
  );

  return (
    <div className="column">
      <p>{state}</p>
      <Task title="Todo" />
    </div>
  );
}
