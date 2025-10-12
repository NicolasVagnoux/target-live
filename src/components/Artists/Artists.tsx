'use client';
import React, { useEffect, useState } from 'react';
import './artists.scss';
import { artists } from '../../../data/data';
import ArtistModal from './ArtistModal';
import { Artist } from '../../../data/types';
import Section from '../Section/Section';

const Artists = () => {
  const [randomizedList, setRandomizedList] = useState(artists);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>();

  useEffect(() => {
    const shuffled = [...artists].sort(() => Math.random() - 0.5);
    setRandomizedList(shuffled);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.style.overflow = !!selectedArtist
      ? 'hidden'
      : 'auto';
  }, [selectedArtist]);

  return (
    <Section color='white'>
      <section className='artists container' id='artists'>
        <div className='artists__grid'>
          <div className='artists__grid__title'>
            <h3>
              <div></div>Nos Artistes
            </h3>
          </div>
          {randomizedList.map((artist) => (
            <div
              onClick={() => setSelectedArtist(artist)}
              key={artist.id}
              className='artists__grid__card'
            >
              <div className='artists__grid__card__bghover'></div>
              <img src={artist.image} alt={artist.name} />
              <p>{artist.name}</p>
            </div>
          ))}
          {selectedArtist && (
            <ArtistModal
              artist={selectedArtist}
              setSelectedArtist={setSelectedArtist}
            />
          )}
        </div>
      </section>
    </Section>
  );
};

export default Artists;
