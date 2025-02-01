<template>
    <div>
        <header>
            <nav>
                <Logo/>
                <ul class="nav-list">
                    <li>
                        <NuxtLink to="/">Domov</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="{ path: '/', hash: '#info'}">Informácie</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="{ path: '/', hash: '#info'}">Kontakt</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="{ path: '/', hash: '#novinky'}">Novinky</NuxtLink>
                    </li>
                </ul>
                <NuxtLink class="primary-btn" :to="{ path: '/', hash: '#objednavka'}">
                    <Icon name="majesticons:lightning-bolt"/>
                    Objednaj
                </NuxtLink>
            </nav>
        </header>
        <main>
            <slot/>
        </main>
        <footer>
            <div class="footer-content">
                <Logo/>
                <ul class="footer-nav-list">
                    <li>
                        <NuxtLink to="/">Domov</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="{ path: '/', hash: '#info'}">Informácie</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="{ path: '/', hash: '#info'}">Kontakt</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="{ path: '/', hash: '#novinky'}">Novinky</NuxtLink>
                    </li>
                </ul>
                <ul class="footer-social-list">
                    <li>
                        <NuxtLink to="tel:+421948121289" aria-label="telefón"><Icon name="majesticons:phone"/></NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="mailto:briketyspis@gmail.com" aria-label="email"><Icon name="majesticons:mail"/></NuxtLink>
                    </li>
                </ul>
            </div>
            <hr>
            <p>&copy; 2024 | Vytvoril <NuxtLink to="https://hamracek.dev" target="_blank"><u>Andrej Hamráček</u></NuxtLink></p>
        </footer>
    </div>
</template>

<style scoped>
    nav, main, footer {
        max-width: var(--content-max-width);
        margin: auto;
        padding-inline: 2rem;
    }

    main {
        padding-top: 8rem;
    }

    header {
        width: 100%;
        position: fixed;
        background-color: var(--color-bg-primary);
        z-index: 100;
    }

    nav {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        place-items: center;
        padding-block: 1rem;
    }

    nav > *:first-child, .footer-content > *:first-child {
        justify-self: self-start;
    }

    nav > *:last-child, .footer-content > *:last-child {
        justify-self: self-end;
    }

    .nav-list {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        font-weight: 500;
    }

    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-block: 2rem;
    }

    .footer-content {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        place-items: center;
        margin-bottom: .5rem;
        padding-bottom: .5rem;
        border-bottom: 1px solid black;
    }

    .footer-nav-list {
        display: flex;
        gap: 2rem;
    }

    .footer-social-list {
        display: flex;
        gap: 1.5rem;
    }

    @media only screen and (max-width: 768px) {
        nav, .footer-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 1rem;
        }

        .nav-list, .footer-nav-list, .footer-social-list {
            justify-content: flex-start;
            gap: 1rem;
            row-gap: .5rem;
            flex-wrap: wrap;
        }

        nav .primary-btn {
            display: none;
        }
    }

    @media only screen and (max-width: 216px) {
        main {
            padding-top: 12rem;
        }
    }
</style>