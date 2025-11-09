export const fetchConcerts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DATA_URL}/concerts.json`, {
    cache: 'no-store',
  });
  const concerts = await res.json();
  return concerts;
};

export const fetchArtists = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DATA_URL}/artists.json`, {
    cache: 'no-store',
  });
  const artists = await res.json();
  return artists;
};

