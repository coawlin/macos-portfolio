import { createAppConfig } from '@/helpers/create-app-config';

const portfolio = createAppConfig({
  title: 'Portfolio',
  height: 700,
  width: 1200,
  icon: '/assets/app-icons/portfolio/portfolio.png',
});

const vscode = createAppConfig({
  title: 'VSCode',
  resizable: true,

  height: 600,
  width: 800,
  icon: '/assets/app-icons/vscode/vscode.png',
});

const viewSource = createAppConfig({
  title: `View Source`,
  resizable: true,

  should_open_window: false,
  external_action: () => window.open('https://github.com/coawlin/macos-portfolio', '_blank'),
  icon: '/assets/app-icons/viewsource/viewsource.png',
});

export const appsConfig = {
  portfolio,
  vscode,
  viewSource,
};
