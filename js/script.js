// Copyright (c) 2020 Catherine Vu All rights reserved
//
// Created by: Catherine Vu
// Created on: March 19 2025
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function enterClicked() {
const streetNumber = document.getElementById('streetNumber').value;
const streetName = document.getElementById('streetName').value;
}
if (streetNumber && streetName) {
const output = `Your address is: ${streetNumber} ${streetName}.`;
document.getElementById('output').textContent = output;
} 

