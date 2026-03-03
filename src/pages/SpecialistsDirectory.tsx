import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { specialists, categories, type SpecialistCategory } from "@/data/specialists";
import { Quote } from "lucide-react";

const SpecialistsDirectory = () => {
  const [activeCategory, setActiveCategory] = useState<SpecialistCategory>("All");

  const filtered =
    activeCategory === "All"
      ? specialists
      : specialists.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="container px-6 text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Our Network
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Meet Our Specialists<span className="text-primary">.</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            World-class doctors, coaches, and wellness experts united by a commitment to test-based, evidence-driven health optimisation.
          </p>
        </div>
      </section>

      {/* Directory */}
      <section className="pb-20 md:pb-32">
        <div className="container px-6">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Category Sidebar */}
            <aside className="lg:w-56 shrink-0">
              <div className="lg:sticky lg:top-24">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  Categories
                </p>
                <nav className="flex lg:flex-col gap-2 flex-wrap">
                  {categories.map((cat) => {
                    const count =
                      cat === "All"
                        ? specialists.length
                        : specialists.filter((s) => s.category === cat).length;
                    return (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-left text-sm px-4 py-2.5 rounded-lg transition-colors ${
                          activeCategory === cat
                            ? "bg-primary text-primary-foreground font-medium"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        {cat}
                        <span className="ml-2 opacity-60">({count})</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Cards Grid */}
            <div className="flex-1">
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((specialist) => (
                  <Link
                    key={specialist.slug}
                    to={`/specialists/${specialist.slug}`}
                    className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={specialist.image}
                        alt={specialist.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                        {specialist.category}
                      </span>
                      <h3 className="font-bold text-lg mt-1 group-hover:text-primary transition-colors">
                        {specialist.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {specialist.role}
                      </p>

                      {/* Mini quote */}
                      <div className="mt-3 flex items-start gap-2">
                        <Quote className="w-3 h-3 text-primary/40 mt-0.5 shrink-0" />
                        <p className="text-xs text-muted-foreground italic line-clamp-2">
                          {specialist.quote}
                        </p>
                      </div>

                      {specialist.omegaResults && (
                        <div className="mt-3 inline-block bg-primary/10 text-primary text-[10px] font-semibold px-2 py-1 rounded-md">
                          Omega: {specialist.omegaResults}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                  No specialists found in this category.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpecialistsDirectory;
