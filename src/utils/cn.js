// src/utils/cn.js
// Utility function to join class names

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
