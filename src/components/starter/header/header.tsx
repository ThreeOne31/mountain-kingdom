import { component$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.module.css';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.logo}>
        <a href="/" title="qwik">
          {/* <QwikLogo /> */}
          In The Kingdom
        </a>
      </div>
      <ul>
        <li>
          <a href="/">
            Up Coming
          </a>
        </li>
        <li>
          <a href="/">
            Essential Guides
          </a>
        </li>
        <li>
          <a href="/">
            Abuot Us
          </a>
        </li>
        <li>
          <a href="/">
            Contact Us
          </a>
        </li>
      </ul>
    </header>
  );
});
