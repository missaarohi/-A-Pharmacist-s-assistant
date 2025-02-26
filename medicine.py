from config import get_db_connection

def add_medicine(name, stock, price):
    connection = get_db_connection()
    cursor = connection.cursor()
    
    cursor.execute('''
    INSERT INTO medicines (name, stock, price) VALUES (%s, %s, %s)
    ''', (name, stock, price))
    
    connection.commit()
    cursor.close()
    connection.close()
    
    print("Medicine added successfully.")

def get_all_medicines():
    connection = get_db_connection()
    cursor = connection.cursor()
    
    cursor.execute('SELECT * FROM medicines')
    medicines = cursor.fetchall()
    
    cursor.close()
    connection.close()
    
    return medicines

if __name__ == "__main__":
    add_medicine("Paracetamol", 100, 10.50)
    print(get_all_medicines())
