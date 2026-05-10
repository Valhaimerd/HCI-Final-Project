export default function Icon({ name, alt = "", size = 22 }) {
  return (
    <img
      className="icon"
      src={`/icons/${name}.svg`}
      alt={alt}
      width={size}
      height={size}
      aria-hidden={alt ? "false" : "true"}
    />
  );
}
