// script.js
document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var websiteName = document.getElementById('websiteName').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var notes = document.getElementById('notes').value;

    // Create new PasswordEntry object (assuming PasswordEntry class is available via Java backend)
    var entry = {
        websiteName: websiteName,
        username: username,
        password: password,
        notes: notes
    };

    // Clear form fields
    document.getElementById('websiteName').value = '';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('notes').value = '';

    // Send data to Java backend (via REST API, WebSocket, etc.) and update UI as needed
    // Example: fetch('/addEntry', { method: 'POST', body: JSON.stringify(entry) });

    // For demonstration, add the entry directly to the UI
    addPasswordEntryToUI(entry);
});

// Function to add a password entry to UI (for demonstration)
function addPasswordEntryToUI(entry) {
    var container = document.getElementById('passwordEntries');
    var entryDiv = document.createElement('div');
    entryDiv.classList.add('password-entry');
    entryDiv.innerHTML = `
        <p><strong>Website:</strong> ${entry.websiteName}</p>
        <p><strong>Username:</strong> ${entry.username}</p>
        <p><strong>Password:</strong> ${entry.password}</p>
        <p><strong>Notes:</strong> ${entry.notes}</p>
        <hr>
    `;
    container.appendChild(entryDiv);
}
