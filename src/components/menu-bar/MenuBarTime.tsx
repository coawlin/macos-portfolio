import { format } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import styles from './MenuBarTime.module.scss';

const TopBarTime = () => {
  const [time, setTime] = useState(new Date());

  useInterval(() => setTime(new Date()), 2000);

  return (
    <div className={styles.time} style={{ margin: '0 0.5rem' }}>
      {format(time, 'EEE MMM dd')}&nbsp; {format(time, 'h:mm aa')}
    </div>
  );
};

const useInterval = (callback: () => void, delay?: number | null) => {
  const savedCallback = useRef<() => void>(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (!delay) return;

    const interval = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(interval);
  }, [delay]);
};

export default TopBarTime;
