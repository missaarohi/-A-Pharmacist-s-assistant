from config import get_db_connection

def create_tables():
    connection = get_db_connection()
    cursor = connection.cursor()
    
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS medicines (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        stock INT NOT NULL,
        price DECIMAL(10,2) NOT NULL
    )
    ''')
    
    connection.commit()
    cursor.close()
    connection.close()
    
if __name__ == "__main__":
    create_tables()
    print("Database tables created successfully.")
