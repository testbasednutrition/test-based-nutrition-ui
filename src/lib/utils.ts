import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitialsAvatar(name: string): string {
  const parts = (name || 'TBN Specialist').trim().split(/\s+/);
  const initials = parts.length >= 2 
    ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
    : (parts[0] ? parts[0].slice(0, 2).toUpperCase() : 'TB');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="400" height="500">
    <rect width="400" height="500" fill="#f4f1ea"/>
    <circle cx="200" cy="180" r="65" fill="#dfd8cb"/>
    <path d="M 110 400 Q 200 290 290 400" fill="#dfd8cb"/>
    <text x="200" y="455" font-family="Playfair Display, Georgia, serif" font-size="32" font-weight="700" fill="#9f1e13" text-anchor="middle" letter-spacing="6">${initials}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
