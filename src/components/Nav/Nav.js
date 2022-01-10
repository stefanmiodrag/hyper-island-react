import { Link } from "react-router-dom";

import "./Nav.css";

function Nav({ channels }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        {channels && (
          <ul>
            {channels.map((channel) => (
              <li key={channel.id}>
                <Link to={`/channel/${channel.id}`}>{channel.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
