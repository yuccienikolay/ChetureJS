// By Kiselev Nikolay
// 2018
// Cheture javascript web lib


// Import Cheture
import {Cheture} from './Cheture.js';
// import {Chevue} from './Chevue.js';
import {Chetrack} from './Chetrack.js';
// Declare globaly Cheture modules
global.Cheture = Cheture;
// global.Chevue = Chevue;
global.Chetrack = Chetrack;

// Test
Cheture.Echo("GSY");
Cheture.Print(Chetrack.getID());