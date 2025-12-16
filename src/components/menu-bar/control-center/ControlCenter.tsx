import DarkModeSvg from '@/assets/sf-icons/DarkMode.svg';
import LightModeSvg from '@/assets/sf-icons/LightMode.svg';
import { useTheme } from '@/hooks';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import WifiIcon from '@mui/icons-material/Wifi';
import { JSX } from 'react';
import styles from './ControlCenter.module.scss';
import { ControlCenterShell } from './ControlCenterShell';
import { ControlCenterSurface } from './ControlCenterSurface';
import { ControlCenterTile } from './ControlCenterTile';

export const ControlCenter = () => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ControlCenterShell>
      <section className={styles.container}>
        <ControlCenterSurface
          grid={[
            [1, 6],
            [1, 4],
          ]}
        >
          {/* Wifi */}
          <ControlCenterTile grid={[1, 1]}>
            <Toggle filled={!0}>
              <WifiIcon sx={{ width: 19, height: 19 }} />
            </Toggle>
            Wi-Fi
          </ControlCenterTile>

          {/* Bluetooth */}
          <ControlCenterTile grid={[2, 1]}>
            <Toggle filled={!0}>
              <BluetoothIcon sx={{ width: 19, height: 19 }} />
            </Toggle>
            Bluetooth
          </ControlCenterTile>
        </ControlCenterSurface>

        {/* Theme Switcher */}
        <ControlCenterSurface
          grid={[
            [7, 6],
            [1, 2],
          ]}
        >
          <ControlCenterTile grid={[1, 1]}>
            <Toggle onClick={toggleTheme} filled={theme === 'dark'}>
              {theme === 'dark' ? <DarkModeSvg /> : <LightModeSvg />}
            </Toggle>
            Dark mode
          </ControlCenterTile>
        </ControlCenterSurface>
      </section>
    </ControlCenterShell>
  );
};

const Toggle: React.FC<{ filled: boolean } & JSX.IntrinsicElements['button']> = ({
  filled,
  children,
  ...props
}) => (
  <button
    className={`${styles.toggle} ${filled ? styles.filled : ''}`}
    onClick={(e) => {
      console.log(e);
      e.preventDefault();
      e.stopPropagation();
    }}
    {...props}
  >
    {children}
  </button>
);
