export default function BackgroundEffects() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-56 right-[8%] h-[34rem] w-[34rem] rounded-full bg-primary/[0.045] blur-[120px]" />
    </div>
  );
}
