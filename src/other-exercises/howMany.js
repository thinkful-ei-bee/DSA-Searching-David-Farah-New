const BST = require('./bst');
const Queue = require('./queue');

function binarySearch(array, value, start = 0, end = array.length) {
  // end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  // console.log(start, end);
  console.log(item);
  if (item === value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

function findBook(library, deweyDec){
  // assuming deweyDec is unique
  const nums = library.map(arr => arr[0])
  return library[binarySearch(nums, deweyDec)]
}

function postOrderBST(arr){
  if (arr.length === 0) {
    return null;
  }

  let lastItem = arr[arr.length -1];
  let bst = new BST(lastItem);
  let left = arr.filter(x => x<lastItem);
  let right = arr.filter(x => x>lastItem);

  bst.left = postOrderBST(left);
  bst.right = postOrderBST(right);

  return bst;
}

function preOrderBST(node){
  console.log(node.key)

  if(node.left) {
    preOrderBST(node.left);
  }
  if(node.right){
    preOrderBST(node.right);
  }
}

function inOrderBST(node) {
  if(node.left) {
    inOrderBST(node.left);
  }
  
  console.log(node.key);

  if(node.right){
    inOrderBST(node.right);
  }
  
}

function postOrderTree(node) {
  if(node.left) {
    postOrderTree(node.left);
  }
  
  if(node.right){
    postOrderTree(node.right);
  }
  
  console.log(node.key);
}

function treeTraversal(arr) {
  const bst = new BST();
  arr.forEach(num => bst.insert(num, num));

  console.log('Pre order traversal:');
  preOrderBST(bst)

  console.log('Inorder traversal:');
  inOrderBST(bst)

  console.log('PostOrder traversal:');
  postOrderTree(bst)
}

function rankingOrder(tree) {
  const queue = new Queue();
  queue.enqueue(tree);
  
  while (queue.length) {
    const node = queue.dequeue();
    console.log(node.value);

    if (node.left) {
      queue.enqueue(node.left);
    }

    if (node.right) {
      queue.enqueue(node.right);
    }
  }
}

function main() {
  const list = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
  // binarySearch(list, 8);

  // binarySearch(list, 16);

  const postOrderList = [ 5, 7, 6, 9, 11, 10, 8];
  const postOrder = postOrderBST(postOrderList);

  // inOrderBST(postOrder);
  //preOrderBST(postOrder);
  //postOrderTree(postOrder);

  const randomList = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
  treeTraversal(randomList);

 const rankingOfficers = new BST();
 rankingOfficers.insert(5, 'Captain Picard');
 rankingOfficers.insert(3, 'Commander Riker');
 rankingOfficers.insert(6, 'Commander Data');
 rankingOfficers.insert(2, 'Lt. Cmdr. Worf');
 rankingOfficers.insert(4, 'Lt. Cmdr. LaForge');
 rankingOfficers.insert(8, 'Lt. Cmdr. Crusher');
 rankingOfficers.insert(7, 'Lieutenant Selar');
 rankingOfficers.insert(1, 'Lieutenant security-officer');
 rankingOrder(rankingOfficers);
}

main();

// sequence of indexes is 5, 2, 3
// sequece of numbers is 12, 6, 8
//
// 16 is not in list so searching results in
// indexes: 5, 8, 6, 7, -1
// numbers: 12, 17, 14, 15


//     14,19,15,27,25,79,90,91,89,35

// 8, 6, 5, 7, 10, 9, 11

                  105-Sat
              97-Fri         123-Wed
          97-Mon  98-Thu      121-Tue  128-Sun

          97, 97, 98, 105, 121, 123, 128
          Mon, Fri, Thu, Sat, Tue, Wed, Sun

          

