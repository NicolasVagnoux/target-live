'use client'
import React, { useEffect, useState } from 'react';
import './artists.scss';
import { artists } from '../../../data/data';
import ArtistModal from './ArtistModal';
import { Artist } from '../../../data/types';

const Artists = () => {

const [randomizedList, setRandomizedList] = useState(artists);
const [selectedArtist, setSelectedArtist] = useState<Artist | null>();

  useEffect(() => {
    const shuffled = [...artists].sort(() => Math.random() - 0.5);
    setRandomizedList(shuffled);
  }, []);

  return (
    <div className='artists'>
      <h1>Nos Artistes</h1>
      <div className='artists__grid'>
        {randomizedList.map((artist) => (
          <div onClick={() => setSelectedArtist(artist)} key={artist.id} className='artists__grid__card'>
            <img src={artist.image} alt={artist.name} />
          </div>
        ))}
        {selectedArtist && <ArtistModal artist={selectedArtist} setSelectedArtist={setSelectedArtist} />}
      </div>
    </div>
  );
};

export default Artists;
