import Desktop from '@/components/Desktop';
import { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function DesktopPage() {
  return <Desktop />;
}
