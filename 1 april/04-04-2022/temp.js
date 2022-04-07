class Node {
    constructor(item) {
        this.data = item;
        this.left =this.right = null;
    }
}
var root = null;

 

function getCount( node , low , high) {
    if (node == null)
        return 0;

    if (node.data >= low && node.data <= high)
        return 1 + getCount(node.left, low, high) + getCount(node.right, low, high);

    else if (node.data < low)
        return getCount(node.right, low, high);

    else
        return getCount(node.left, low, high);
}


    root = new Node(10);
    root.left = new Node(5);
    root.right = new Node(50);
    root.left.left = new Node(1);
    root.right.left = new Node(40);
    root.right.right = new Node(100);


    // var l = 5;
    // var h = 45;
    var list = [[5,45],[50,100]];

    for(i=0; i<list.length; i++){
        l=list[i][0];
        h=list[i][1];
        console.log(getCount(root, l, h));
    }
    
