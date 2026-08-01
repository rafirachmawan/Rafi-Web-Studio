/**
 * LazySection — Safe section wrapper.
 * Ensures smooth rendering without layout shifts or black screen flashes.
 */
export default function LazySection({
  children,
  className = "",
}) {
  return (
    <div className={`lazy-section ${className}`}>
      {children}
    </div>
  );
}
