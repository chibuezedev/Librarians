import customtkinter

customtkinter.set_appearance_mode("dark")
customtkinter.set_default_color_theme("green")

root=customtkinter.CTk()
root.geometry("950x540")
root.minsize(width=600,height=320)
root.title("LIBRARY MANAGEMENT EXPERT SYSTEM")

darkModeVar=customtkinter.BooleanVar(value=True)
def SetDarkMode():
    if(darkModeVar.get()==True):
       customtkinter.set_appearance_mode("dark")    
    else:
     customtkinter.set_appearance_mode("light")    

def SendRequest():
    lastIndex=entry1.get().__len__()
    entry1.delete(first_index=0,last_index=lastIndex)
    print("Results given...")

frame=customtkinter.CTkFrame(master=root)
frame.pack(pady=20,padx=60,fill="both",expand=True,)

label= customtkinter.CTkLabel(master=frame,text="LIBRARY MANAGEMENT EXPERT SYSTEM",font=("impact",24))
label.pack(pady=12,padx=10)

darkModeToggle=customtkinter.CTkSwitch(master=frame,text="Dark Mode",command=SetDarkMode,variable=darkModeVar)
darkModeToggle.pack(pady=0,padx=10,anchor="ne")

entry1=customtkinter.CTkEntry(master=frame,placeholder_text="Request for something...")
entry1.pack(pady=12,padx=20,ipadx=300,anchor="center")


sendRequestButton=customtkinter.CTkButton(master=frame,text="Send",command=SendRequest,anchor="center")
sendRequestButton.pack(pady=12,padx=10)

frame2=customtkinter.CTkFrame(master=frame)
frame2.pack(pady=40,padx=80,fill="both",expand=True,)

resultText=customtkinter.CTkTextbox(master=frame2,font=("tahoma", 16))
resultText.focus_lastfor()
resultText.pack(pady=10,padx=10,fill="both",expand=True,)


root.mainloop()
