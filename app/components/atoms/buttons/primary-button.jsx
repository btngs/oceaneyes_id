export default function PrimaryButton({
  onClick,
  className,
  text,
}) {
  return (
    <button
      onClick={onClick}
      className={`w-fit flex justify-center items-center py-2 px-4 rounded-[50px] text-white font-bold bg-secondary text-sm ${className}`}
    >
      {text}
    </button>
  )
}