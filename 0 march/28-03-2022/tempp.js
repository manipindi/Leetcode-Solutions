let arr = [[2],[3,4],[6,5,7],[4,1,8,3]];

function permute(input)
{
  var out = [];

  (function permute_r(input, current) {
    if (input.length === 0) {
      out.push(current);
      return;
    }

    var next = input.slice(1);

    for (var i = 0, n = input[0].length; i != n; ++i) {
      permute_r(next, current.concat([input[0][i]]));
    }
  }(input, []));

  return out;
}

console.log(permute(arr));