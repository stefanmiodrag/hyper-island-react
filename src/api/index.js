const defaultApiUrl = "http://api.sr.se/api/v2";

export async function fetchAllChannels() {
  return fetch(`${defaultApiUrl}/channels?format=json`)
    .then((res) => res.json())
    .then((data) => data.channels)
    .catch((err) => console.error(err));
}

export async function fetchChannelById(id) {
  return fetch(`${defaultApiUrl}/channels/${id}?format=json`)
    .then((res) => res.json())
    .then((data) => data.channel)
    .catch((err) => console.error(err));
}

export async function fetchPlaylistByChannelId(id) {
  return fetch(
    `${defaultApiUrl}/playlists/getplaylistbychannelid?id=${id}&format=json`
  )
    .then((res) => res.json())
    .then((data) => data.song)
    .catch((err) => console.error(err));
}
