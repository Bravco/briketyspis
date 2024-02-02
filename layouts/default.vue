<template>
    <div>
        <header>
            <nav>
                <Logo/>
                <ul class="nav-list">
                    <li>
                        <NuxtLink to="">Domov</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="">Informácie</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="">Kontakt</NuxtLink>
                    </li>
                </ul>
                <NuxtLink class="primary-btn">
                    Call to Action
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
                        <NuxtLink to="">Domov</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="">Informácie</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="">Kontakt</NuxtLink>
                    </li>
                </ul>
                <ul class="footer-social-list">
                    <li class="footer-social-link">
                        <NuxtLink to="">
                            <Icon name="arcticons:bazos"/>
                        </NuxtLink>
                    </li>
                    <li class="footer-social-link">
                        <NuxtLink to="">
                            <Icon name="heroicons:phone"/>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <hr>
            <p>&copy; {{ new Date().getFullYear() }} | Vytvoril <NuxtLink to="https://hamracek.dev">Andrej Hamráček</NuxtLink></p>
        </footer>
    </div>
</template>

<style scoped>
    nav, main, footer {
        max-width: var(--content-max-width);
        margin: auto;
    }

    nav {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        place-items: center;
        padding-block: 1rem;
        z-index: 100;
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
        gap: 1rem;
    }

    .footer-social-link {
        font-size: 1.25rem;
    }

    @media only screen and (max-width: 576px) {
        nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .nav-list {
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
</style>