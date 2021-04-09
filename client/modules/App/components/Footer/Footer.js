import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

export function Footer() {
  return (
    <div className={styles.footer}>
      <p>&copy; 2021 &middot; Joe Bumbulis</p>
      <p><FormattedMessage id="twitterMessage" /> : <a href="https://twitter.com/@joebumbulis" target="_Blank">@joebumbulis</a></p>
    </div>
  );
}

export default Footer;
