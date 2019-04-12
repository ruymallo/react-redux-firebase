import { connect } from 'react-redux';

import { closeModal } from '../../../store/actions/modal';
import { getModalTitle, getChildren, isModalOpen } from '../../../store/selectors/modal';

import Modal from './Modal';

const mapStateToProps = state => ({
  children: getChildren(state),
  shouldModalOpen: isModalOpen(state),
  title: getModalTitle(state)
});

const mapDispatchToProps = {
  closeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
