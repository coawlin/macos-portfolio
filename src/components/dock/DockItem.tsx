import { appsConfig } from '@/data/apps-config';
import { AppID, useAppsStore } from '@/stores/apps-store';
import useRaf from '@rooks/use-raf';
import { motion, MotionValue, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { RefObject, useRef, useState } from 'react';
import { useShallow } from 'zustand/shallow';
import styles from './DockItem.module.scss';

export function DockItem({
  mouseX,
  appID,
  isOpen,
  ...appConfig
}: {
  mouseX: MotionValue<number | null>;
  appID: AppID;
  isOpen: boolean;
} & (typeof appsConfig)[AppID]) {
  const [animateObj, setAnimateObj] = useState({ translateY: ['0%', '0%', '0%'] });
  const { openApp: openAppFromStore, setActiveApp } = useAppsStore(
    useShallow((state) => ({
      openApp: state.openApp,
      setActiveApp: state.setActiveApp,
    }))
  );

  const imgRef = useRef<HTMLImageElement | null>(null);

  const { width } = useDockHoverAnimation(mouseX, imgRef);

  function openApp(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (appConfig.external_action) return void appConfig.external_action(e);

    openAppFromStore(appID);
    setActiveApp(appID);
  }

  return (
    <button
      className={styles.dockItemButton}
      aria-label={`Launch ${appConfig.title} app`}
      onClick={openApp}
    >
      <p className={styles.tooltip}>{appConfig.title}</p>
      <motion.span
        onTap={() => setAnimateObj({ translateY: ['0%', '-39.2%', '0%'] })}
        initial={false}
        animate={animateObj}
        transition={{ type: 'tween', duration: 0.7, ease: 'easeInOut' }}
        transformTemplate={({ translateY }) => `translateY(${translateY})`}
      >
        <motion.img
          ref={imgRef}
          src={appsConfig[appID].icon}
          draggable={false}
          style={{ width, willChange: 'width' }}
          alt={`${appConfig.title} app icon`}
        />
      </motion.span>
      <div className={styles.dot} style={{ '--opacity': +isOpen } as React.CSSProperties} />
    </button>
  );
}

const baseWidth = 57.6;
const distanceLimit = baseWidth * 6;
const beyondTheDistanceLimit = distanceLimit + 1;
const distanceInput = [
  -distanceLimit,
  -distanceLimit / 1.25,
  -distanceLimit / 2,
  0,
  distanceLimit / 2,
  distanceLimit / 1.25,
  distanceLimit,
];
const widthOutput = [
  baseWidth,
  baseWidth * 1.1,
  baseWidth * 1.414,
  baseWidth * 2,
  baseWidth * 1.414,
  baseWidth * 1.1,
  baseWidth,
];

const useDockHoverAnimation = (
  mouseX: MotionValue<number | null>,
  ref: RefObject<HTMLImageElement | null>
) => {
  const distance = useMotionValue(beyondTheDistanceLimit);

  const widthPX: MotionValue<number> = useSpring(
    useTransform(distance, distanceInput, widthOutput),
    {
      stiffness: 1300,
      damping: 82,
    }
  );

  const width = useTransform(widthPX, (width) => `${width / 16}rem`);

  useRaf(() => {
    const el = ref.current;
    const mouseXVal = mouseX.get();
    if (el && mouseXVal !== null) {
      const rect = el.getBoundingClientRect();

      const imgCenterX = rect.left + rect.width / 2;

      // difference between the x coordinate value of the mouse pointer
      // and the img center x coordinate value
      const distanceDelta = mouseXVal - imgCenterX;
      distance.set(distanceDelta);
      return;
    }

    distance.set(beyondTheDistanceLimit);
  }, true);

  return { width };
};
