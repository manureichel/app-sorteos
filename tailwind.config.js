/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Background colors
    { pattern: /^bg-(pink|rose|green|emerald|purple|gray|white)-(50|100|200|300|400|500|600|700|800)$/ },
    // Text colors
    { pattern: /^text-(pink|rose|green|emerald|purple|gray|white)-(50|100|200|300|400|500|600|700|800)$/ },
    // Border colors
    { pattern: /^border-(pink|rose|green|emerald|purple|gray|white)-(50|100|200|300|400|500|600|700|800)$/ },
    // Gradient from/to
    { pattern: /^(from|to|via)-(pink|rose|green|emerald|purple|gray|white)-(50|100|200|300|400|500|600|700|800)$/ },
    // Other utility patterns
    'gradient-to-r', 'gradient-to-br', 'gradient-to-b',
    'min-h-screen', 'min-h-40', 'max-h-96',
    'p-4', 'p-5', 'p-6', 'p-8', 'p-10',
    'mb-2', 'mb-3', 'mb-4', 'mb-6', 'mb-8', 'mb-10', 'mb-16',
    'gap-3', 'gap-4', 'gap-8',
    'rounded-xl', 'rounded-2xl', 'rounded-3xl',
    'border-2', 'border-4',
    'shadow-sm', 'shadow-lg', 'shadow-2xl',
    'hover:shadow-md',
    'hover:scale-105',
    'hover:bg-rose-100',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:hover:scale-100',
    'border-l-4',
    'last:border-b-0',
    'drop-shadow-lg',
    'uppercase', 'tracking-wide',
    'font-bold', 'font-semibold', 'font-medium',
    'text-sm', 'text-lg', 'text-2xl', 'text-4xl', 'text-5xl', 'text-6xl',
    'w-6', 'h-6', 'w-7', 'h-7',
    'flex-shrink-0',
    'flex-1',
    'lg:col-span-1', 'lg:col-span-2', 'lg:grid-cols-3',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
