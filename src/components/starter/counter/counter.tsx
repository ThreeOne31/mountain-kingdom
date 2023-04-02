import { component$, useSignal, useStylesScoped$ } from '@builder.io/qwik';
import styles from './counter.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  const count = useSignal(10);

  return (
    <div class="">
      <p>Not really sure what to put here. Build this just to test Qwik and vercel and couple of hours later we were here </p>
      
      <p>It could potentially be a space to host everything about Lesotho, bragg about our little Mountain Kingdom. Thojane ea Thesele, Soothoana ea Kueneng</p>

      <b>NB:</b>
      <p>Build this one my birthday eve, deployed on my birthday morning</p>
      {/* <button onClick$={() => count.value--}>-</button>
      <span class={`counter-value ${count.value % 2 === 0 ? 'odd' : ''}`}>{count.value}</span>
      <button onClick$={() => count.value++}>+</button> */}
    </div>
  );
});
