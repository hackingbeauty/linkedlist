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
  };
  
  this.removeAt = function(index) {
    var prev = null;
    var node = this.head;
    var i = 0;
    while (node != null && i++ < index) {
      prev = node;
      node = node.next;
    }
    if (prev == null) { 
      this.head = node.next; 
    } else { 
      prev.next = node.next;
    }
  };
  
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
list.removeAt(1);
console.log(list.size());