import React, { SetStateAction } from 'react';
import { Artist } from '../../../data/types';

type ArtistModalProps = {
  artist: Artist;
  setSelectedArtist: React.Dispatch<SetStateAction<Artist | null | undefined>>;
};

const ArtistModal = ({ artist, setSelectedArtist }: ArtistModalProps) => {
  return (
    <div className='artistModal'>
      <div className='artistModal__frame'>
        <div className='artistModal__frame__inner'>
          {artist.logo && <img src={artist.logo} alt={artist.name} />}
          {artist.name && <h3>{artist.name}</h3>}
          {artist.style && (
            <p>
              <b>Style :</b> {artist.style}
            </p>
          )}
          {artist.musicians && (
            <p>
              <b>Musiciens :</b> {artist.musicians}
            </p>
          )}
          {artist.description && <p>{artist.description}</p>}
          {artist.link && (
            <button onClick={() => window.open(artist.link, '_blank')}>
              Découvrir
            </button>
          )}

          {artist.video && (
            <iframe
              src={artist.video}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          )}
          <div onClick={() => setSelectedArtist(null)} className='close'>
            Fermer
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistModal;
