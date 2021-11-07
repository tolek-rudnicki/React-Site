import os

def nk():
    try:
        f = open("./database.jsson", "r+")
        data = f.read()
        f.close()

        return data
    except: pass

def init(cmd):
    data = cmd.split("|")
    #try:

    os.system("touch ./database.jsson")
    f1 = open("./database.jsson", "r+")
    f_dat = f1.read()
    f1.close()

    #print(f_dat)

    os.system("rm -rf ./database.jsson")

    f = open("./database.jsson", "w+")
    f.write(f_dat + "\n" + data[0] + "|" + data[1] + "|" + data[2])
    f.close()
    #except:
    #pass

def check(cmd):
    try:
        f = open("./database.jsson", "r+")
        dat = f.read()
        f.close()
        if dat.__contains__(cmd):
            print("Error")
        else:
            init(cmd)
            
    except:
        pass

def login(cmd):
    try:
        f = open("./database.jsson", "r+")
        dat = f.read()
        f.close()
        if (dat.__contains__(cmd)):
            print("Logged in")
        else:
            print("Error")
    except:
        pass