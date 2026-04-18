// Auto-generated from Stitch – "Onboarding"
// Project: Loop Appliance Repair (6348965613355372692)
import React from "react";

const html = `<!-- Top Navigation Shell (Suppressed for Onboarding as per instructions) -->
<header class="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-white/80 backdrop-blur-xl">
<div class="font-manrope italic font-black uppercase tracking-tighter text-zinc-900">LOOP</div>
<button class="text-zinc-500 font-manrope font-bold uppercase tracking-widest text-xs hover:opacity-80 transition-opacity">Skip</button>
</header>
<main class="min-h-screen flex flex-col px-8 pt-24 pb-12 max-w-lg mx-auto">
<!-- Top Section: Visual Branding -->
<section class="flex flex-col items-center mb-16">
<div class="relative w-32 h-32 flex items-center justify-center mb-8">
<!-- Abstract Infinity/Loop Icon -->
<svg class="w-full h-full text-secondary" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="8" viewbox="0 0 100 100">
<path d="M30,50 C30,35 40,25 50,25 C60,25 70,35 70,50 C70,65 60,75 50,75 C40,75 30,65 30,50 Z" opacity="0.1"></path>
<path d="M25,50 C25,30 40,15 55,15 C70,15 80,30 80,45 C80,60 70,85 50,85 C30,85 20,60 20,45 C20,30 30,15 45,15 C60,15 75,30 75,50"></path>
</svg>
<div class="absolute inset-0 bg-secondary/5 blur-3xl rounded-full"></div>
</div>
<h1 class="text-4xl md:text-5xl font-extrabold italic tracking-tight text-on-background text-left w-full leading-[1.1]">
                Donnez une seconde vie à vos appareils
            </h1>
</section>
<!-- Middle Section: Step-by-Step Flow -->
<section class="flex-grow space-y-12 mb-16">
<!-- Step 1 -->
<div class="flex gap-6 items-start group">
<div class="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
<span class="material-symbols-outlined text-2xl">document_scanner</span>
</div>
<div class="flex flex-col">
<h2 class="text-xl font-bold italic text-on-surface mb-1">Scanner</h2>
<p class="text-outline font-medium leading-relaxed">Scannez votre appareil pour un diagnostic instantané.</p>
</div>
</div>
<!-- Step 2 -->
<div class="flex gap-6 items-start group">
<div class="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
<span class="material-symbols-outlined text-2xl">calendar_today</span>
</div>
<div class="flex flex-col">
<h2 class="text-xl font-bold italic text-on-surface mb-1">Prendre RV</h2>
<p class="text-outline font-medium leading-relaxed">Choisissez un créneau avec un technicien certifié.</p>
</div>
</div>
<!-- Step 3 -->
<div class="flex gap-6 items-start group">
<div class="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
<span class="material-symbols-outlined text-2xl">quick_reorder</span>
</div>
<div class="flex flex-col">
<h2 class="text-xl font-bold italic text-on-surface mb-1">Attendre le Feed</h2>
<p class="text-outline font-medium leading-relaxed">Suivez l'arrivée de votre expert en temps réel.</p>
</div>
</div>
</section>
<!-- Bottom Section: Actions -->
<footer class="mt-auto space-y-4">
<button class="w-full h-16 bg-on-background text-surface rounded-xl font-bold text-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                Suivant
                <span class="material-symbols-outlined">chevron_right</span>
</button>
<button class="w-full h-14 bg-transparent text-outline font-bold text-sm hover:text-on-surface transition-colors">
                Retour en arrière
            </button>
</footer>
<!-- Progress Indicator -->
<div class="mt-8 flex justify-center gap-2">
<div class="h-1.5 w-8 rounded-full bg-secondary"></div>
<div class="h-1.5 w-1.5 rounded-full bg-surface-container-highest"></div>
<div class="h-1.5 w-1.5 rounded-full bg-surface-container-highest"></div>
</div>
</main>
<!-- Contextual Aesthetic Element: Subdued Background Texture -->
<div class="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
<div class="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[120px]"></div>
<div class="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] rounded-full bg-surface-container/50 blur-[100px]"></div>
</div>`;

export default function Screen_6c48501f952e4c1a832be0a092f453ac() {
  return (
    <div
      className="screen-wrapper w-full min-h-screen bg-white font-sans overflow-x-hidden"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
