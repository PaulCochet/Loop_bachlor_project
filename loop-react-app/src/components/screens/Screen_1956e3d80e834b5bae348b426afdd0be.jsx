// Auto-generated from Stitch – "Tableau de bord - Post-réparation"
// Project: Loop Appliance Repair (6348965613355372692)
import React from "react";

const html = `<!-- TopAppBar -->
<header class="bg-[#f9f9f7]/80 dark:bg-[#1a1c1b]/80 backdrop-blur-lg fixed top-0 z-50 w-full shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
<div class="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-on-background cursor-pointer hover:opacity-80 transition-opacity" data-icon="menu">menu</span>
<h1 class="font-['Manrope'] italic font-black uppercase tracking-tighter text-3xl text-on-background">LOOP</h1>
</div>
</div>
</header>
<main class="pt-24 px-6 max-w-7xl mx-auto">
<!-- Hero Greeting -->
<section class="mt-8 mb-12">
<h2 class="text-5xl md:text-7xl italic-display text-on-background leading-none tracking-tighter max-w-2xl">
                Bonjour Sophie <br/>que répare t-on aujourd'hui ?
            </h2>
</section>
<!-- Impact Bento Grid -->
<section class="grid grid-cols-2 gap-4 mb-16">
<div class="bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between aspect-square md:aspect-auto md:h-64">
<div class="text-secondary text-4xl md:text-6xl font-black italic tracking-tighter mb-2">218 kg</div>
<div class="text-on-surface-variant font-medium uppercase tracking-widest text-xs">— CO₂ évité</div>
</div>
<div class="bg-secondary text-white p-8 rounded-xl flex flex-col justify-between aspect-square md:aspect-auto md:h-64 overflow-hidden relative">
<div class="relative z-10">
<div class="text-4xl md:text-6xl font-black italic tracking-tighter mb-2">1</div>
<div class="text-on-secondary-container font-medium uppercase tracking-widest text-xs">— appareil sauvé</div>
</div>
<div class="absolute -bottom-10 -right-10 opacity-10">
<span class="material-symbols-outlined text-[12rem]" data-icon="energy_savings_leaf">energy_savings_leaf</span>
</div>
</div>
</section>
<!-- Mes Demandes -->
<section class="mb-16">
<div class="flex justify-between items-end mb-8">
<h3 class="text-3xl italic-display text-on-background uppercase">Mes demandes</h3>
</div>
<button class="group w-full bg-on-background text-surface py-8 px-8 rounded-xl flex items-center justify-between active:scale-[0.98] transition-all duration-200">
<span class="text-2xl font-bold tracking-tight">Nouvelle demande</span>
<div class="bg-secondary p-3 rounded-full group-hover:rotate-90 transition-transform duration-300">
<span class="material-symbols-outlined text-white" data-icon="add">add</span>
</div>
</button>
</section>
<!-- Historique -->
<section class="mb-24">
<h3 class="text-3xl italic-display text-on-background uppercase mb-8">Historique</h3>
<!-- Selection Card Layout (No borders, just tonal shifts) -->
<div class="space-y-6">
<div class="bg-surface-container-low p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:bg-surface-container transition-colors">
<div class="flex items-center gap-6">
<div class="w-20 h-20 bg-surface-container-highest rounded-xl flex items-center justify-center">
<span class="material-symbols-outlined text-on-background text-3xl" data-icon="local_laundry_service">local_laundry_service</span>
</div>
<div>
<h4 class="text-xl font-bold text-on-background leading-tight">Lave-linge Samsung</h4>
<p class="text-outline text-sm font-medium">Réparé le 31 mars</p>
</div>
</div>
<div class="flex items-center justify-between md:justify-end gap-4">
<span class="bg-on-secondary-container text-secondary px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-sm">
                            RÉPARÉ
                        </span>
<span class="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
</div>
</div>
<!-- Secondary Entry (Placeholder for visual flow) -->
<div class="bg-surface-container-low/50 p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6 opacity-60">
<div class="flex items-center gap-6">
<div class="w-20 h-20 bg-surface-container-highest rounded-xl flex items-center justify-center grayscale">
<span class="material-symbols-outlined text-on-background text-3xl" data-icon="kitchen">kitchen</span>
</div>
<div>
<h4 class="text-xl font-bold text-on-background leading-tight text-slate-400">Réfrigérateur LG</h4>
<p class="text-outline text-sm font-medium">Entretien annuel — Janvier 2024</p>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- BottomNavBar -->
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-10 pb-8 pt-4 bg-white/90 dark:bg-[#1a1c1b]/95 backdrop-blur-md shadow-[0_-10px_40px_rgba(0,0,0,0.04)] rounded-t-[2rem]">
<!-- Accueil (Active) -->
<a class="flex flex-col items-center justify-center text-[#003cdd] dark:text-blue-400 font-bold scale-110 transition-all tap-highlight-transparent" href="#">
<span class="material-symbols-outlined mb-1" data-icon="home_repair_service" style="font-variation-settings: 'FILL' 1;">home_repair_service</span>
<span class="font-['Manrope'] font-medium text-[11px] uppercase tracking-widest">Accueil</span>
</a>
<!-- Suivie (Inactive) -->
<a class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white transition-colors tap-highlight-transparent" href="#">
<span class="material-symbols-outlined mb-1" data-icon="analytics">analytics</span>
<span class="font-['Manrope'] font-medium text-[11px] uppercase tracking-widest">Suivie</span>
</a>
</nav>
<!-- Background Decoration (Digital Artisan Aesthetic) -->
<div class="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-20 overflow-hidden">
<div class="absolute top-[20%] -left-[10%] w-[60%] h-[40%] bg-gradient-to-br from-secondary/10 to-transparent blur-[120px] rounded-full"></div>
<div class="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-gradient-to-tl from-surface-container-highest to-transparent blur-[100px] rounded-full"></div>
</div>`;

export default function Screen_1956e3d80e834b5bae348b426afdd0be() {
  return (
    <div
      className="screen-wrapper w-full min-h-screen bg-white font-sans overflow-x-hidden"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
