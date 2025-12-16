'use client';

import AppleIcon from '@mui/icons-material/Apple';
import { motion } from 'framer-motion';
import styles from './SplashScreen.module.scss';

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <motion.div
      initial={{ visibility: 'visible' }}
      animate={{ visibility: 'hidden' }}
      transition={{ delay: 2, duration: 0.5 }}
      onAnimationComplete={() => onComplete?.()}
      className={styles.splashScreen}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <AppleIcon sx={{ width: '6em', height: '6em' }} />
      </motion.div>

      {/* Loading Bar */}
      <div className={styles.progressBar}>
        <motion.div
          className={styles.progressIndicator}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}
