<template>
    <div>
        <section id="domov">
            <div class="content">
                <h1>Drevené Brikety <span>RUF</span></h1>
                <p class="paragraph">Ušetrite čas, energiu pripravovaním dreva na zimu a užívajte si bezstarostné kúrenie s drevenými briketami.</p>
                <div class="cta-list">
                    <NuxtLink class="primary-btn cta-btn" :to="{ path: '/', hash: '#objednavka'}">
                        Objednaj
                        <Icon name="majesticons:arrow-down"/>
                    </NuxtLink>
                    <NuxtLink class="outline-btn cta-btn" :to="{ path: '/', hash: '#info' }">
                        <Icon name="majesticons:information-circle-line"/>
                        Zisti viac
                    </NuxtLink>
                </div>
            </div>
            <Placeholder/>
        </section>
    </div>
</template>

<style scoped>
    #domov {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
        gap: 4rem;
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .paragraph {
        font-size: 1.125rem;
    }

    .cta-list {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    
    .cta-btn {
        margin-top: 2rem;
    }

    @media only screen and (max-width: 768px) {
        #domov {
            grid-template-columns: 1fr;
        }

        .cta-list {
            flex-wrap: wrap;
            row-gap: 0;
        }
    }
</style>