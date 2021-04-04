

class Node {
    constructor(data){
        this.data=data;
        this.right=null;
        this.left=null;
    }
}

class BinarySearchTree 
{
    constructor()
    {
        console.log("######Binary Tree ######");
        this.root=null;
    }

    findinordersuccessor(inputnode){
        

    }
    getRootNode()
    {
        return this.root;
    }
    insert(data)
        {
            var newNode= new Node(data);

            if(this.root==null)
            {
                this.root=newNode;
                
            }else {
                this.insertnode(this.root,newNode);
            }
        }
    insertnode(node, newNode)
        {
            if(newNode.data < node.data)
            {
                if(node.left==null)
                {
                    node.left=newNode;
                }
                else{
                    this.insertnode(node.left,newNode);
                }
            }
            else
            {
                if(node.right==null)
                {
                    node.right=newNode;
                }
                else{
                    this.insertnode(node.right,newNode);
                }
            }
            
            
        }
        inorder(node)
                {
                    if(node !== null)
                    {
                        this.inorder(node.left);
                        console.log(node.data);
                        this.inorder(node.right);
                    }
                }
                preorder(node)
                {
                    if(node !== null)
                    {
                        console.log(node.data);
                        this.preorder(node.left);
                        this.preorder(node.right);
                    }
                }

                postorder(node)
                    {
                        if(node !== null)
                        {
                            this.postorder(node.left);
                            this.postorder(node.right);
                            console.log(node.data);
                        }
                    }
    
     printree(){

    }
}


var BST = new BinarySearchTree();
  
// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
                          
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17 
  
var root = BST.getRootNode();
              
// prints 5 7 9 10 13 15 17 22 25 27
BST.inorder(root);


export default function btree() {
    return (

        <div>Binary Tree - Successor ( Console )</div>
    )

}