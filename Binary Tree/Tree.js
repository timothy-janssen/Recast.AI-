module.exports = Node;
//Constructor
function Node (value) {
  this.left = null;
  this.right = null;
  // Default invalid inputs to 0, otherwise assign value
  this.value = value == undefined || value == null || !Number.isInteger(value) ? 0 : value;
}

// Find the maximum value under any given node
findMax  = function (node) {
  // recursively call findMax on non-null children
  node.leftMax  = node.left  != null ? findMax(node.left)  : Number.NEGATIVE_INFINITY;
  node.rightMax = node.right != null ? findMax(node.right) : Number.NEGATIVE_INFINITY;

  // return the largest value between children and node's value
  return Math.max(node.value, node.leftMax, node.rightMax);
};
