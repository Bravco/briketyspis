<template>
    <div>
        <section id="novinky">
            <div class="content">
                <h2>Novinky</h2>
                <p>Prihlásením na odber našich noviniek získate exkluzívne informácie o zmene cien.</p>
                <form class="newsletter-form" @submit.prevent="submit">
                    <div class="inputfield">
                        <label for="email">Email</label>
                        <input v-model="email" type="email" name="email" id="email" placeholder=" " required>
                    </div>
                    <span v-if="success" class="success">
                        <Icon name="majesticons:badge-check" size="1.25rem"/>
                        Úspešne ste sa prihlásili na odber noviniek.
                    </span>
                    <button v-else class="primary-btn" type="submit" :disabled="loading">
                        <Icon :name="loading ? 'eos-icons:loading' : 'majesticons:mail'" size="1.25rem"/>
                        <span v-if="!loading">Odoberať</span>
                    </button>
                </form>
            </div>
            <Placeholder/>
        </section>
    </div>
</template>

<script lang="ts" setup>
    const runtimeConfig = useRuntimeConfig();

    const loading = ref<boolean>(false);
    const success = ref<boolean>(false);
    const email = ref<string>("");

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
                subject: "Odber noviniek",
                email: email.value,
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
    #novinky {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        gap: 4rem;
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .newsletter-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .success {
        color: var(--color-success);
    }

    @media only screen and (max-width: 768px) {
        #novinky {
            grid-template-columns: 1fr;
        }

        button[type="submit"] {
            width: 100%;
        }
    }
</style>