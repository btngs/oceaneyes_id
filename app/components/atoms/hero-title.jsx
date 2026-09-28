export default function HeroTitle({
  text,
  className
}) {
  return (
    <h1 className={`font-primary font-semibold text-[36px] xl:text-[45px] text-white text-left ${className}`}>{text}</h1>
  )
}