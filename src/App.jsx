import { createSignal, onCleanup } from 'solid-js';
import { formatInTimeZone } from 'date-fns-tz';
import { useDynamicFontSize } from './hooks/useDynamicFontSize';
import { MILITARY_TIMEZONES, MILITARY_TIME_FORMAT, MILITARY_INDEX_MAPPING } from './constants';

function getMilitaryTimezone(date) {
  const timezone = date.getTimezoneOffset() / 60;
  return MILITARY_INDEX_MAPPING[timezone];
}

function App() {
  const [fontSize] = useDynamicFontSize();
  const [timezone, setTimezone] = createSignal(getMilitaryTimezone(new Date()));
  const [time, setTime] = createSignal(new Date());
  const actualTimezone = () => MILITARY_TIMEZONES[timezone()].localTimezone;
  const timeInterval = setInterval(() => setTime(new Date()), 500);
  const onSelectTimezone = (event) => {
    setTimezone(event.target.value);
  };
  onCleanup(() => clearInterval(timeInterval));

  return (
    <div style={{color: 'white', margin: '0 auto', 'text-align': 'center', 'font-size': fontSize()}}>
      <p>{`${formatInTimeZone(time(), actualTimezone(), MILITARY_TIME_FORMAT)}${timezone()}`}</p>
      <label for="timezone-select">timezone: </label>
      <select style={{ 'font-size': fontSize(), color: 'white', 'background-color': 'transparent' }} id="timezone-select" value={timezone()} onChange={onSelectTimezone}>
        {Object.entries(MILITARY_TIMEZONES).map(([key, value], i) => (
          <option key={i} value={key}>{value.codename}</option>
        ))}
      </select>
    </div>
  );
}

export default App;
