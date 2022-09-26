import React, { useEffect, useRef, Suspense } from "react";
import $ from 'jquery';

// Grid from Material UI
import Grid2 from '@mui/material/Unstable_Grid2';

// All Chip components
import Chip from "./Chip";
import apiHeroChip from "../chip/api-hero-chip.js";
import designHeroChip from "../chip/design-hero-chip.js";
import frameworkHeroChip from "../chip/framework-hero-chip.js";
import languageHeroChip from "../chip/language-hero-chip.js";
import libraryHeroChip from "../chip/library-hero-chip.js";
import platformHeroChip from "../chip/platform-hero-chip.js";

// All Threejs components
import { Canvas } from "@react-three/fiber";
import Three from "./Three";
import { OrbitControls } from "@react-three/drei";
import RickMorty from "./Rnm"

function createApiChips(apiHeroChip) {
    return (
        <Chip
            id={apiHeroChip.id}
            item={apiHeroChip.item}
        />
    );
}
function createDesignChips(designHeroChip) {
    return (
        <Chip
            id={designHeroChip.id}
            item={designHeroChip.item}
        />
    );
}
function createFrameworkChips(frameworkHeroChip) {
    return (
        <Chip
            id={frameworkHeroChip.id}
            item={frameworkHeroChip.item}
        />
    );
}
function createLanguageChips(languageHeroChip) {
    return (
        <Chip
            id={languageHeroChip.id}
            item={languageHeroChip.item}
        />
    );
}
function createLibraryChips(libraryHeroChip) {
    return (
        <Chip
            id={libraryHeroChip.id}
            item={libraryHeroChip.item}
        />
    );
}
function createPlatformChips(platformHeroChip) {
    return (
        <Chip
            id={platformHeroChip.id}
            item={platformHeroChip.item}
        />
    );
}


const Hero = () => {

    // typing effect
    var wordflick = function (ele, opts) {
        let defs = {
            "offset": 0,
            "forward": 1,
            "skip_count": 0,
            "skip_delay": 25,
            "speed": 70,
        }
        let config = Object.assign(defs, opts)
        console.log(config)
        let len = config.lines.length, i = 0, part
        setInterval(function () {
            if (config.forward) {
                if (config.offset >= config.lines[i].length) {
                    ++config.skip_count;
                    if (config.skip_count == config.skip_delay) { config.forward = 0; config.skip_count = 0; }
                }
            } else {
                if (config.offset == 0) { config.forward = 1; i++; config.offset = 0; if (i >= len) { i = 0; } }
            }
            part = config.lines[i].substr(0, config.offset);
            if (config.skip_count == 0) {
                if (config.forward) { config.offset++; } else { config.offset--; }
            }
            ele.text(part);
        }, config.speed);
    };

    let opts = {
        "lines": [
            'responsive',
            'React',
            'PWA',
            'Wordpress',
        ]
    }
    wordflick($('.keys'), opts);

    return (
        <div className="hero">
            <div className="hero__container-text">
                <div className="hero__title">
                    <h1>I design and develop</h1>
                    <h1><span className="keys"></span><span className="cursor">.</span> websites</h1>
                </div>
                <div className="hero__description">
                    <h2>Hi! My name is Lam Zi Xin a UI/UX designer slash front-end dev. This portfolio is designed on Adobe XD, Illustrator, Photoshop. The dev stack for this portfolio website includes React.js, SASS, GSAP, Three.js, Curtain.js and PWA.</h2>
                </div>
                <div className="hero__chips">
                    {designHeroChip.map(createDesignChips)}
                    {languageHeroChip.map(createLanguageChips)}
                    {libraryHeroChip.map(createLibraryChips)}
                    {frameworkHeroChip.map(createFrameworkChips)}
                    {apiHeroChip.map(createApiChips)}
                    {platformHeroChip.map(createPlatformChips)}
                </div>
            </div>
            <Canvas className="hero__threejs">
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <OrbitControls enableZoom={false} />
                <Suspense fallback={null}>
                    <Three className="hero__asset"/>
                    {/* <RickMorty /> */}
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Hero