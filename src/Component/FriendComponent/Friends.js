import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../../actions/friends';

class Friends extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    this.setState({
      value: event.target.value,
    })
  }
  
  render() {
    const { value } = this.state;
    const { friends, addFriend } = this.props;
    return (
      <div>
        <input value={value} onChange={(event) => this.onChange(event)} />
        <button onClick={() => { addFriend(value); this.setState({ value: '' }) }} > Add Friend </button>
        {friends.length > 0 && (
          <div>
            {friends.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>)
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  friends: state.friendsList.friends,
})
export default connect(mapStateToProps, { addFriend })(Friends);