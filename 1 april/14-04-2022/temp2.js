function same_necklace(n1, n2) {

  // special case.  If not same length, not the same string
  if (n1.length !== n2.length) {
    return false
  }
  // special case.  Empty strings are equal.
  if (n1.length === 0 && n2.length === 0) {
    return false
  }
  for (let i = 0; i < n1.length; i++) {
    if (n1 == n2) {
      return true
    };
    // roll the first character to the end of the necklace
    n2 = n2.slice(1) + n2.charAt(0)
    console.log(n2);
  }
  return false

}

console.log("Should be TRUE: ", same_necklace("nicole", "coneli"))
