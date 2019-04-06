import { RESET_PROJECT_TO_CREATE, SET_PROJECT_TO_CREATE_DATA } from '../../constants/actionTypes';

const projectToCreateInitialState = {
  title: '',
  content: {
    lead: '',
    body: ''
  },
  images: null
};

export default function projectToCreate(state = projectToCreateInitialState, action = {}) {
  if (action.type === SET_PROJECT_TO_CREATE_DATA) {
    const setDeepPath = () => {
      const path = action.key.split('.');

      return {
        ...state,
        [path[0]]: {
          ...state[path[0]],
          [path[1]]: action.value
        }
      };
    };

    switch (action.key) {
      case 'title':
        return {
          ...state,
          title: action.value
        };

      case 'content.lead':
      case 'content.body':
      case 'images.intro':
      case 'images.full':
        return setDeepPath();

      default:
        return state;
    }
  }

  if (action.type === RESET_PROJECT_TO_CREATE) {
    return projectToCreateInitialState;
  }

  return state;
}
