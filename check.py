weight=72.9
height=172.5
BMI = weight /(height/100)**2
#now we print the BMI
print(f"your BMI is: {BMI}")
if BMI <= 18.4 :
    print("You are underweight.")
elif BMI <= 24.9 :
    print ("You have a normal weight.")
elif BMI <= 29.9 :
    print ("You are overweight.")
elif BMI <= 34.9 :
    print("You are severly overweight.")
elif BMI <= 39.9 :
    print("You are obese")
else :
    print("You are severly obese")
