import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem(
    "storedTodos",
    JSON.stringify(store.getState().todo.todos)
  );
});

export default store;
