import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <h3>Copyright?</h3>
      <p>
        Rick and Morty is created by Justin Roiland and Dan Harmon for Adult Swim.
        The data and images are used without claim of ownership and belong to their
        respective owners. This API is open source and uses a BSD license.
        <br />
        <br />
        API request on
        {' '}
        <a href="https://rickandmortyapi.com/" target="_blanck">https://rickandmortyapi.com</a>
      </p>
    </footer>
  );
}

export default Footer;
