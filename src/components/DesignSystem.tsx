'use client';

import { createTheme, ThemeProvider } from '@matrixzero/ui';

// Company theme uses MDS’s generated semantic colors, radii, type, and motion.
const theme = createTheme({
  primary: '#b34429',
  shape: 'balanced',
  fontFamily: '"DM Sans", "PingFang SC", "Microsoft YaHei", sans-serif',
  neutral: 'cool',
  motion: 'standard',
  typeScale: 'standard',
});

export default function DesignSystem({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider mode="light" density="comfortable" className="metaleap-theme" style={theme}>
      {children}
    </ThemeProvider>
  );
}
