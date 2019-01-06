document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function() {
    console.log('READYSTATE', xhr.readyState);
    // This is readystate 3, so while it is thinking, you can put in a loader or a spinner to signify that it is doing so
  }

  xhr.onload = function() {
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) {
      console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // Older version of onload, which just goes immediately when it is on ready state 4 basically
  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function() {
    console.log('Request error...');
  }

  xhr.send();

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP STATUSES
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}

// JSON = JavaScript Object Notation
// Comments are not permitted in the JSON file

document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);
      
      // Won't be able to get something like "customer.id" or anything unless we parse the response text
      const customer = JSON.parse(this.responseText);

      const output = `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
      </ul>
      `;

      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}

document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);
      
      const customers = JSON.parse(this.responseText);

      let output = '';

      customers.forEach(function(customer){
        output += 
          `
          <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
          </ul>
          `;
      });

      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}