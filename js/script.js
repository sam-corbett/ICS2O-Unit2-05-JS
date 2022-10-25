// Copyright (c) 2022 Sam Corbett All rights reserved
//
// Created by: Sam Corbett
// Created on: O 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates both work hours and hourly rate.
 */

function calculate() {
  // input
  const TAX_RATE = 0.18
  const hours = parseInt(document.getElementById("work-hours").value)
  const rate = parseInt(document.getElementById("hourly-rate").value)

  // process
  const pay = hours * rate * (1.0 - TAX_RATE)
  const taxes = hours * rate * TAX_RATE

  // output
  document.getElementById("pay").innerHTML =
    "Your Payment will be at: $" + pay.toFixed(2)
  document.getElementById("taxes").innerHTML =
    "Your Taxs Would Be At: $" + taxes.toFixed(2)
}
