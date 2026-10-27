export default function LaurelHalf({ mirrored = false, className = "h-6 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 28"
      className={`${className} shrink-0 ${mirrored ? "scale-x-[-1]" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 26C10 23 5 16 5 3" strokeWidth="1.1" />
      <path d="M8 20c-3-1-5-3-6-6 3 0 6 2 6 6Z" fill="currentColor" stroke="none" />
      <path d="M6 14c-3-1-4-3-4-6 3 1 5 3 4 6Z" fill="currentColor" stroke="none" />
      <path d="M7 8C5 6 5 3 7 1c2 2 2 5 0 7Z" fill="currentColor" stroke="none" />
      <path d="M12 23c-3 0-5-1-7-3 3-1 6 0 7 3Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
