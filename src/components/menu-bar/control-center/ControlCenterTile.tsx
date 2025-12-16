import styles from './ControlCenterTile.module.scss';

interface IControlCenterTileProps {
  grid: [rowStart: number, rowSpan: number];
  children: React.ReactNode;
}

export const ControlCenterTile = ({ grid, children }: IControlCenterTileProps) => {
  const [rowStart, rowsPan] = grid;

  return (
    <div
      className={styles.container}
      style={{ '--row-start': rowStart, '--row-span': rowsPan } as React.CSSProperties}
    >
      {children}
    </div>
  );
};
