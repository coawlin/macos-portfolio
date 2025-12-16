import { CloseIcon } from '@/assets/traffic-icons/Close.svg';
import { GreenLightIcon } from '@/assets/traffic-icons/GreenLightIcon';
import { MinimizeIcon } from '@/assets/traffic-icons/Minimize.svg';
import { appsConfig } from '@/data/apps-config';
import { AppID, useAppsStore } from '@/stores/apps-store';
import clsx from 'clsx';
import { useShallow } from 'zustand/shallow';
import styles from './TrafficLights.module.scss';

type TrafficLightProps = {
  appID: AppID;
  onMaximizeClick: () => void;
  class?: string | null;
};

export const TrafficLights = ({ appID, onMaximizeClick, class: className }: TrafficLightProps) => {
  const { activeApp, closeApp } = useAppsStore(
    useShallow((state) => ({
      activeApp: state.activeApp,
      closeApp: state.closeApp,
    }))
  );

  const closeDesktopApp = () => {
    closeApp(appID);
  };

  const greenLightAction = () => {
    if (appsConfig[appID].expandable) {
      // Action not available right now!
    } else {
      onMaximizeClick();
    }
  };

  return (
    <div className={clsx(styles.container, activeApp !== appID && styles.unFocussed, className)}>
      <button className={styles.closeLight} onClick={closeDesktopApp}>
        <CloseIcon />
      </button>
      <button className={styles.minimizeLight}>
        <MinimizeIcon />
      </button>
      <button className={styles.stretchLight} onClick={greenLightAction}>
        <GreenLightIcon {...appsConfig[appID]} />
      </button>
    </div>
  );
};
