import { combineReducers } from "redux";

const projectsInitialState =[
  { id: '1', title: 'Lorem, ipsum dolor.', content: 'Content lorem ipsum dolor sit.' },
  { id: '2', title: 'Lorem, ipsum dolor.', content: 'Content lorem ipsum dolor sit.' },
  { id: '3', title: 'Lorem, ipsum dolor.', content: 'Content lorem ipsum dolor sit.' }
];

function projects(state = projectsInitialState, action) {
  return state;
}

export default combineReducers({
  projects
});
