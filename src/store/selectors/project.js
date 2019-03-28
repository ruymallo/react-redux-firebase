import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';

export const getProjects = get('project.projects');

const defaultProjects = [];

export const getFirestoreProjects = getOr(defaultProjects, 'firestore.ordered.projects');

export const getIdParam = get('match.params.id');

export const getFirestoreProjectById = (state, props) => {
  return get(`firestore.data.projects.${getIdParam(props)}`)(state);
}

export const getProjectToDisplay = get('project.projectToDisplay');