// Auto-generated from Stitch – "Suivi en temps réel"
// Project: Loop Appliance Repair (6348965613355372692)
import React from "react";

const html = `<!-- TopAppBar -->
<nav class="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 h-16 bg-white/80 dark:bg-stone-950/80 backdrop-blur-xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.06)]">
<div class="flex items-center gap-4">
<button class="p-2 -ml-2 hover:bg-stone-100/50 dark:hover:bg-stone-800/50 transition-colors rounded-full active:opacity-70 active:scale-95">
<span class="material-symbols-outlined text-stone-700 dark:text-stone-300">arrow_back</span>
</button>
<h1 class="italic font-black text-stone-900 dark:text-stone-100 tracking-tighter text-2xl uppercase">SUIVIE</h1>
</div>
<div class="flex items-center gap-2">
<button class="p-2 hover:bg-stone-100/50 dark:hover:bg-stone-800/50 transition-colors rounded-full">
<span class="material-symbols-outlined text-stone-700 dark:text-stone-300">help_outline</span>
</button>
</div>
</nav>
<main class="relative h-screen w-full">
<!-- Map Section (Top 55%) -->
<div class="h-[55%] w-full relative bg-surface-container overflow-hidden">
<img class="w-full h-full object-cover grayscale opacity-80" data-alt="Detailed minimalist city map with light gray streets and white blocks, showing an urban grid from a top-down perspective" data-location="Paris" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIODcNWU9kfpAO4xdBC978M-PPZmvjGs9HLI-o-DOG83EaWt-XprjheS2MtpJpB4Ijcc4Ev7-3zzwrEjatTaqiVB5_1OD_V-2QyZYlvyiHXfpDdezFE0jiDMybczZaF4q7KgavhjdX3e18gyOGs66TI8FsBtwdCCnkwZ0OvPfaoyiv2nKX20S7a1hkT4ul-V8t30MDKQBN4cl-VgBjw0vJzRKIjurCY-wSZ7gDi-WIIw79VY9tdI2IruDSiqunTl3X2pdjVxYK-Ak"/>
<!-- Real-time Status Pill -->
<div class="absolute top-20 left-1/2 -translate-x-1/2 z-10">
<div class="flex items-center gap-3 bg-surface-container-lowest/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg border border-outline-variant/20">
<div class="w-2.5 h-2.5 bg-secondary rounded-full pulse-effect"></div>
<span class="text-sm font-bold tracking-tight text-on-surface">Lucas arrive — <span class="text-secondary">Dans environ 12 min</span></span>
</div>
</div>
<!-- Custom Map Marker (Technician) -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div class="relative flex items-center justify-center">
<div class="absolute w-24 h-24 bg-secondary/10 rounded-full animate-ping"></div>
<div class="absolute w-12 h-12 bg-secondary/20 rounded-full pulse-effect"></div>
<div class="relative bg-secondary text-white p-3 rounded-full shadow-[0_0_20px_rgba(0,60,221,0.4)]">
<span class="material-symbols-outlined text-2xl" style="font-variation-settings: 'FILL' 1;">directions_car</span>
</div>
</div>
</div>
</div>
<!-- Bottom Panel (Bottom 45%) -->
<div class="absolute bottom-0 left-0 w-full h-[48%] bg-surface-container-lowest rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.08)] z-20 flex flex-col">
<!-- Drag Handle -->
<div class="w-12 h-1 bg-surface-container-highest rounded-full mx-auto mt-4"></div>
<div class="flex-1 overflow-y-auto px-8 pt-6 pb-24">
<!-- Panel Header -->
<div class="mb-8">
<h2 class="text-4xl italic font-black text-on-surface uppercase tracking-tighter leading-none mb-1">Lucas arrive</h2>
<p class="text-outline font-medium text-lg">Dans environ 12 min</p>
</div>
<!-- Technician Card -->
<div class="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl mb-10">
<div class="flex items-center gap-4">
<div class="w-14 h-14 rounded-xl overflow-hidden bg-surface-container-highest">
<img class="w-full h-full object-cover" data-alt="Professional portrait of a friendly technician in a clean uniform, smiling slightly, high-end studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS3XvbPCg_juh_zZ0AWOgjZGYAybKLmFpG5sPhAfmTarS_UZyz5TCcDPE2RN9OsmwGkHCt1SDb9UY_hIZWhgeo7AJNnPMfEHfb3QfxaoMz84DvHqNRsj1NRzpgsZBs4t-Fl_AYq_mT633kLcSqEspKJjyCzr69FGg7EjH1wrRi_q34AYZKtCb41zYJmcEeGyiaRVFM-b3vZvF8JX6k43Y463KNG2URvFLSE8U25up-eU2mSfjiJ0XWbFp4o80fWaiWJdNMzJNsNOk"/>
</div>
<div>
<p class="text-lg font-bold text-on-surface">Lucas M.</p>
<div class="flex items-center gap-1.5 px-2 py-0.5 bg-secondary-container/10 rounded-full w-fit">
<span class="material-symbols-outlined text-[14px] text-secondary" style="font-variation-settings: 'FILL' 1;">verified</span>
<span class="text-[10px] font-extrabold uppercase tracking-widest text-secondary">Technicien certifié Loop</span>
</div>
</div>
</div>
<div class="flex gap-2">
<button class="w-11 h-11 flex items-center justify-center rounded-xl bg-surface-container-lowest shadow-sm text-secondary hover:bg-secondary hover:text-white transition-all">
<span class="material-symbols-outlined">call</span>
</button>
<button class="w-11 h-11 flex items-center justify-center rounded-xl bg-surface-container-lowest shadow-sm text-on-surface hover:bg-on-surface hover:text-white transition-all">
<span class="material-symbols-outlined">chat_bubble</span>
</button>
</div>
</div>
<!-- Vertical Timeline -->
<div class="space-y-0">
<!-- Step 1: Confirmed -->
<div class="flex gap-6">
<div class="flex flex-col items-center">
<div class="w-7 h-7 bg-secondary rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,60,221,0.2)]">
<span class="material-symbols-outlined text-white text-base" style="font-variation-settings: 'FILL' 1;">check</span>
</div>
<div class="w-0.5 h-12 bg-secondary/30 my-1"></div>
</div>
<div class="pt-0.5 pb-8">
<p class="text-on-surface font-medium opacity-60">Demande confirmée — <span class="font-normal italic">Hier à 18h32</span></p>
</div>
</div>
<!-- Step 2: En Route (Active) -->
<div class="flex gap-6">
<div class="flex flex-col items-center">
<div class="w-7 h-7 bg-surface-container-lowest border-2 border-secondary rounded-full flex items-center justify-center">
<div class="w-2.5 h-2.5 bg-secondary rounded-full pulse-effect"></div>
</div>
<div class="w-0.5 h-12 bg-surface-container-highest my-1"></div>
</div>
<div class="pt-0.5 pb-8">
<p class="text-on-surface font-bold text-lg">Lucas est en route</p>
<p class="text-secondary font-medium text-sm">Arrivée estimée dans 12 min</p>
</div>
</div>
<!-- Step 3: Intervention -->
<div class="flex gap-6">
<div class="flex flex-col items-center">
<div class="w-7 h-7 bg-surface-container-lowest border-2 border-surface-container-highest rounded-full"></div>
<div class="w-0.5 h-12 bg-surface-container-highest my-1"></div>
</div>
<div class="pt-0.5 pb-8">
<p class="text-outline font-bold text-lg opacity-40">Intervention</p>
</div>
</div>
<!-- Step 4: Verdict -->
<div class="flex gap-6">
<div class="flex flex-col items-center">
<div class="w-7 h-7 bg-surface-container-lowest border-2 border-surface-container-highest rounded-full"></div>
</div>
<div class="pt-0.5">
<p class="text-outline font-bold text-lg opacity-40">Verdict &amp; certificat</p>
</div>
</div>
</div>
</div>
</div>
</main>
<!-- BottomNavBar -->
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-8 pb-6 pt-3 bg-stone-50 dark:bg-stone-900 rounded-t-xl">
<!-- Accueil (Inactive) -->
<a class="flex flex-col items-center justify-center text-stone-500 dark:text-stone-500 opacity-60 hover:opacity-100 transition-opacity" href="#">
<span class="material-symbols-outlined mb-1">home</span>
<span class="font-headline uppercase text-[10px] font-bold tracking-widest">Accueil</span>
</a>
<!-- Suivie (Active) -->
<a class="flex flex-col items-center justify-center text-blue-600 dark:text-blue-400 bg-stone-100 dark:bg-stone-800 rounded-lg px-4 py-1 scale-90 transition-transform duration-150" href="#">
<span class="material-symbols-outlined mb-1" style="font-variation-settings: 'FILL' 1;">table_chart</span>
<span class="font-headline uppercase text-[10px] font-bold tracking-widest text-blue-700 dark:text-blue-400 font-bold">Suivie</span>
</a>
</nav>`;

export default function Screen_70194fc16c674b41b09895cf48316395() {
  return (
    <div
      className="screen-wrapper w-full min-h-screen bg-white font-sans overflow-x-hidden"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
