// Auto-generated from Stitch – "Décrivez le problème"
// Project: Loop Appliance Repair (6348965613355372692)
import React from "react";

const html = `<div class="w-[390px] h-[844px] bg-surface-container-lowest relative flex flex-col overflow-hidden shadow-2xl">
<!-- TopAppBar (Mapped from JSON) -->
<header class="bg-[#f9f9f7]/80 backdrop-blur-xl docked full-width top-0 sticky z-50 shadow-[0_0_32px_rgba(26,28,27,0.06)] flex items-center w-full px-6 py-4">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-[#003cdd] cursor-pointer hover:opacity-80 transition-opacity active:scale-95 duration-200" data-icon="arrow_back">arrow_back</span>
<h1 class="font-['Manrope'] italic font-bold tracking-tight text-3xl text-[#003cdd]">Décrivez le problème</h1>
</div>
</header>
<main class="flex-1 px-8 pt-8 overflow-y-auto pb-32">
<!-- Step Indicator & Context -->
<div class="mb-12">
<span class="text-[#8C8C8C] font-label font-bold uppercase tracking-widest text-[10px]">Étape 2 sur 3</span>
<h2 class="font-headline italic font-extrabold text-[42px] leading-[1.1] text-on-background mt-2 tracking-tighter">Décrivez le problème</h2>
<p class="text-[#8C8C8C] mt-4 font-body text-lg">Répondez en quelques secondes</p>
</div>
<!-- Form Stack -->
<div class="flex flex-col space-y-12">
<!-- Field 1: Brand Input -->
<div class="flex flex-col gap-3">
<label class="font-label text-sm font-bold text-on-surface uppercase tracking-tight">Indiquez la marque de votre appareil</label>
<input class="w-full bg-surface-container-low border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-secondary text-on-background placeholder:text-outline/40" placeholder="samsung, smeg..." type="text"/>
</div>
<!-- Field 2: Toggle Row -->
<div class="flex items-center justify-between">
<label class="font-label text-sm font-bold text-on-surface uppercase tracking-tight">L'appareil s'allume-t-il ?</label>
<div class="flex gap-2 p-1 bg-surface-container rounded-full">
<button class="px-6 py-2 rounded-full font-bold text-xs bg-surface-container-lowest text-on-surface shadow-sm">Oui</button>
<button class="px-6 py-2 rounded-full font-bold text-xs text-outline hover:bg-surface-container-high transition-colors">Non</button>
</div>
</div>
<!-- Field 3: Toggle Row -->
<div class="flex items-center justify-between">
<label class="font-label text-sm font-bold text-on-surface uppercase tracking-tight">Y'a-t-il un code d'erreur ?</label>
<div class="flex gap-2 p-1 bg-surface-container rounded-full">
<button class="px-6 py-2 rounded-full font-bold text-xs text-outline hover:bg-surface-container-high transition-colors">Oui</button>
<button class="px-6 py-2 rounded-full font-bold text-xs bg-surface-container-lowest text-on-surface shadow-sm">Non</button>
</div>
</div>
<!-- Field 4: Text Area -->
<div class="flex flex-col gap-3">
<label class="font-label text-sm font-bold text-on-surface uppercase tracking-tight">Indiquez le problème de votre appareil</label>
<textarea class="w-full bg-surface-container-low border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-secondary text-on-background placeholder:text-outline/40 resize-none" placeholder="Décrivez les symptômes ici..." rows="4"></textarea>
</div>
</div>
</main>
<!-- Bottom Actions (Floating Layout) -->
<div class="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest to-transparent">
<div class="flex flex-col gap-4">
<button class="w-full bg-on-background text-surface py-5 rounded-xl font-bold text-lg hover:opacity-90 active:scale-[0.98] transition-all shadow-xl shadow-on-background/10">
                    Continuer
                </button>
<button class="w-full bg-transparent text-primary py-2 rounded-xl font-bold text-sm hover:text-on-background transition-colors uppercase tracking-widest">
                    Retour en arrière
                </button>
</div>
</div>
<!-- BottomNavBar (Mapped from JSON - Hidden on Transactional Screens as per Filter Rule) -->
<!-- Note: Navigation shell is suppressed here to prioritize the focused form canvas -->
</div>`;

export default function Screen_9ac6bee79b624681bc35976d6257a33c() {
  return (
    <div
      className="screen-wrapper w-full min-h-screen bg-white font-sans overflow-x-hidden"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
