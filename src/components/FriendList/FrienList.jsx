import PropTypes, { bool } from 'prop-types';
import { StyledList, StyledListItem } from './style';

export default function FriendList({friends}) {
    
  return (
    <StyledList >
        {friends.map(friend => (
            
                <StyledListItem  key={friend.id} isOnline={friend.isOnline}>
                <span className="status"></span>
                <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                <p className="name">{friend.name}</p>
              </StyledListItem>
        ))}
      
    </StyledList>
  );
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string,
            avatar: PropTypes.string,
            id: PropTypes.number,
            isOnline: bool,

        })
    )
}
