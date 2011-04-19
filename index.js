function LinkedList(){
  this.head = null;
  this.tail = null;
  
  this.add = function(value){
    var node = new Node(value);
    if(this.head == null) { this.head = node; }
    if(this.tail != null) { this.tail.next = node; }
    this.tail = node;
  };
  
  this.size = function(){
    var theNode = this.head
    var count = 1;
    while(theNode.next != null){
      count++;
      theNode = theNode.next;
    } 
    return count;
  }
}

function Node(value){
  this.value = value;
  this.next = null;
}

var list = new LinkedList();
list.add(1);
list.add(2)
list.add(3);
console.log(list.size());