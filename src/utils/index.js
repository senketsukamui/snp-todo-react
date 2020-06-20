export const FILTER_TYPES = {
  ALL: "ALL",
  ACTIVE: "ACTIVE",
  COMPLETED: "COMPLETED",
};

const FILTER_PREDICATES = {
  [FILTER_TYPES.ALL]: (el) => el,
  [FILTER_TYPES.ACTIVE]: (el) => !el.completed,
  [FILTER_TYPES.COMPLETED]: (el) => el.completed,
};

Object.filter = (obj, predicate) =>
  Object.keys(obj).reduce((acc, key) => {
    predicate(obj[key]) && (acc[key] = obj[key]);
    return acc;
  }, {});

export const filterTodo = (todos, filterType) =>
  Object.filter(todos, FILTER_PREDICATES[filterType]);
