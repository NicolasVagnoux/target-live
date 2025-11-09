export const fetchConcerts = async () => {
  const res = await fetch('https://target-live.com/datafakeapi/concerts.json', {
    cache: 'no-store',
  });
  const concerts = await res.json();
  return concerts;
};

export const fetchArtists = async () => {
  const res = await fetch('https://target-live.com/datafakeapi/artists.json', {
    cache: 'no-store',
  });
  const artists = await res.json();
  return artists;
};

