const projectToCreateInitialState = {
  id: null,
  author: {
    id: '',
    firstName: '',
    lastName: ''
  },
  title: '',
  content: {
    lead: '',
    body: ''
  },
  images: null,
  createdAt: null
};

export default function projectToCreate(state = projectToCreateInitialState, action = {}) {
  return state;
}
