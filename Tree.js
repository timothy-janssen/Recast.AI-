module.exports = Node;
//Constructor
function Node (value) {
  this.left = null;
  this.right = null;
  // Default invalid inputs to 0, otherwise assign value
  this.value = value == undefined || value == null ? 0 : value;
}

//find the max value in a tree
findMaxInTree = function (Root) {
  maxValue = Root.value;
  //_findMaxUnderNode will populate maxValue if a larger value is found
  if(Root.left  != null) {_findMaxUnderNode(Root.left) ;}
  if(Root.right != null) {_findMaxUnderNode(Root.right);}
  return maxValue;
};

// Find the maximum value under any given node
_findMaxUnderNode  = function (node) {
  if(node.value > maxValue){
    // set maxValue to the higher value
    maxValue = node.value;
  }
  // recursively call _findMaxUnderNode on non-null children
  if(node.left  != null) {_findMaxUnderNode(node.left) ;}
  if(node.right != null) {_findMaxUnderNode(node.right);}
};
