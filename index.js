class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const n1 = new Node(100);

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFist(data) {
    this.head = new Node(data, this.head);
  }

  // Insert last node

  // Insert at index

  // Get at index

  // Remove at index

  // Clear list

  // Print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFist(100);
ll.insertFist(200);
ll.insertFist(300);

ll.printListData();
