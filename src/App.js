import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { fetchAllChannels } from "./api";
import PlaylistPage from "./pages/PlaylistPage";

function App() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    fetchAllChannels().then((res) => setChannels(res));
  }, []);

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>

        {channels && (
          <ul>
            {channels.map((channel) => (
              <li key={channel.id}>
                <Link to={`/channel/${channel.id}`}>{channel.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<PlaylistPage />} />
        <Route path="/channel/:id" element={<PlaylistPage />} />
      </Routes>
    </div>
  );
}

export default App;
