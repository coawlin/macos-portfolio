import ControlCenterSvg from '@/assets/sf-icons/ControlCenter.svg';
import { useOutsideClick } from '@/hooks/use-click-outside';
import { useFocusOutside } from '@/hooks/use-focus-outside';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import { ControlCenter } from './ControlCenter';
import styles from './ControlCenterToggle.module.scss';

export const ControlCenterToggle = () => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [state, setState] = useState<'visible' | 'hidden'>('hidden');

  const show = () => setState('visible');
  const hide = () => setState('hidden');

  useOutsideClick(containerRef, hide);
  useFocusOutside(containerRef, hide);

  return (
    <div className="container" ref={containerRef}>
      <button className={styles.button} onClick={show} onFocus={show}>
        <ControlCenterSvg />
      </button>
      <div className={clsx(styles.menuParent, state === 'hidden' && styles.hidden)}>
        <ControlCenter />
      </div>
    </div>
  );
};
