<template>
    <div>
        <section id="info">
            <div>
                <h2><span><Icon name="majesticons:cube" size="2.5rem"/></span> Specifiká</h2>
                <p>Brikety sú <strong>vyrobené z mäkkých a tvrdých pilín</strong>.<br><strong>Paleta brikiet nahrádza 3-5 m³ dreva.<br>Vákuové balenie, vysoká výhrevnosť, výborné uskladnenie</strong></p>
            </div>
            <Placeholder style="grid-row: span 2;"/>
            <div>
                <h2><span><Icon name="majesticons:star" size="2.5rem"/></span> Cena</h2>
                <p>
                    <span v-if="props.palletPrice !== 0"><strong>{{ props.palletPrice?.toFixed(2) }} €</strong> ... 1 paleta (960kg)</span><br>
                    <span v-if="props.packagePrice !== 0"><strong>{{ props.packagePrice?.toFixed(2) }} €</strong> ... 1 balíček</span>
                </p>
            </div>
            <div>
                <h2><span><Icon name="majesticons:car" size="2.5rem"/></span> Dovoz</h2>
                <p>Dovoz je zabezpečený v okrese <strong>Spišská Nová Ves a okolie</strong> po dohode.</p>
            </div>
            <div>
                <h2><span><Icon name="majesticons:phone" size="2.5rem"/></span> Kontakt</h2>
                <ul>
                    <li>
                        <NuxtLink to="tel:+421948121289"><strong><u>+421 948 121 289</u></strong></NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="mailto:briketyspis@gmail.com"><strong><u>briketyspis@gmail.com</u></strong></NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="https://wa.me/+421948121289" target="_blank"><strong><u>Whatsapp</u></strong></NuxtLink>
                    </li>
                </ul>
                <p>V prípade otázok nás neváhajte kontaktovať.</p>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        palletPrice: { type: Number, default: 0 },
        packagePrice: { type: Number, default: 0 },
    });
</script>

<style scoped>
    #info {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        align-items: center;
        gap: 4rem;
    }

    @media only screen and (max-width: 768px) {
        #info {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }
</style>