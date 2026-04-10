import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Props {
  categories: string[];
  active: string;
  onCategoryChange: (c: string) => void;
  search: string;
  onSearchChange: (s: string) => void;
}

const CategoryFilter = ({ categories, active, onCategoryChange, search, onSearchChange }: Props) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
    <div className="flex flex-wrap gap-2">
      {["All", ...categories].map((c) => (
        <button
          key={c}
          onClick={() => onCategoryChange(c)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            active === c
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
    <div className="relative w-full md:w-64">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <Input
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search articles…"
        className="pl-9 h-9 text-sm"
      />
    </div>
  </div>
);

export default CategoryFilter;
