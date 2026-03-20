import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Format date string to locale */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/** Truncate text to a given character limit */
export function truncate(text: string, limit: number): string {
  return text.length > limit ? text.slice(0, limit) + '...' : text
}

/** Delay promise */
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

/** Generate unique ID */
export const uid = () => Math.random().toString(36).slice(2, 9)

/** Clamp a number between min and max */
export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)
