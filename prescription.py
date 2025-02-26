import pytesseract
from PIL import Image
from config import get_db_connection

def extract_text_from_image(image_path):
    img = Image.open(image_path)
    extracted_text = pytesseract.image_to_string(img)
    return extracted_text

def save_prescription(text):
    connection = get_db_connection()
    cursor = connection.cursor()
    
    cursor.execute('''
    INSERT INTO prescriptions (content) VALUES (%s)
    ''', (text,))
    
    connection.commit()
    cursor.close()
    connection.close()
    
    print("Prescription saved successfully.")

if __name__ == "__main__":
    image_path = "sample_prescription.jpg"  # Replace with actual image path
    text = extract_text_from_image(image_path)
    print("Extracted Text:", text)
    save_prescription(text)
