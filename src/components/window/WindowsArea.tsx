import { appsConfig } from '@/data/apps-config';
import { useAppsStore } from '@/stores/apps-store';
import React, { Suspense, useEffect } from 'react';
import { useShallow } from 'zustand/shallow';
import css from './WindowsArea.module.scss';

const Window = React.lazy(() => import('./Window'));

export const WindowsArea = () => {
  const openApps = useAppsStore((state) => state.openApps);
  const { activeApp, activeAppZIndex, setActiveAppZIndex } = useAppsStore(
    useShallow((state) => ({
      activeApp: state.activeApp,
      activeAppZIndex: state.activeAppZIndex,
      setActiveAppZIndex: state.setActiveAppZIndex,
    }))
  );

  // Update the active app Z Index here
  useEffect(() => {
    setActiveAppZIndex(activeAppZIndex + 2);
    console.log('Updated Z Index');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeApp]);

  return (
    <section className={css.container}>
      <Suspense fallback={<span></span>}>
        {(Object.keys(appsConfig) as (keyof typeof appsConfig)[]).map(
          (appID) =>
            openApps[appID] &&
            !appsConfig[appID].external_action && <Window key={appID} appID={appID} />
        )}
      </Suspense>
    </section>
  );
};
