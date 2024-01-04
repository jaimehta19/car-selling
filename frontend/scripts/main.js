// scripts/main.js

// Example: Handling click event for the login button
// const loginButton = document.getElementById('loginButton');

// loginButton.addEventListener('click', () => {
//   // Implement login functionality here or redirect to the login page
//   console.log('Login button clicked');
// });

// Example: Handling click event for the contact link in the navbar
const contactLink = document.querySelector('nav ul li a[href="#contact"]');

contactLink.addEventListener('click', () => {
  // Implement functionality to navigate to the contact section on the page
  console.log('Contact link clicked');
});

// scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
  
    loginButton.addEventListener('click', async () => {
      try {
        // Make a POST request to the login endpoint on the server
        const loginResponse = await fetch('/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          // You can pass additional data in the body if needed (e.g., username and password)
          body: JSON.stringify({
            // Add any login data you need to send to the backend
          })
        });
  
        if (loginResponse.ok) {
          // If login was successful, perform any necessary actions (e.g., redirect, update UI)
          console.log('Login successful');
          // You can redirect or update UI after successful login
        } else {
          // Handle login failure
          console.error('Login failed');
          // Show error message or handle accordingly
        }
      } catch (error) {
        console.error('Error during login:', error);
        // Handle network errors or other issues
      }
    });
  
    // Similarly, handle logout button click
    const logoutButton = document.getElementById('logoutButton'); // Add an ID to your logout button in the HTML
  
    logoutButton.addEventListener('click', async () => {
      try {
        // Make a POST request to the logout endpoint on the server
        const logoutResponse = await fetch('/auth/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        if (logoutResponse.ok) {
          // If logout was successful, perform any necessary actions (e.g., redirect, update UI)
          console.log('Logout successful');
          // You can redirect or update UI after successful logout
        } else {
          // Handle logout failure
          console.error('Logout failed');
          // Show error message or handle accordingly
        }
      } catch (error) {
        console.error('Error during logout:', error);
        // Handle network errors or other issues
      }
    });
  });
  