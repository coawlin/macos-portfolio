import styles from './ControlCenterSurface.module.scss';

interface IControlCenterSurfaceProps {
  grid: [[columnStart: number, columnSpan: number], [rowStart: number, rowSpan: number]];
  children: React.ReactNode;
}

export const ControlCenterSurface = ({ grid, children }: IControlCenterSurfaceProps) => {
  const [[columnStart, columnSpan], [rowStart, rowSpan]] = grid;

  return (
    <section
      className={styles.container}
      style={
        {
          '--column-start': columnStart,
          '--column-span': columnSpan,
          '--row-start': rowStart,
          '--row-span': rowSpan,
        } as React.CSSProperties
      }
    >
      {children}
    </section>
  );
};
