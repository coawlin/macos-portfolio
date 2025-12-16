import { appsConfig } from '@/data/apps-config';
import { create } from 'zustand';

export type AppID = keyof typeof appsConfig;

export type AppsState = {
  openApps: Record<AppID, boolean>;
  activeApp: AppID | null;
  activeAppZIndex: number;
};

export type AppsActions = {
  closeApp: (appID: AppID) => void;
  openApp: (appID: AppID) => void;
  setActiveApp: (appID: AppID) => void;
  setActiveAppZIndex: (zIndex: number) => void;
};

export type AppsStore = AppsState & AppsActions;

export const defaultInitState: AppsState = {
  openApps: Object.fromEntries(
    Object.entries(appsConfig).map(([appID]) => [appID as AppID, false])
  ) as Record<AppID, boolean>,
  activeApp: null,
  activeAppZIndex: -2,
};

export const useAppsStore = create<AppsStore>((set) => ({
  ...defaultInitState,
  closeApp: (appID) =>
    set((state) => ({
      openApps: {
        ...state.openApps,
        [appID]: false,
      },
    })),
  openApp: (appID) =>
    set((state) => ({
      openApps: {
        ...state.openApps,
        [appID]: true,
      },
    })),
  setActiveApp: (appID) =>
    set(() => ({
      activeApp: appID,
    })),
  setActiveAppZIndex: (zIndex) =>
    set(() => ({
      activeAppZIndex: zIndex,
    })),
}));
