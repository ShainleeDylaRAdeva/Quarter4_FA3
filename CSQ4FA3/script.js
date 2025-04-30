function generateShape() {
    let input;
    while (true) {
      input = document.getElementById("numberInput").value;
      if (!isNaN(input) && input.trim() !== "") break;
      alert("Please enter a valid number.");
      return;
    }

    let num = parseInt(input);
    let output = `Number inputted: ${num}\n`;

    if (num % 2 === 1) { 
      for (let i = num; i >= 1; i--) {
        output += (i + " ").repeat(num).trim() + "\n";
      }
    } else {
      for (let i = num; i >= 1; i--) {
        output += (i + " ").repeat(i).trim() + "\n";
      }
    }

    document.getElementById("output").innerText = output;
  }

  let contacts = [];

  function addContact() {
    let name = document.getElementById("nameInput").value.trim();
    if (name === "") return;

    if (contacts.length >= 7) {
      contacts.shift();
    }
    contacts.push(name);
    updateContacts();
  }

  function removeContact() {
    contacts.pop();
    updateContacts();
  }

  function updateContacts() {
    document.getElementById("contactOutput").innerText = contacts.join(" ");
  }