// // Facebook Login Page JavaScript

// // Toggle signup modal
// function toggleSignup() {
//   const modal = document.getElementById("signupModal");
//   if (modal.style.display === "block") {
//     modal.style.display = "none";
//     document.body.style.overflow = "auto";
//   } else {
//     modal.style.display = "block";
//     document.body.style.overflow = "hidden";
//   }
// }

// // Close modal when clicking outside of it
// window.onclick = function (event) {
//   const modal = document.getElementById("signupModal");
//   if (event.target === modal) {
//     modal.style.display = "none";
//     document.body.style.overflow = "auto";
//   }
// };

// // Handle form validation and UX improvements
// document.addEventListener("DOMContentLoaded", function () {
//   // Add focus effects to inputs
//   const inputs = document.querySelectorAll(
//     'input[type="email"], input[type="password"], input[type="text"]'
//   );

//   inputs.forEach((input) => {
//     input.addEventListener("focus", function () {
//       this.style.borderColor = "#1877f2";
//       this.style.backgroundColor = "white";
//     });

//     input.addEventListener("blur", function () {
//       if (!this.value) {
//         this.style.borderColor = "#dddfe2";
//         this.style.backgroundColor = "#f5f6f7";
//       }
//     });
//   });

//   // Handle gender radio button selection
//   const genderOptions = document.querySelectorAll(".gender-option");
//   genderOptions.forEach((option) => {
//     option.addEventListener("click", function () {
//       const radio = this.querySelector('input[type="radio"]');
//       radio.checked = true;

//       // Remove active class from all options
//       genderOptions.forEach((opt) => opt.classList.remove("active"));
//       // Add active class to selected option
//       this.classList.add("active");
//     });
//   });

//   // Form submission handling with basic validation
//   const loginForm = document.querySelector(".login-form");
//   if (loginForm) {
//     loginForm.addEventListener("submit", function (e) {
//       const email = this.querySelector('input[name="email"]').value;
//       const password = this.querySelector('input[name="password"]').value;

//       if (!email || !password) {
//         e.preventDefault();
//         alert("Please fill in all fields");
//         return false;
//       }

//       // Basic email validation
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(email)) {
//         e.preventDefault();
//         alert("Please enter a valid email address");
//         return false;
//       }
//     });
//   }

//   // Signup form validation
//   const signupForms = document.querySelectorAll('form[action="/signup"]');
//   signupForms.forEach((form) => {
//     form.addEventListener("submit", function (e) {
//       const firstName = this.querySelector('input[name="first_name"]').value;
//       const lastName = this.querySelector('input[name="last_name"]').value;
//       const email = this.querySelector('input[name="email"]').value;
//       const password = this.querySelector('input[name="password"]').value;
//       const birthMonth = this.querySelector('select[name="birth_month"]').value;
//       const birthDay = this.querySelector('select[name="birth_day"]').value;
//       const birthYear = this.querySelector('select[name="birth_year"]').value;
//       const gender = this.querySelector('input[name="gender"]:checked');

//       // Check if all required fields are filled
//       if (
//         !firstName ||
//         !lastName ||
//         !email ||
//         !password ||
//         !birthMonth ||
//         !birthDay ||
//         !birthYear ||
//         !gender
//       ) {
//         e.preventDefault();
//         alert("Please fill in all required fields");
//         return false;
//       }

//       // Basic email validation
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(email)) {
//         e.preventDefault();
//         alert("Please enter a valid email address");
//         return false;
//       }

//       // Password length validation
//       if (password.length < 6) {
//         e.preventDefault();
//         alert("Password must be at least 6 characters long");
//         return false;
//       }
//     });
//   });

//   // Add smooth animations
//   const buttons = document.querySelectorAll("button");
//   buttons.forEach((button) => {
//     button.addEventListener("mousedown", function () {
//       this.style.transform = "scale(0.98)";
//     });

//     button.addEventListener("mouseup", function () {
//       this.style.transform = "scale(1)";
//     });

//     button.addEventListener("mouseleave", function () {
//       this.style.transform = "scale(1)";
//     });
//   });

//   // Handle mobile responsiveness
//   function handleResize() {
//     const modal = document.getElementById("signupModal");
//     if (window.innerWidth <= 479 && modal.style.display === "block") {
//       document.body.style.overflow = "hidden";
//     }
//   }

//   window.addEventListener("resize", handleResize);

//   // Populate day options dynamically based on month selection
//   const monthSelect = document.querySelector('select[name="birth_month"]');
//   const daySelect = document.querySelector('select[name="birth_day"]');

//   if (monthSelect && daySelect) {
//     monthSelect.addEventListener("change", function () {
//       const month = parseInt(this.value);
//       const year =
//         parseInt(document.querySelector('select[name="birth_year"]').value) ||
//         new Date().getFullYear();

//       // Clear existing options except the first one
//       daySelect.innerHTML = '<option value="">Day</option>';

//       if (month) {
//         const daysInMonth = new Date(year, month, 0).getDate();
//         for (let i = 1; i <= daysInMonth; i++) {
//           const option = document.createElement("option");
//           option.value = i;
//           option.textContent = i;
//           daySelect.appendChild(option);
//         }
//       }
//     });
//   }
// });

// // Add CSS for active gender option
// const style = document.createElement("style");
// style.textContent = `
//     .gender-option.active {
//         background-color: #e7f3ff;
//         border-color: #1877f2;
//     }

//     button {
//         transition: transform 0.1s ease;
//     }
// `;
// document.head.appendChild(style);
