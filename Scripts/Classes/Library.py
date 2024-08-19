class Library:
    def __init__(self):
        self.books=[]

    def AddBook(self,book):
        self.books.append(book)

    def FindBook(self,title):
        for book in self.books:
            if(book.title.lower()==title.lower()):
             return book
            return None
        
    def CheckOut(self,title):
        book=self.FindBook(title)