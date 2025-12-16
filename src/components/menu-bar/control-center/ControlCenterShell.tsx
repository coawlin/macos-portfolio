import { useEffect, useRef } from 'react';
import styles from './ControlCenterShell.module.scss';

type MenuShellProps = {
  children: React.ReactNode;
};

export const ControlCenterShell = ({ children }: MenuShellProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <section className={styles.container} ref={ref} tabIndex={-1}>
      {children}
    </section>
  );
};
