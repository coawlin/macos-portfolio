import { AppID } from '@/stores/apps-store';
import { lazy, memo, Suspense } from 'react';

type DesktopAppProps = {
  appID: AppID;
};

function DesktopApp({ appID }: DesktopAppProps) {
  // Map appID to correct folder and component names
  const appMapping: Record<string, { folder: string; component: string }> = {
    portfolio: { folder: 'portfolio', component: 'Portfolio' },
    vscode: { folder: 'vscode', component: 'VSCode' },
  };

  const mapping = appMapping[appID];

  // Dynamically import based on appID - only loads when this appID is rendered
  const LazyApp = lazy(() => import(`./${mapping.folder}/${mapping.component}`));

  return (
    <Suspense fallback={<span></span>}>
      <LazyApp />
    </Suspense>
  );
}

export default memo(DesktopApp);
