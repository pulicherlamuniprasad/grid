import { Component } from '@angular/core';
interface Person {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  status: string;
  isEditing?: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grid-project';

  persons: Person[] =  [
    { id: 1, name: 'John Doe', phoneNumber: '123-456-7890', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', phoneNumber: '987-654-3210', email: 'jane@example.com', status: 'Inactive' },
    { id: 3, name: 'Alice Johnson', phoneNumber: '555-123-4567', email: 'alice@example.com', status: 'Active' },
    { id: 4, name: 'Bob Brown', phoneNumber: '444-987-6543', email: 'bob@example.com', status: 'Inactive' },
    { id: 5, name: 'Emily Davis', phoneNumber: '777-555-1234', email: 'emily@example.com', status: 'Active' },
    { id: 6, name: 'Michael Wilson', phoneNumber: '222-333-4444', email: 'michael@example.com', status: 'Inactive' },
    { id: 7, name: 'Olivia Martinez', phoneNumber: '888-222-3333', email: 'olivia@example.com', status: 'Active' },
    { id: 8, name: 'William Anderson', phoneNumber: '999-444-5555', email: 'william@example.com', status: 'Inactive' },
    { id: 9, name: 'Sophia Taylor', phoneNumber: '111-888-9999', email: 'sophia@example.com', status: 'Active' },
    { id: 10, name: 'James Thomas', phoneNumber: '666-777-8888', email: 'james@example.com', status: 'Inactive' },
    { id: 11, name: 'Charlotte Harris', phoneNumber: '333-111-2222', email: 'charlotte@example.com', status: 'Active' },
    { id: 12, name: 'Daniel Martin', phoneNumber: '555-666-7777', email: 'daniel@example.com', status: 'Inactive' },
    { id: 13, name: 'Emma White', phoneNumber: '222-333-4444', email: 'emma@example.com', status: 'Active' },
    { id: 14, name: 'Liam Jackson', phoneNumber: '111-888-9999', email: 'liam@example.com', status: 'Inactive' },
    { id: 15, name: 'Ava Thompson', phoneNumber: '777-555-1234', email: 'ava@example.com', status: 'Active' },
    { id: 16, name: 'Noah Clark', phoneNumber: '999-444-5555', email: 'noah@example.com', status: 'Inactive' },
    { id: 17, name: 'Isabella Rodriguez', phoneNumber: '123-456-7890', email: 'isabella@example.com', status: 'Active' },
    { id: 18, name: 'Mia Lewis', phoneNumber: '987-654-3210', email: 'mia@example.com', status: 'Inactive' },
    { id: 19, name: 'Ethan Lee', phoneNumber: '555-123-4567', email: 'ethan@example.com', status: 'Active' },
    { id: 20, name: 'Alexander Hall', phoneNumber: '444-987-6543', email: 'alexander@example.com', status: 'Inactive' },
    { id: 21, name: 'Evelyn Walker', phoneNumber: '777-555-1234', email: 'evelyn@example.com', status: 'Active' },
    { id: 22, name: 'Mason Perez', phoneNumber: '222-333-4444', email: 'mason@example.com', status: 'Inactive' },
    { id: 23, name: 'Abigail Wright', phoneNumber: '888-222-3333', email: 'abigail@example.com', status: 'Active' },
    { id: 24, name: 'Harper Lopez', phoneNumber: '999-444-5555', email: 'harper@example.com', status: 'Inactive' },
    { id: 25, name: 'Benjamin Harris', phoneNumber: '111-888-9999', email: 'benjamin@example.com', status: 'Active' },
    { id: 26, name: 'Ella King', phoneNumber: '666-777-8888', email: 'ella@example.com', status: 'Inactive' },
    { id: 27, name: 'Jack Scott', phoneNumber: '333-111-2222', email: 'jack@example.com', status: 'Active' },
    { id: 28, name: 'William Green', phoneNumber: '555-666-7777', email: 'william@example.com', status: 'Inactive' },
    { id: 29, name: 'Grace Baker', phoneNumber: '222-333-4444', email: 'grace@example.com', status: 'Active' },
    { id: 30, name: 'Lucas Adams', phoneNumber: '111-888-9999', email: 'lucas@example.com', status: 'Inactive' },
    { id: 31, name: 'Avery Nelson', phoneNumber: '777-555-1234', email: 'avery@example.com', status: 'Active' },
    { id: 32, name: 'Liam Hill', phoneNumber: '999-444-5555', email: 'liam@example.com', status: 'Inactive' },
    { id: 33, name: 'Scarlett Rivera', phoneNumber: '123-456-7890', email: 'scarlett@example.com', status: 'Active' },
    { id: 34, name: 'Riley Peterson', phoneNumber: '987-654-3210', email: 'riley@example.com', status: 'Inactive' },
    { id: 35, name: 'Sofia Cooper', phoneNumber: '555-123-4567', email: 'sofia@example.com', status: 'Active' },
    { id: 36, name: 'Jackson Reed', phoneNumber: '444-987-6543', email: 'jackson@example.com', status: 'Inactive' },
    { id: 37, name: 'Aria Parker', phoneNumber: '777-555-1234', email: 'aria@example.com', status: 'Active' },
    { id: 38, name: 'Logan Bell', phoneNumber: '222-333-4444', email: 'logan@example.com', status: 'Inactive' },
    { id: 39, name: 'Mateo Coleman', phoneNumber: '888-222-3333', email: 'mateo@example.com', status: 'Active' },
    { id: 40, name: 'Eleanor Cook', phoneNumber: '999-444-5555', email: 'eleanor@example.com', status: 'Inactive' },
    { id: 41, name: 'Carter Murphy', phoneNumber: '111',email: 'aria@example.com', status: 'Active' }
  ]
  
  sortedColumn: string = '';
  sortDirection: string = 'asc'; // Default sorting direction

  sortBy(column: keyof Person) {
    if (this.sortedColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc';
    }
  
    this.persons.sort((a, b) => {
      const columnA = a[column] as string | number | boolean;
      const columnB = b[column] as string | number | boolean;
  
      if (this.sortDirection === 'asc') {
        return columnA < columnB ? -1 : columnA > columnB ? 1 : 0;
      } else {
        return columnA > columnB ? -1 : columnA < columnB ? 1 : 0;
      }
    });
}

  

   // Pagination variables
   currentPage: number = 1;
   itemsPerPage: number = 15;
 
   // Calculate total number of pages
   get totalPages(): number {
     return Math.ceil(this.persons.length / this.itemsPerPage);
   }
 
   // Get current page data
   get currentPageData(): Person[] {
     const startIndex = (this.currentPage - 1) * this.itemsPerPage;
     const endIndex = startIndex + this.itemsPerPage;
     return this.persons.slice(startIndex, endIndex);
   }
 
   // Navigate to the next page
   nextPage() {
     if (this.currentPage < this.totalPages) {
       this.currentPage++;
     }
   }
 
   // Navigate to the previous page
   prevPage() {
     if (this.currentPage > 1) {
       this.currentPage--;
     }
   }




   // Method to toggle edit mode for a row
   editRow(person: Person) {
    person.isEditing = true;
  }

  // Method to save changes made to a row
  saveRow(person: Person) {
    person.isEditing = false;
    // Additional logic to save changes to database or update data source
  }

  // Method to cancel editing and discard changes made to a row
  cancelEdit(person: Person) {
    person.isEditing = false;
    if(this.iSnewRowClicked){
      this.persons.splice(0,1);
      this.iSnewRowClicked = false;
    }
    // Additional logic to revert changes made to the row
  }

  iSnewRowClicked = false;

  addNewRow() {
    this.iSnewRowClicked = true;
    // Create a new empty person object
    const newPerson: Person = {
      id: this.persons.length + 1,
      name: '',
      phoneNumber: '',
      email: '',
      status: '',
      isEditing: true // Enable editing for the new row by default
    };
  
    // Insert the new row at the beginning of the persons array
    this.persons.unshift(newPerson);
  }
  

  deleteRow(index: number) {
    this.persons.splice(index, 1);
  }
}
