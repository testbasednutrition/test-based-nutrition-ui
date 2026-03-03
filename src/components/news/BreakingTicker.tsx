import { Zap } from "lucide-react";

const headlines = [
  "WHO declares end to global mpox emergency",
  "New mRNA vaccine shows 94% efficacy against RSV in elderly",
  "UK approves at-home blood testing kits for NHS patients",
  "Breakthrough in regenerative medicine: lab-grown kidneys pass first human trial",
];

const BreakingTicker = () => (
  <div className="bg-primary text-primary-foreground overflow-hidden">
    <div className="container flex items-center h-10 gap-3 px-6">
      <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider shrink-0">
        <Zap className="w-3.5 h-3.5" /> Breaking
      </span>
      <div className="overflow-hidden flex-1">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...headlines, ...headlines, ...headlines].map((h, i) => (
            <span key={i} className="text-xs font-medium">
              {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default BreakingTicker;
