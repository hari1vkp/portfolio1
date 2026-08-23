const variants = {
  primary:
    'bg-swiss-fg text-white border-4 border-swiss-fg hover:bg-swiss-accent hover:border-swiss-accent',
  secondary:
    'bg-white text-swiss-fg border-4 border-swiss-fg hover:bg-swiss-fg hover:text-white',
  accent:
    'bg-swiss-accent text-white border-4 border-swiss-accent hover:bg-swiss-fg hover:border-swiss-fg',
}

export default function Button({
  variant = 'primary',
  href = '#contact',
  children,
  className = '',
  ...rest
}) {
  return (
    <a
      href={href}
      className={`swiss-focus inline-flex h-16 items-center justify-center px-8 text-sm font-bold uppercase tracking-label transition-colors duration-200 ease-out ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
