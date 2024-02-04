<template>
    <div>
        <canvas id="canvas3d"/>
        <Hero/>
        <Info :pallet-price="PALLET_PRICE_EUR" :package-price="PACKAGE_PRICE_EUR"/>
        <Contact :pallet-price="PALLET_PRICE_EUR" :package-price="PACKAGE_PRICE_EUR"/>
    </div>
</template>

<script lang="ts" setup>
    import { Application } from "@splinetool/runtime";
    import gsap from "gsap";
    import ScrollTrigger from "gsap/dist/ScrollTrigger";
    
    const PALLET_PRICE_EUR : number = 240;
    const PACKAGE_PRICE_EUR : number = 2.50;

    gsap.registerPlugin(ScrollTrigger);

    onMounted(() => {
        const canvas = document.querySelector("#canvas3d") as HTMLCanvasElement;
        if (canvas) {
            const spline = new Application(canvas);
            spline.load("https://prod.spline.design/U4ebnhzLermBzsVJ/scene.splinecode").then(() => {
                const cube = spline.findObjectByName("Cube");
                
                if (cube) {
                    gsap.set(cube.position, { x: 260, y: 90 })

                    gsap.to(cube.rotation, {
                        y: Math.PI * 2,
                        repeat: -1,
                        duration: 30,
                        ease: "none",
                    });

                    gsap.timeline({
                        scrollTrigger: {
                            start: "top top",
                            endTrigger: "#info",
                            end: "bottom bottom",
                            scrub: true,
                        },
                    })
                    .to(cube.position, { x: 0, y: 0 }, 0)
                    .to(cube.scale, { x: 1.2, y: 1.2, z: 1.2 }, 0);

                    gsap.timeline({
                        scrollTrigger: {
                            trigger: "#info",
                            start: "bottom center",
                            endTrigger: "#kontakt",
                            end: "bottom bottom",
                            scrub: true,
                        },
                    })
                    .to(cube.position, { x: -260, y: -90 }, 0)
                    .to(cube.scale, { x: 1, y: 1, z: 1 }, 0);
                }
            });
        }
    });
</script>

<style scoped>
    #canvas3d {
        position: fixed;
        left: 0;
        top: 0;
        pointer-events: none;
        z-index: -1;
    }

    @media only screen and (max-width: 1024px) {
        #canvas3d {
            opacity: 0;
        }
    }
</style>