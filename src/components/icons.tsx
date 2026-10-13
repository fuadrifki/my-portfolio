import type { SVGProps } from "react";

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.18 7.69 10.67.56.1.77-.24.77-.54 0-.27-.01-1.17-.02-2.12-3.13.68-3.79-1.34-3.79-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 .1.71 1.95 1.02 2.42.56.95 1.47.68 1.83.52.06-.4.22-.68.4-.84-2.5-.29-5.13-1.25-5.13-5.57 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.44.11-3 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 2.8-.38c.95 0 1.91.13 2.8.38 2.14-1.45 3.08-1.15 3.08-1.15.61 1.56.23 2.71.11 3 .72.79 1.16 1.79 1.16 3.02 0 4.33-2.64 5.27-5.15 5.55.23.2.43.58.43 1.18 0 .85-.01 1.54-.01 1.75 0 .3.2.65.78.54a11.26 11.26 0 0 0 7.68-10.67C23.25 5.48 18.27.5 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function MonogramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <text
        x="16"
        y="17"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="var(--font-sans), system-ui, sans-serif"
        fontSize="13"
        fontWeight="700"
        letterSpacing="-0.5"
        fill="currentColor"
      >
        FR
      </text>
    </svg>
  );
}
