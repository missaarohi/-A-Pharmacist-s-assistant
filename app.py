from flask import Flask, request, jsonify
import pytesseract
from PIL import Image
import mysql.connector
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Database connection
conn = mysql.connector.connect(
    host=os.getenv("DB_HOST"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASS"),
    database=os.getenv("DB_NAME")
)
cursor = conn.cursor()

# OCR Function
@app.route('/extract_text', methods=['POST'])
def extract_text():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400
    
    image = request.files['image']
    img = Image.open(image)
    extracted_text = pytesseract.image_to_string(img)
    
    return jsonify({'extracted_text': extracted_text})

# Fetch medicine details from database
@app.route('/medicine/<name>', methods=['GET'])
def get_medicine(name):
    cursor.execute("SELECT * FROM medicines WHERE name = %s", (name,))
    medicine = cursor.fetchone()
    if medicine:
        return jsonify({'name': medicine[1], 'stock': medicine[2], 'price': medicine[3]})
    return jsonify({'error': 'Medicine not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
