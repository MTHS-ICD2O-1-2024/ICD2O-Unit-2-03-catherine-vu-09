// Copyright (c) 2020 Catherine Vu All rights reserved
//
// Created by: Catherine Vu
// Created on: March 19 2025
// This file contains the JS functions for index.html

/**
 * Enter street number and name
 */

function enterClicked() { 
  //input 
  const streetName = document.getElementById("street-name").value
  const streetNumber = parseInt(document.getElementById("street-number").value)
  //output 
  document.getElementById("address").innerHTML = 
  "Your address is: " + streetName + "," + streetNumber + "."
}

