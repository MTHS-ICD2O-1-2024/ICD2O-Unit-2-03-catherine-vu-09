// Copyright (c) 2020 Catherine Vu All rights reserved
//
// Created by: Catherine Vu
// Created on: March 19 2025
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */

function enterClicked() {
 document.getElementById("answer").innerHTML = "Hello, World!"
const streetNumber = document.getElementById('street-number').value;
const streetName = document.getElementById('street-name').value;

const output = document.getElementById('output');
output.textContent = `Your address is: ${streetNumber} ${streetName}`;
};

