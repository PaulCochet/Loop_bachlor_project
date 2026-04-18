// Auto-generated from Stitch – "Récapitulatif"
// Project: Loop Appliance Repair (6348965613355372692)
import React from "react";

const html = `<!-- Top Navigation (Shell suppressed for Transactional screen as per mandate, but using provided TopAppBar for context if needed - Here showing only Back action as it's task-focused) -->
<nav class="sticky top-0 z-50 bg-neutral-50/80 backdrop-blur-md flex items-center justify-between px-6 py-4 w-full">
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-neutral-900 active:scale-95 duration-100" data-icon="arrow_back">arrow_back</button>
<span class="font-['Manrope'] italic font-black uppercase tracking-widest text-xl text-neutral-900">LOOP</span>
</div>
<div class="w-6"></div> <!-- Spacer for symmetry -->
</nav>
<main class="flex-grow px-6 pt-12 pb-24 max-w-lg mx-auto w-full">
<!-- Header Section -->
<header class="mb-12">
<h1 class="text-5xl font-black italic tracking-tight mb-2 text-on-background">Récapitulatif</h1>
<p class="text-outline font-medium">Vérifiez avant de confirmer</p>
</header>
<!-- Main Info Card -->
<div class="bg-surface-container-low rounded-xl p-8 mb-8 space-y-8">
<!-- 2x2 Grid Layout for Top Info Pairs -->
<div class="grid grid-cols-2 gap-y-10 gap-x-4">
<div class="flex flex-col gap-1">
<span class="text-xs font-bold uppercase tracking-widest text-outline">Appareil</span>
<span class="text-lg font-bold text-on-background">Lave-linge</span>
</div>
<div class="flex flex-col gap-1 text-right">
<span class="text-xs font-bold uppercase tracking-widest text-outline">Problème</span>
<span class="text-lg font-bold text-on-background">S'arrête en cours de cycle</span>
</div>
<div class="flex flex-col gap-1">
<span class="text-xs font-bold uppercase tracking-widest text-outline">Créneau</span>
<span class="text-lg font-bold text-on-background">Demain 9h–11h</span>
</div>
<div class="flex flex-col gap-1 text-right">
<span class="text-xs font-bold uppercase tracking-widest text-outline">Technicien</span>
<div class="flex items-center justify-end gap-2">
<span class="text-lg font-bold text-on-background">Lucas M.</span>
<div class="w-6 h-6 rounded-full overflow-hidden bg-surface-container-highest">
<img class="w-full h-full object-cover" data-alt="professional portrait of a male service technician in a clean uniform with a friendly expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd4-3_5IX4bIQqq-Mx7PIx-lOZAl5R9upBrnt6vjk9kzmuL5WyBm-m0QAFOpSwoMYWvdyDFx0jzwwcrImClbbm0f5hiQ1S5nkvaYUyAX_IOyzcAfg_t_sPbsluOpaCDDISJceoa348dHdCQYoSUxzL4ojOSGB5RpBwwwWmYmGdNdP_3MaHSHfR6lCFKX4GpulEwzgsxDFhgFVIbTi8YKzF2PIUJQBx-h6FAtE4ao49zMPMQKa_mN5XcxKrD7oE6RL_W0cgXyD0CV0"/>
</div>
</div>
</div>
</div>
<!-- Full Width Row for Address -->
<div class="pt-8 border-t border-outline-variant/20">
<div class="flex flex-col gap-1">
<span class="text-xs font-bold uppercase tracking-widest text-outline">Adresse</span>
<div class="flex items-start gap-2">
<span class="material-symbols-outlined text-outline text-lg" data-icon="location_on">location_on</span>
<span class="text-lg font-bold text-on-background leading-tight">12 rue des Lilas, Nantes</span>
</div>
</div>
</div>
<!-- Map Integration (Visual Placeholder) -->
<div class="mt-4 h-32 rounded-lg overflow-hidden bg-surface-container-highest relative">
<img class="w-full h-full object-cover opacity-60 grayscale contrast-125" data-alt="minimalist grayscale map illustration of a city district with clean lines and subtle blue markers" data-location="Nantes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfghi-b1cihOxE4XpuVu0AK3XxM5ZPPamMNdk7dhVzJ6vjOdzojKZ9jgXv0N9M9phPzS8bO-tWT-OOL-NLUBigj7XsNHOTM2QBW-jJv8oG5Oy0oNakv9q2BW3Euur8Emq_it-WN1_16dr7T3ooPHt29y82tj1hUuZt6R994FXkRpWlLrFXKSHZAcfqExd13bwlUdloAJ2MweH6sM7tWLkYgPFnSVD_V0yoVy7D_IYqK_Lmx5AbbjtkmwOrwUqWu1udKcGMQVBqyqk"/>
<div class="absolute inset-0 flex items-center justify-center">
<div class="w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-lg">
<div class="w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
<!-- Secondary Action -->
<div class="flex justify-center mb-16">
<button class="px-8 py-3 rounded-xl border border-outline text-on-background font-bold uppercase tracking-widest text-xs hover:bg-on-background hover:text-surface transition-colors active:scale-95 duration-100">
                Modifier
            </button>
</div>
</main>
<!-- Sticky Bottom CTA -->
<footer class="fixed bottom-0 left-0 right-0 p-6 bg-surface/90 backdrop-blur-md">
<div class="max-w-lg mx-auto">
<button class="w-full py-5 bg-on-background text-surface font-black uppercase tracking-[0.2em] rounded-xl text-sm shadow-xl active:scale-95 transition-transform duration-100 flex items-center justify-center gap-3">
                Continuer
                <span class="material-symbols-outlined text-lg" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</footer>`;

export default function Screen_d6c3ab2ba71942699032e86450769171() {
  return (
    <div
      className="screen-wrapper w-full min-h-screen bg-white font-sans overflow-x-hidden"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
