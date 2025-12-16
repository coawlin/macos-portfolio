import AppleIcon from '@mui/icons-material/Apple';
import { useRef } from 'react';
import { ControlCenterToggle } from './control-center/ControlCenterToggle';
import styles from './MenuBar.module.scss';
import MenuBarTime from './MenuBarTime';

const MenuBar = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <header className={styles.menuBar} ref={parentRef}>
      <AppleIcon className={styles.appleIcon} sx={{ width: 19, height: 19 }} />
      <div className={styles.rightMenuBar}>
        <ControlCenterToggle />
        <MenuBarTime />
      </div>
    </header>
  );
};

export default MenuBar;
