function Logo({ className = "" }) {
  return <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-8 w-8">
        <div className="absolute inset-0 rounded-full border-[3px] border-orange" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 30% 100%, 0 100%)" }} />
        <div className="absolute inset-1.5 rounded-full bg-orange/20" />
      </div>
      <div className="leading-none">
        <div className="text-base font-extrabold tracking-tight">ONE CALL</div>
        <div className="text-[9px] font-semibold tracking-[0.3em] text-muted-foreground">SOLUTIONS</div>
      </div>
    </div>;
}
export {
  Logo
};
