import { useEffect, useState } from "react";

import { fetchAllChannels } from "./api";
import { Nav } from "./components";
import Routes from "./Routes";

function App() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    fetchAllChannels().then((res) => setChannels(res));
  }, []);

  return (
    <div className="App">
      <Nav channels={channels} />
      <Routes />
    </div>
  );
}

export default App;
