import styles from './VSCode.module.scss';

export default function VSCode() {
  return (
    <section className={styles.container}>
      <iframe
        src="https://codesandbox.io/embed/github/coawlin/macos-portfolio/tree/main?fontsize=14&hidenavigation=1&view=editor&module=src/app/page.tsx"
        title="VS Code for macOS Web"
        className={styles.iframe}
      ></iframe>
    </section>
  );
}
