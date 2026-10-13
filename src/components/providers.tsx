"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import type { Locale, Localized } from "@/data/portfolio";

/* ------------------------------------------------------------------ */
/* Theme store                                                         */
/* ------------------------------------------------------------------ */

type Theme = "light" | "dark";

const STORAGE_THEME = "portfolio-theme";

const themeListeners = new Set<() => void>();

function subscribeTheme(callback: () => void) {
  themeListeners.add(callback);
  return () => themeListeners.delete(callback);
}

function getThemeSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getThemeServerSnapshot(): Theme {
  return "light";
}

function emitThemeChange() {
  themeListeners.forEach((listener) => listener());
}

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Reads the class set by the inline script in the root layout, then keeps
  // React in sync whenever it changes.
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot,
  );

  const setTheme = useCallback((next: Theme) => {
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      window.localStorage.setItem(STORAGE_THEME, next);
    } catch {
      /* storage may be unavailable; the class change still applies */
    }
    emitThemeChange();
  }, []);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within Providers");
  }
  return context;
}

/* ------------------------------------------------------------------ */
/* Language store                                                      */
/* ------------------------------------------------------------------ */

const STORAGE_LOCALE = "portfolio-locale";

const localeListeners = new Set<() => void>();

function subscribeLocale(callback: () => void) {
  localeListeners.add(callback);
  return () => localeListeners.delete(callback);
}

function getLocaleSnapshot(): Locale {
  return document.documentElement.lang === "id" ? "id" : "en";
}

function getLocaleServerSnapshot(): Locale {
  return "en";
}

function emitLocaleChange() {
  localeListeners.forEach((listener) => listener());
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (value: Localized) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeLocale,
    getLocaleSnapshot,
    getLocaleServerSnapshot,
  );

  const setLocale = useCallback((next: Locale) => {
    document.documentElement.lang = next;
    try {
      window.localStorage.setItem(STORAGE_LOCALE, next);
    } catch {
      /* ignore */
    }
    emitLocaleChange();
  }, []);

  const t = useCallback((value: Localized) => value[locale], [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within Providers");
  }
  return context;
}

/* ------------------------------------------------------------------ */
/* Combined providers                                                  */
/* ------------------------------------------------------------------ */

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
