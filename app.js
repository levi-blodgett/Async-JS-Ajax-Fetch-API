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