import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchChannelById, fetchPlaylistByChannelId } from "../api";
import { Header } from "../components";

const defaultChannelId = "2576";

function PlaylistPage() {
  const { id } = useParams();

  const [channel, setChannel] = useState(null);
  const [songs, setSongs] = useState([]);

  const channelId = id || defaultChannelId;

  useEffect(() => {
    async function init() {
      const channel = await fetchChannelById(channelId);
      const songs = await fetchPlaylistByChannelId(channelId);

      setChannel(channel);
      setSongs(songs);
    }

    init();
  }, [channelId]);

  return (
    <>
      {/* Example of breaking out as a component... */}
      {channel && <Header name={channel.name} tagline={channel.tagline} />}

      {songs && (
        <ul>
          {songs.map((song, i) => (
            <li key={i} id={song.id}>
              {song.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default PlaylistPage;
