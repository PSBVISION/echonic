import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names into a single Tailwind-compatible string.
 *
 * @param inputs - Class values to merge.
 * @returns The merged class string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
