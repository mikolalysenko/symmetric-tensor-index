"use strict"

function factorial(n) {
  var r = 1
  for(var i=2; i<=n; ++i) {
    r *= i
  }
  return r
}

function tensorToDegree(dimension, rank, seq, result) {
  rank |= 0
  dimension |= 0
  result = result || new Array(dimension)
  var i
  for(i=0; i<dimension; ++i) {
    result[i] = 0
  }
  for(i=0; i<rank; ++i) {
    ++result[seq[i]]
  }
  return result
}
exports.tensorToDegree = tensorToDegree

function degreeToTensor(dimension, rank, degrees, result) {
  rank |= 0
  dimension |= 0
  result = result || new Array(rank)
  var i, j, k
  j = rank
  for(i=0; i<dimension; ++i) {
    for(k=0; k<degrees[i]; ++k) {
      result[--j] = i
    }
  }
  return result
}
exports.degreeToTensor = degreeToTensor

function degreeToArray(dimension, rank, degrees) {
  rank |= 0
  dimension |= 0
  var index = 0, sum = 0, i, j, w
  for(i=dimension-1; i>0; --i) {
    sum += degrees[i]
    w = 1
    for(j=0; j<dimension-i; ++j) {
      w *= sum + j
    }
    index += w / factorial(dimension - i)
  }
  return index
}
exports.degreeToArray = degreeToArray

function tensorToArray(dimension, rank, input) {
  return degreeToArray(dimension, rank, tensorToDegree(dimension, rank, input))
}
exports.tensorToArray = tensorToArray

function nextTensor(dimension, rank, seq, index) {
  rank |= 0
  dimension |= 0
  index = (index|0) || 0
  var i, j
  for(i=0; i<rank; ++i) {
    if(seq[i] < dimension - 1) {
      ++seq[i]
      ++index
      for(j=i-1; j>=0; --j) {
        seq[j] = seq[i]
      }
      return index
    }
  }
  index = -1;
  return index
}
exports.nextTensor = nextTensor