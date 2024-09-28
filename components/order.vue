<template>
    <div>
        <section id="objednavka">
            <Placeholder/>
            <div class="content">
                <h2>Vytvoriť objednávku</h2>
                <form class="contact-form" @submit.prevent="submit">
                    <div class="inputfield">
                        <label for="firstName">Meno</label>
                        <input v-model="state.firstName" type="text" name="firstName" id="firstName" placeholder=" " required>
                    </div>
                    <div class="inputfield">
                        <label for="lastName">Priezvisko</label>
                        <input v-model="state.lastName" type="text" name="lastName" id="lastName" placeholder=" " required>
                    </div>
                    <div class="inputfield">
                        <label for="phone">Telefón</label>
                        <input v-model="state.phone" type="tel" name="phone" id="phone" placeholder=" " required>
                    </div>
                    <div class="inputfield">
                        <label for="email">Email</label>
                        <input v-model="state.email" type="email" name="email" id="email" placeholder=" " required>
                    </div>
                    <div class="inputfield wide">
                        <label for="delivery">Doprava</label>
                        <select v-model="state.deliveryType" name="delivery" id="delivery" placeholder=" " required>
                            <option value="Doručenie na adresu">Doručenie na adresu</option>
                            <option value="Vlastný odber">Vlastný odber</option>
                        </select>
                    </div>
                    <div v-if="state.deliveryType === 'Doručenie na adresu'" class="inputfield">
                        <label for="city">Mesto</label>
                        <input v-model="state.city" type="text" name="city" id="city" placeholder=" " required>
                    </div>
                    <div v-if="state.deliveryType === 'Doručenie na adresu'" class="inputfield">
                        <label for="address">Adresa</label>
                        <input v-model="state.address" type="text" name="address" id="address" placeholder=" " required>
                    </div>
                    <!--<div class="inputfield">
                        <label for="unit">Jednotka</label>
                        <select v-model="state.unit" name="unit" id="unit" placeholder=" " required>
                            <option v-if="props.packagePrice !== 0" value="Balík">Balík</option>
                            <option v-if="props.palletPrice !== 0" value="Paleta">Paleta</option>
                        </select>
                    </div>-->
                    <div class="inputfield">
                        <label for="unit">Preferovaný dátum dodania</label>
                        <input v-model="state.date" type="date" required>
                    </div>
                    <div class="inputfield">
                        <label for="quantity">Množstvo</label>
                        <input v-model="state.quantity" type="number" oninput="this.value = Math.round(this.value);" name="quantity" id="quantity" min="1" max="100" step="1" placeholder=" " required>
                    </div>
                    <span v-if="success" class="success wide">
                        <Icon name="majesticons:badge-check" size="1.25rem"/>
                        Vaša objednávka bola úspešne odoslaná.<br>
                        <b>Budeme Vás kontaktovať emailom alebo telefonicky.</b>
                    </span>
                    <div v-else class="contact-form-footer wide">
                        <span class="price">~{{ estPrice.toFixed(2) }} €</span>
                        <button class="primary-btn wide" type="submit" :disabled="loading">
                            <Icon :name="loading ? 'eos-icons:loading' : 'majesticons:mail'" size="1.25rem"/>
                            <span v-if="!loading">Poslať</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        palletPrice: { type: Number, default: 0 },
        packagePrice: { type: Number, default: 0 },
    });

    const runtimeConfig = useRuntimeConfig();

    const loading = ref<boolean>(false);
    const success = ref<boolean>(false);
    const state = reactive({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        unit: "Paleta",
        date: "",
        quantity: "",
        deliveryType: "",
        city: "",
        address: "",
    });

    const estPrice = computed<number>(() => {
        return state.quantity && state.unit
            ? (state.unit === "Paleta" ? props.palletPrice : props.packagePrice) * parseFloat(state.quantity) 
            : 0;
    });

    async function submit() {
        loading.value = true;
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: runtimeConfig.public.WEB3FORMS_ACCESS_KEY,
                from_name: "briketyspis.sk",
                subject: "Objednávka brikiet",
                meno: state.firstName + " " + state.lastName,
                telefon: state.phone,
                email: state.email,
                datum: (new Date(state.date)).toDateString(),
                mnozstvo: state.quantity + " (" + state.unit + ")",
                doprava: state.deliveryType,
                adresa: state.deliveryType === "Doručenie na adresu" 
                    ? (state.city + ", " + state.address) 
                    : undefined,
            }),
        });

        const result = await response.json();
        if (result.success) {
            success.value = true;
            loading.value = false;
        }
    }
</script>

<style scoped>
    #objednavka {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        gap: 4rem;
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .contact-form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        place-items: center;
    }

    .contact-form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
    }

    .contact-form-footer .price {
        font-size: 2rem;
        font-weight: bold;
        color: var(--color-primary);
    }

    .wide {
        grid-column: span 2;
    }
    
    .success {
        text-align: center;
        color: var(--color-success);
    }

    .contact-form > * {
        width: 100%;
    }

    @media only screen and (max-width: 768px) {
        #objednavka {
            grid-template-columns: 1fr;
        }

        .inputfield {
            grid-column: span 2;
        }

        .contact-form-footer {
            flex-direction: column;
            align-items: flex-start;
        }

        button[type="submit"] {
            width: 100%;
        }
    }
</style>