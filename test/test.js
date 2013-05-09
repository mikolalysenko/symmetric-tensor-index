var sym = require("../index.js")

require("tap").test("symmetric-tensor-index", function(t) {
  var rank = 3, dimension = 4
  var seq = [0, 0, 0], idx = 0
  while(idx >= 0) {
    var deg = sym.tensorToDegree(dimension, rank, seq)
    var ten = sym.degreeToTensor(dimension, rank, deg)
    console.log(idx, seq, deg)
    
    t.equals(ten.join(","), seq.join(","))
    t.equals(sym.tensorToArray(dimension, rank, seq), idx, seq.join(","))
    
    idx = sym.nextTensor(dimension, rank, seq, idx)
  }
  t.end()
})