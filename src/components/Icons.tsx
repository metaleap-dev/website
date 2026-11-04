'use client';

import { ArrowDown, ArrowUpRight, Menu, X } from '@matrixzero/icons';

// Decorative icons inherit the surrounding label's color and accessible name.
export function Arrow() {
  return <ArrowUpRight className="ui-icon" size={20} aria-hidden="true" focusable="false" />;
}
export function DownArrow() {
  return <ArrowDown className="ui-icon" size={20} aria-hidden="true" focusable="false" />;
}
export function MenuIcon({ open }: { open: boolean }) {
  const Icon = open ? X : Menu;
  return <Icon className="ui-icon" size={20} aria-hidden="true" focusable="false" />;
}
