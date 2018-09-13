var Node = require('./Tree');
var assert = require('assert');

//Create nodes using simple, small integers
var test1RootNode = new Node(0),
    test1Node1 = new Node(1),
    test1Node2 = new Node(2),
    test1Node3 = new Node(3),
    test1Node4 = new Node(4),
    test1Node5 = new Node(5),
    test1Node6 = new Node(6),
    test1Node7 = new Node(7);

// Create tree structure
test1RootNode.left = test1Node1;
test1RootNode.right = test1Node3;
test1Node1.left  = test1Node2;
test1Node2.left  = test1Node4;
test1Node2.right = test1Node5;
test1Node3.left  = test1Node6;
test1Node3.right = test1Node7;

assert.equal(findMax(test1RootNode), 7);

//Create nodes using negative/zero/positive boundry
var test2RootNode = new Node(-1),
    test2Node1 = new Node(0),
    test2Node2 = new Node(1);

// Create tree structure
test2RootNode.left  = test2Node2;
test2RootNode.right = test2Node1;

assert.equal(findMax(test2RootNode), 1);

//Create node using the maximum integer
var test3RootNode = new Node(0),
    test3Node1 = new Node(1),
    test3Node2 = new Node(2),
    test3Node3 = new Node(3),
    test3Node4 = new Node(4),
    test3Node5 = new Node(5),
    test3Node6 = new Node(Number.MAX_SAFE_INTEGER);

// Create tree structure
test3RootNode.left = test3Node1;
test3Node1.left = test3Node2;
test3Node2.left = test3Node3;
test3Node3.left = test3Node4;
test3Node4.left = test3Node5;
test3Node5.left = test3Node6;

assert.equal(findMax(test3RootNode), Number.MAX_SAFE_INTEGER);

//Test that invalid nodes are created with value of 0
var test4RootNode = new Node(-1),
    test4Node1 = new Node(null),
    test4Node2 = new Node('Invalid'),
    test4Node3 = new Node();

// Test each invalid node seperately
test4RootNode.left  = test4Node1;
assert.equal(findMax(test4RootNode), 0);
test4RootNode.left  = test4Node2;
assert.equal(findMax(test4RootNode), 0);
test4RootNode.left  = test4Node3;
assert.equal(findMax(test4RootNode), 0);


