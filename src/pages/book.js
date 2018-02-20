import React from 'react';
import { MdRoomService } from 'react-icons/lib/md';

export default () => (
  <div
    style={{
      backgroundColor: '#393232',
      color: '#a298f7',
      display: 'flex',
      height: 'calc(100vh - 60px)',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <h1> 404 </h1>
    <MdRoomService width={123} height={123} />
    <h3> Uh Oh... </h3>
    <p> Kelly hasn't made this page yet </p>
  </div>
);
