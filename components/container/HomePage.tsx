import React, { memo } from 'react';
import Link from 'next/link';


const HomePage = memo(props => {
  return (
    <>
      <div className="hero-start">
        <h1 className="title">Welcome to Next.js with Reactstrap!</h1>
        <p className="description">
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>
      </div>
    </>
  );
});

export default HomePage;