#pip3 install Faker
from faker import Faker
import csv
faker = Faker()
Faker.seed(1000);
#number of fake students
totalInfo = 4000;

def eraseTitle(fullname):
    #Erase the title
    if '.' in fullname:
        fullname = fullname.split()
        fullname.pop(0)
    else:
        fullname = fullname.split()
    return fullname

def getFirstandLast(fullname):
     #extract first and last name
    first = fullname[0]
    #incase it has middle name
    if(len(fullname) == 3):
        last = fullname[2]
    else:
        last = fullname[1]
    return first,last

with open('students.csv','w', newline='') as file:
    writer = csv.writer(file,delimiter = ',')
    writer.writerow(['First name', 'Last Name', 'studentID','Password', 'email'])
    x = {"initial":[],"count":[]}
    for i in range(1,totalInfo+1):
        num = faker.unique.numerify('######')
        fullname = eraseTitle(faker.name())
        first,last = getFirstandLast(fullname)
        initial = first[0] + last[0]
        if(initial in x):
            x[initial] += 1
        else:
            x[initial] = 1
            
        getNum = x[initial]
        email = first[0] + last[0] + str(x[initial]) + "@example.com"
        row = [first, last, num,last + str(num),  email.lower()]
        writer.writerow(row)
