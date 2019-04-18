import { connect } from 'react-redux';
import { openModal } from '../../../../store/actions/modal';
import { getProjectToCreateData } from '../../../../store/selectors/project';

import FileUploaderModalTrigger from './FileUploaderModalTrigger';

const mapStateToProps = (state, ownProps) => ({
  imageUrl: getProjectToCreateData(state, ownProps.modalType)
});

const mapDispatchToProps = {
  openModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUploaderModalTrigger);
