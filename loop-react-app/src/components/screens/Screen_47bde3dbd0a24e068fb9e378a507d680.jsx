// Auto-generated from Stitch – "Résumé & paiement"
// Project: Loop Appliance Repair (6348965613355372692)
import React from "react";

const html = `<!-- Top Navigation Shell -->
<header class="fixed top-0 w-full z-50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-[30px] flex items-center justify-between px-6 py-4 max-w-[390px]">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-[#1a1c1b] dark:text-zinc-100" data-icon="arrow_back">arrow_back</span>
<span class="font-manrope italic font-black text-2xl uppercase tracking-tighter text-[#1a1c1b] dark:text-zinc-100">Payment Summary</span>
</div>
<div class="h-px w-full absolute bottom-0 left-0 bg-gradient-to-b from-[#eeeeec] to-transparent"></div>
</header>
<main class="pt-24 px-6">
<!-- Hero Header -->
<section class="mb-12">
<h1 class="text-4xl italic font-black text-on-background leading-tight tracking-tighter uppercase mb-2">Résumé &amp; paiement</h1>
<p class="text-primary font-medium text-lg">Intervention du mardi 31 mars</p>
</section>
<!-- Invoice Card -->
<section class="mb-10">
<div class="bg-surface-container-low rounded-xl p-6 shadow-[0_0_32px_rgba(26,28,27,0.04)]">
<div class="space-y-6">
<div class="flex justify-between items-center group">
<span class="text-primary font-medium text-base">Diagnostic</span>
<span class="text-on-surface font-bold text-base">Inclus</span>
</div>
<div class="flex justify-between items-center">
<span class="text-primary font-medium text-base">Main d'oeuvre</span>
<span class="text-on-surface font-bold text-base">45€</span>
</div>
<div class="flex justify-between items-center">
<span class="text-primary font-medium text-base">Pièce pompe vidange</span>
<span class="text-on-surface font-bold text-base">38€</span>
</div>
</div>
<!-- Total Row -->
<div class="mt-8 pt-6 border-t border-outline-variant/20 flex justify-between items-center">
<span class="text-on-background font-black text-xl italic uppercase tracking-tight">Total</span>
<span class="text-on-background font-black text-2xl italic tracking-tighter">83€</span>
</div>
</div>
</section>
<!-- Payment Method Section -->
<section class="mb-12">
<h2 class="text-on-background font-black text-lg italic uppercase tracking-tight mb-6">Moyen de paiement</h2>
<div class="flex items-center gap-4 bg-surface-container-lowest p-5 rounded-xl mb-4 border border-outline-variant/10">
<div class="w-12 h-8 bg-surface-container flex items-center justify-center rounded-lg">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">credit_card</span>
</div>
<div class="flex-grow">
<p class="text-on-surface font-bold text-base">•••• 4242</p>
<p class="text-outline text-sm">Expire 09/26</p>
</div>
<span class="material-symbols-outlined text-outline text-sm" data-icon="check_circle" style="font-variation-settings: 'FILL' 1;">check_circle</span>
</div>
<button class="w-full py-4 px-6 border border-outline text-on-surface font-bold text-sm rounded-xl hover:bg-surface-container-low transition-colors duration-200">
                Changer de moyen de paiement
            </button>
</section>
<!-- Fixed Bottom Action Area -->
<div class="mt-8">
<button class="w-full bg-on-background text-surface py-5 rounded-xl font-black italic uppercase text-lg tracking-widest shadow-xl active:scale-[0.98] transition-all duration-150">
                Payer 83€
            </button>
<div class="flex items-center justify-center gap-2 mt-4 text-outline">
<span class="material-symbols-outlined text-base" data-icon="lock">lock</span>
<span class="text-xs font-medium uppercase tracking-widest">Paiement 100% sécurisé</span>
</div>
</div>
</main>
<!-- Bottom Navigation Shell (Contextual: Task-focused pages should prioritize content canvas, but keeping for structural integrity if needed) -->
<nav class="fixed bottom-0 w-full h-20 bg-[#f9f9f7] dark:bg-zinc-950 flex justify-around items-center px-4 pb-safe max-w-[390px] shadow-[0_-4px_24px_rgba(26,28,27,0.04)]">
<div class="flex flex-col items-center justify-center text-[#464545] dark:text-zinc-500 opacity-60 hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined mb-1" data-icon="explore">explore</span>
<span class="font-manrope font-medium text-[11px]">Explore</span>
</div>
<div class="flex flex-col items-center justify-center text-[#464545] dark:text-zinc-500 opacity-60 hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined mb-1" data-icon="settings_suggest">settings_suggest</span>
<span class="font-manrope font-medium text-[11px]">Repairs</span>
</div>
<div class="flex flex-col items-center justify-center text-[#464545] dark:text-zinc-500 opacity-60 hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined mb-1" data-icon="history">history</span>
<span class="font-manrope font-medium text-[11px]">History</span>
</div>
<div class="flex flex-col items-center justify-center text-[#003cdd] dark:text-[#0D46F2] font-bold">
<span class="material-symbols-outlined mb-1 scale-110 duration-300 ease-out" data-icon="person">person</span>
<span class="font-manrope font-medium text-[11px]">Profile</span>
</div>
</nav>`;

export default function Screen_47bde3dbd0a24e068fb9e378a507d680() {
  return (
    <div
      className="screen-wrapper w-full min-h-screen bg-white font-sans overflow-x-hidden"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
