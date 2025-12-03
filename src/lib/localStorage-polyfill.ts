/**
 * Polyfill for localStorage to prevent SSR errors
 * This should be imported at the top of your app to ensure
 * localStorage is available during SSR (as a no-op)
 */

if (typeof window === 'undefined') {
  // Create a mock localStorage for SSR
  const localStorageMock = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    get length() {
      return 0;
    },
    key: () => null,
  };

  // Make it available globally during SSR
  (global as any).localStorage = localStorageMock;
}


