<template>
    <div>
        <canvas id="canvas3d"/>
        <Hero/>
        <Info :pallet-price="PALLET_PRICE_EUR" :package-price="PACKAGE_PRICE_EUR"/>
        <Order :pallet-price="PALLET_PRICE_EUR" :package-price="PACKAGE_PRICE_EUR"/>
        <Newsletter/>
    </div>
</template>

<script lang="ts" setup>
    import { Application } from "@splinetool/runtime";
    import gsap from "gsap";
    import ScrollTrigger from "gsap/src/ScrollTrigger";

    const PALLET_PRICE_EUR : number = 200; // 0 = remove PALLET OPTION
    const PACKAGE_PRICE_EUR : number = 0; // 0 = remove PACKAGE OPTION

    gsap.registerPlugin(ScrollTrigger);

    onMounted(() => {
        const canvas = document.querySelector("#canvas3d") as HTMLCanvasElement;
        if (canvas) {
            const spline = new Application(canvas);
            spline.load("https://prod.spline.design/U4ebnhzLermBzsVJ/scene.splinecode").then(() => {
                const object = spline.findObjectByName("Object");
                const xTranslate = "400";
                
                if (object) {
                    gsap.set(canvas, { x: xTranslate });

                    gsap.to(object.rotation, {
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
                    .to(canvas, { x: 0 }, 0)
                    .to(object.scale, { x: 1.1, y: 1.1, z: 1.1 }, 0);

                    gsap.timeline({
                        scrollTrigger: {
                            trigger: "#info",
                            start: "bottom center",
                            endTrigger: "#objednavka",
                            end: "bottom bottom",
                            scrub: true,
                        },
                    })
                    .to(canvas, { x: -xTranslate }, 0)
                    .to(object.scale, { x: 1, y: 1, z: 1 }, 0);

                    gsap.timeline({
                        scrollTrigger: {
                            trigger: "#objednavka",
                            start: "bottom center",
                            endTrigger: "#novinky",
                            end: "bottom bottom",
                            scrub: true,
                        },
                    }).to(canvas, { x: xTranslate }, 0);
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

    @media only screen and (max-width: 768px) {
        #canvas3d {
            opacity: 0;
        }
    }
</style>