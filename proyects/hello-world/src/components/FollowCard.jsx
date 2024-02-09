import "../App.css";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
export function FollowCard({ formatUser, name,username, initialFollow }) {
  const imagsrc =  `https://unavatar.io/${username}`;
  const [follow, setFollow] = useState(initialFollow);
  const text = follow ? 'Siguiendo'  : 'Seguir';
  const buttonClass =  follow ?  'tw-followCard-button is-following' : 'tw-followCard-button';

  const handleClick = () => {
    setFollow(!follow)
  }
  return (
    <div>
      <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
            className="tw-followCard-avatar"
            src={imagsrc}
            alt="image" />
            <div className="tw-followCard-info">
                <strong>{name}</strong>
                <span className="tw-followCard-infoUserName">{formatUser(username)}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClass} onClick={handleClick}>
              <span className="tw-followCard-text">{text}</span>
              <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
        </aside>
      </article>
    </div>
  )
}

