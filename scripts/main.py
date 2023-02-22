#pip3 install Faker
from faker import Faker
import csv
faker = Faker()

#number of fake students
totalInfo = 4000;

with open('students.csv','w', newline='') as file:
    writer = csv.writer(file,delimiter = ',')
    writer.writerow(['First name', 'Last Name', 'StudentID', 'email'])
    for i in range(1,totalInfo+1):
        fullname = faker.name().split()
        first = fullname[0]
        #incase it has middle name
        if(len(fullname) == 3):
            last = fullname[2]
        else:
            last = fullname[1]
        if(fullname.count(' ') == 2):
            first,last = fullname.split()
        
        email = first[0] + last[0] + str(i) + "@example.com"
        row = [first, last, "{:04d}".format(i), email.lower()]
        writer.writerow(row)
