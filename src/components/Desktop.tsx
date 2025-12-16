'use client';

import { useRef } from 'react';
import bg from '../../public/assets/wallpapers/3-2.jpg';
import styles from './Desktop.module.scss';
import Dock from './dock/Dock';
import MenuBar from './menu-bar/MenuBar';
import SplashScreen from './SplashScreen';
import { WindowsArea } from './window/WindowsArea';

export default function Desktop() {
  const outerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <main ref={outerRef} className={styles.desktop} style={{ backgroundImage: `url(${bg.src})` }}>
        <MenuBar />
        <WindowsArea />
        <Dock />
      </main>

      <SplashScreen />
    </>
  );
}
