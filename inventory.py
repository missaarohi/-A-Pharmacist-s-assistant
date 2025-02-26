from config import get_db_connection

def update_stock(medicine_name, quantity):
    connection = get_db_connection()
    cursor = connection.cursor()
    
    cursor.execute('''
    UPDATE medicines SET stock = stock - %s WHERE name = %s AND stock >= %s
    ''', (quantity, medicine_name, quantity))
    
    if cursor.rowcount == 0:
        print("Insufficient stock or medicine not found.")
    else:
        print("Stock updated successfully.")
    
    connection.commit()
    cursor.close()
    connection.close()

def check_stock(medicine_name):
    connection = get_db_connection()
    cursor = connection.cursor()
    
    cursor.execute('SELECT stock FROM medicines WHERE name = %s', (medicine_name,))
    result = cursor.fetchone()
    
    cursor.close()
    connection.close()
    
    if result:
        return result[0]
    else:
        return "Medicine not found"

if __name__ == "__main__":
    medicine = "Paracetamol"
    print(f"Current stock for {medicine}:", check_stock(medicine))
    update_stock(medicine, 10)
    print(f"Updated stock for {medicine}:", check_stock(medicine))
