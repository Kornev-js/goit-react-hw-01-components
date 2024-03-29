import PropTypes from 'prop-types';
import { CardWrapper } from './style'


export default function Profile({avatar, username, tag, location, stats  }) {
  return (
    
    <CardWrapper>
   <div className='profile'>
  <div className='description'>
    <img className='avatar'
      src={avatar}
      alt="User avatar"
      
    />
    <p className='name'>{username}</p>
    <p className='tag'>@{tag}</p>
    <p className='location'>{location}</p>
  </div>

  <ul className='stats'>
    <li>
      <span className='label'>Followers</span>
      <span className='quantity'>{stats.followers}</span>
    </li>
    <li>
      <span className='label'>Views</span>
      <span className='quantity'>{stats.views}</span>
    </li>
    <li>
      <span className='label'>Likes</span>
      <span className='quantity'>{stats.likes}</span>
    </li>
  </ul>
</div>
</CardWrapper>
    
  );  
}


Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number)

}

