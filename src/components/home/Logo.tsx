import { LogoIcon } from "./icons";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center ${className || ""}`}>
      <div className="mr-2 rounded-md bg-blue-600 p-1.5">
        <LogoIcon className="h-5 w-5" />
      </div>
      <span className="text-2xl font-extrabold tracking-wide text-blue-600 drop-shadow-sm">
        Vayu
      </span>
    </div>
  );
}
