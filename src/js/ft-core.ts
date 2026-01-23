import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useAnimation } from 'motion/react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

// Expose React and all hooks
(window as any).React = React;

// Expose ReactDOM
(window as any).ReactDOM = { createRoot };

// Expose Motion with all exports
(window as any).Motion = { motion, useAnimation };

// Expose Particles - default export
(window as any).Particles = Particles;
(window as any).Particles.initParticlesEngine = initParticlesEngine;

// Expose TSParticles named exports
(window as any).TSParticlesSlim = { loadSlim };
