// Shared inline SVG icons used across the site.

// The brand-green check mark that appears in tick-lists and price-card features.
export function Check({ size = 16, strokeWidth = 2.5 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
