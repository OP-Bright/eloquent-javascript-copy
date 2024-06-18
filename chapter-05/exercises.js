// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        output.push(arr[i][j])
      }
    } else {
      output.push(arr[i]);
    }
  }
  return output;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
  for (let i = value; test(i); i = update(i)) {
    body(i)
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (!(func(arr[i]))) {
      return false
    }
  }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
  let leftToRight = [];

  let rightToLeft = [];

  for (let i = 0; i < string.length; i++) {
    let script = characterScript(string.charCodeAt(i))

    if (script !== null) {
      if (script.direction === "ltr") {
        leftToRight.push(script)
      } else {
        rightToLeft.push(script)
      }
    }
  }

  if (leftToRight.length > rightToLeft.length) {
    return 'ltr'
  } else {
    return 'rtl'
  }
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};