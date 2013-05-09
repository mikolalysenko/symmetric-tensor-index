symmetric-tensor-index
======================
Index operations for [symmetric tensors](http://en.wikipedia.org/wiki/Symmetric_tensor) (aka multinomials).  In a r-th order symmetric tensor over a d-dimensional vector spaces, we can think of the indices in 3 different ways:

* As a tensor index (ie an array of length r with values of length d)
* As a polynomial degree (ie an array of length d with values up to r)
* Or a flattened array index (a scalar number between 0 and (d + r - 1) choose r )

The code in this library can be used to convert between these indices.  For more details see:

* http://0fps.wordpress.com/2011/08/30/multidimensional-taylor-series-and-symmetric-tensors/

Install
=======

    npm install symmetric-tensor-index
    
API
===

```javascript
var sym = require("symmetric-tensor-index")
```

### `sym.nextTensor(rank, dimension, seq[, index])`
Finds the index of the next entry in the tensor.

* `rank` is the rank of the tensor
* `dimension` is the dimension of the tensor
* `seq` is the tensor index
* `index` is the array index (optional)

**Returns** The next array index.  `seq` is updated in place.

### `sym.tensorToDegree(rank, dimension, seq[, result])`
Converts a tensor index to a degree index

* `rank` rank of the tensor
* `dimension` dimension of vector space
* `seq` is the tensor index
* `result` (optional) gets the resulting computation

**Returns** `result`

### `sym.tensorToArray(rank, dimension, seq)`
Converts a tensor index to an array index

* `rank` rank of the tensor
* `dimension` dimension of vector space
* `seq` is the tensor index

**Returns** The array index of the tensor entry

### `sym.degreeToTensor(rank, dimension, degrees[, result])`
Converts a degree index to a tensor index

* `rank` rank of the tensor
* `dimension` dimension of vector space
* `degrees` is the degree index
* `result` is the result (optional)

**Returns** `result`

### `sym.degreeToArray(rank, dimension, degrees)`
Converts a degree index to an array index

* `rank` rank of the tensor
* `dimension` dimension of vector space
* `degrees` is the degree index

**Returns** The array index of the degree sequence

# Credits
(c) 2013 Mikola Lysenko. MIT License
