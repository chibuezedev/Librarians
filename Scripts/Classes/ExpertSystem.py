from experta import fact,KnowledgeEngine,rule

class Info(fact):
    "INFORMATION ABOUT THE PROMPT WE PASS IN"
    pass

class Reaction(KnowledgeEngine):

    @rule(Info(title="lord of the rings"))
    def Title_LordOfTheRings(self):
        print("this book is a fantasy book")
    
    @rule(Info(authour="JKRowlin"))
    def Authour_JKRowlin(self):
        print("this book is an educational book")

    @rule(Info(category="educational"))
    def Category_Educational(self):
        print("this book is an educational book")

    @rule(Info(available=True))
    def Available_True(self):
        print("this book is available")

engine=Reaction()
engine.reset()