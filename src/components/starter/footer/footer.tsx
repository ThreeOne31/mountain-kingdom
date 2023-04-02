import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '~/routes/layout';
import styles from './footer.module.css';
import moment from 'moment';

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <a href="/" class={styles.anchor}>
        Made with ♡ by Abuti Khomo
        <span class={styles.spacer}>|</span>
        <span>{moment(serverTime.value.date).format("YYYY-MM-DD")}</span>
      </a>
    </footer>
  );
});
