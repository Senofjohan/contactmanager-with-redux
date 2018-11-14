import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact, clearContacts } from '../../actions/contactActions';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.onClearClick = this.onClearClick.bind(this);
  }
  state = {
    showContactInfo: false
  };

  onDeleteClick = id => {
    this.props.deleteContact(id);
  };

  onClearClick = () => {
    if (window.confirm('Are you sure you want to delete ALL contacts?')) {
      this.props.clearContacts();
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <i
            onClick={() =>
              this.setState({
                showContactInfo: !this.state.showContactInfo
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
          <i
            title="Delete"
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link
            title="Edit"
            aria-label={`edit contact ${name}`}
            to={`contact/edit/${id}`}
          >
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'black',
                marginRight: '1rem'
              }}
            />
          </Link>
          <i
            title="Clear all contacts"
            className="fas fa-trash"
            style={{
              cursor: 'pointer',
              float: 'right',
              color: 'red',
              marginRight: '1rem'
            }}
            // onClick={() => {
            //   if (window.confirm('Are you sure you wish to clear all contacts'))
            //     this.onClearClick.bind(this);
            // }}
            onClick={this.onClearClick}
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
  clearContacts: PropTypes.func.isRequired
};
// calling delete and so don't need to mapStateToProps so passing in null
export default connect(
  null,
  { deleteContact, clearContacts }
)(Contact);
