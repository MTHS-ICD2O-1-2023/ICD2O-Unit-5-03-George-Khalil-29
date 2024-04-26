// Copyright (c) 2024 George Khalil All rights reserved
//
// Created by: George Khalil
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function uses the age f user to find out what kind of movie they can see.
 */
function movieDecision() {
  // input
  const userAge = parseInt(document.getElementById('user-age').value)

  // process
  if (userAge >= 17) {
    // output
    document.getElementById('movie-decision').innerHTML = 'You can go see an R rated movie alone.'
  } else if (userAge >= 13) {
    // output
    document.getElementById('movie-decision').innerHTML = 'You can go see a PG-13 rated movie alone.'
  } else if (userAge >= 5) {
    // output
    document.getElementById('movie-decision').innerHTML = 'You can go see a G or PG rated movie alone.'
  } else {
    // output
    document.getElementById('movie-decision').innerHTML = "Uh, You're too young for most things."
  }
}
