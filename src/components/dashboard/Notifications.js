import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestoreOrderedNotifications } from '../../store/selectors/notifications';
import moment from 'moment';



function Notifications({ notifications }) {
  const NotificationsList = () => notifications.map(notification =>
    <li
      key={notification.id}>
      <span className="green-text">
        {notification.user}
      </span>
      <span>{` ${notification.content}`}</span>
      <div className="grey-text note-time">
        {moment(notification.time.toDate()).fromNow()}
      </div>
    </li>
  );

  return (
    <div className="section" >
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            <NotificationsList />
          </ul>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  notifications: getFirestoreOrderedNotifications(state)
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notifications', orderBy: ['time', 'desc'] }
  ])
)(Notifications);