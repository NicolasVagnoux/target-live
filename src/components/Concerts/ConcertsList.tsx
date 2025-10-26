import React from 'react';
import { concerts } from '../../../data/data';

const ConcertsList = () => {
  return (
    <table className='concertsList'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Evènement</th>
          <th>Lieu</th>
        </tr>
      </thead>
      <tbody>
        {concerts.map((concert) => (
          <tr key={concert.title} onClick={() => window.open(concert.link, '_blank')}>
            <th>{concert.date}</th>
            <th>{concert.title}</th>
            <th>{concert.location}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ConcertsList;
