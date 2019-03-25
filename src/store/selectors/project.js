import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';

export const getProjects = get('project.projects');

const defaultProjects = [];

export const getFirestoreProjects = getOr(defaultProjects, 'firestore.ordered.projects');

export const getFirestoreProjectById = (state, id) =>
  getOr(null, `firestore.data.projects.${id}`)(state);