import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'motion/react';

window.React = React;
window.ReactDOM = { createRoot };
window.Motion = { motion };
