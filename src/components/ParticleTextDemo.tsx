import { ParticleTextEffect } from "@/components/ui/particle-text-effect";

export function ParticleTextDemo() {
  return (
    <section className="py-20 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
            Partner Hub Academy
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl">
            Experience the future of interactive health and nutrition education. Let the particles guide you.
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <ParticleTextEffect />
        </div>
      </div>
    </section>
  );
}
