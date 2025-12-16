'use client';

import { appsConfig } from '@/data/apps-config';
import { useAppsStore } from '@/stores/apps-store';
import { useMotionValue } from 'framer-motion';
import React from 'react';
import { useShallow } from 'zustand/shallow';
import styles from './Dock.module.scss';
import { DockItem } from './DockItem';

export default function Dock() {
  const { openApps } = useAppsStore(
    useShallow((state) => ({
      openApps: state.openApps,
    }))
  );

  const mouseX = useMotionValue<number | null>(null);
  return (
    <section className={styles.container}>
      <div
        className={styles.dockElement}
        onMouseMove={(event) => mouseX.set(event.nativeEvent.x)}
        onMouseLeave={() => mouseX.set(null)}
      >
        {(Object.keys(appsConfig) as Array<keyof typeof appsConfig>).map((appID) => (
          <React.Fragment key={appID}>
            {appsConfig[appID].dock_breaks_before && (
              <div className={styles.divider} key={`${appID}-divider`} aria-hidden="true" />
            )}
            <DockItem
              appID={appID}
              mouseX={mouseX}
              isOpen={openApps[appID]}
              {...appsConfig[appID]}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
