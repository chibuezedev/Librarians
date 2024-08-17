class Book:
    def __init__(self,title,author,category,is_available=True):
        self.title = title
        self.author = author
        self.category = category
        self.is_available = is_available
    
    def __str__(self):
        return f"{self.title} by {self.author} - {'Available' if self.is_available else 'Checked out'}"
        
        