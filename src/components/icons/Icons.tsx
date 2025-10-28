import React from "react";

export function Burger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Close(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RoomsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 10h16M4 10l2-6h12l2 6M6 10v8m12-8v8M9 18h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function AboutIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M4 20c1.5-4 6-6 8-6s6.5 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ServicesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 8h6v6H4V8Zm10 0h6v6h-6V8ZM8 18h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ContactIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 5h16v14H4V5Zm0 0l8 7 8-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function GmailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="2"
        ry="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M3 6l9 7 9-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 20V8l9 7 9-7v12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Real-looking Gmail app icon (multi-color "M" on white rounded square)
export const GmailOfficialAppIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 512 512"
    aria-hidden="true"
    className={className}
    {...props}
  >
    {/* White rounded background */}
    <rect x="24" y="24" width="464" height="464" rx="96" fill="#FFFFFF" />
    {/* subtle keyline like Android/iOS icons */}
    <rect
      x="24.5"
      y="24.5"
      width="463"
      height="463"
      rx="95.5"
      fill="none"
      stroke="#E5E7EB"
    />

    {/* Left leg + bottom-left (Blue) */}
    <path
      d="M96 360h128V160"
      fill="none"
      stroke="#4285F4"
      strokeWidth="48"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Right leg + bottom-right (Green) */}
    <path
      d="M416 360H288V160"
      fill="none"
      stroke="#34A853"
      strokeWidth="48"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Top left diagonal (Red) */}
    <path
      d="M96 160l160 128"
      fill="none"
      stroke="#EA4335"
      strokeWidth="48"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Top right diagonal (Yellow) */}
    <path
      d="M416 160L256 288"
      fill="none"
      stroke="#FBBC05"
      strokeWidth="48"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export default function MailIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="44" height="44" rx="10" fill="#3B82F6"/>
      <path d="M12 16.5H36C38.485 16.5 40.5 18.515 40.5 21V31.5C40.5 33.985 38.485 36 36 36H12C9.515 36 7.5 33.985 7.5 31.5V21C7.5 18.515 9.515 16.5 12 16.5Z"
            stroke="white" strokeWidth="3" fill="none" strokeLinejoin="round"/>
      <path d="M8 20.5L24 32.5L40 20.5"
            stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
