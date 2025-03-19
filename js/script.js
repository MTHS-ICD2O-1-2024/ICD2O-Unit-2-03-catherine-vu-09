// Copyright (c) 2020 Catherine Vu All rights reserved
//
// Created by: Catherine Vu
// Created on: March 19 2025
// This file contains the JS functions for index.html

/**
 * Enter street number and name
 */

function enterClicked() {
  // Get input values
  const streetNumber = document.querySelector("#streetNumber").value;
  const streetName = document.querySelector("#streetName").value;

  // Display output
  document.querySelector("#output").textContent = `Your address is: ${streetNumber} ${streetName}.`;
}

