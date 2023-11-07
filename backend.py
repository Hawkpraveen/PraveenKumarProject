from tkinter import *
from tkinter import simpledialog
import mysql.connector
from flask_cors import CORS
from flask import *
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/insertexercise', methods=["POST"], strict_slashes=False)
def insertexercise():
    r = request.json
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="health")
    mycursor = mydb.cursor()
    tx = 'select id from exercise order by id desc limit 1'
    mycursor.execute(tx)
    e = mycursor.fetchall()
    if len(e) == 0:
        eid = 1
    else:
        eid = e[0][0]+1
    d = "insert into exercise(id,equiment,gifurl,name,target,bodypart,calories12reps)values ('%s','%s','%s','%s','%s','%s','%s')" % (
        eid, r['equiment'], r['gifurl'], r['name'], r['target'], r['bodypart'], r['calories12reps'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 'e'


@app.route('/updateexercise', methods=["POST"], strict_slashes=False)
def updateexercise():
    r = request.json
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="health")
    d = "update exercise set equiment ='%s',gifurl ='%s',name ='%s',target ='%s',bodypart ='%s',calories12reps ='%s' where id='%s'" % (
        r['equiment'], r['gifurl'], r['name'], r['target'], r['bodypart'], r['calories12reps'], r['id'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/viewexercise', methods=["POST"], strict_slashes=False)
def viewexercise():
    import mysql.connector
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="health")
    mycursor = mydb.cursor()
    tx = "select distinct(bodypart) from exercise"
    mycursor.execute(tx)
    n = [x[0] for x in mycursor.fetchall()]
    data = [n]
    out = {}
    for y in n:
        out[y] = []
    mycursor = mydb.cursor()
    tx = "select * from exercise"
    mycursor.execute(tx)
    n = mycursor.fetchall()
    print(out)
    for k in n:
        out[k[-2]].append(k)
    data.append(out)
    return json.dumps(data)


@app.route('/deleteexercise', methods=["POST"], strict_slashes=False)
def deleteexercise():
    r = request.json
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="health")
    mycursor = mydb.cursor()
    tx = "delete from exercise where id={0}".format(r['id'])
    mycursor.execute(tx)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/insertusers', methods=["POST"], strict_slashes=False)
def insertusers():
    r = request.json
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="health")
    mycursor = mydb.cursor()
    tx = 'select userid from users order by userid desc limit 1'
    mycursor.execute(tx)
    e = mycursor.fetchall()
    BMI = int(r["weight"]) / (int(r["height"])/100)**2
    # now we print the BMI
    print(f"your BMI is: {BMI}")
    if BMI <= 18.4:
        d = "underweight."
    elif BMI <= 24.9:
        d = "normal weight."
    elif BMI <= 29.9:
        d = "overweight."
    elif BMI <= 34.9:
        d = "severly overweight."
    elif BMI <= 39.9:
        d = "bese"
    else:
        d = "severly obese"
    if len(e) == 0:
        eid = 1
    else:
        eid = e[0][0]+1
    d = "insert into users(userid,name,email,mobile,height,weight,age,password,gender,yourobse)values ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')" % (
        eid, r['name'], r['email'], r['mobile'], r['height'], r['weight'], r['age'], r['password'], r['gender'], d)
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 'e'


@app.route('/updateusers', methods=["POST"], strict_slashes=False)
def updateusers():
    r = request.json
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="health")
    d = "update users set name ='%s',email ='%s',mobile ='%s',height ='%s',weight ='%s',age ='%s',password ='%s',gender ='%s' where userid='%s'" % (
        r['name'], r['email'], r['mobile'], r['height'], r['weight'], r['age'], r['password'], r['gender'], r['userid'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/deleteusers', methods=["POST"], strict_slashes=False)
def deleteusers():
    r = request.json
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="health")
    mycursor = mydb.cursor()
    tx = "delete from users where userid={0}".format(r['id'])
    mycursor.execute(tx)
    mydb.commit()
    mycursor = mydb.cursor()
    tx = "select *   from users "
    mycursor.execute(tx)
    e = mycursor.fetchall()
    return json.dumps(e)


@app.route('/login', methods=["POST"], strict_slashes=False)
def login():
    r = request.json
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="health")
    mycursor = mydb.cursor()
    tx = "select *   from users where name='%s' and password='%s'" % (
        r["name"], r["password"])
    mycursor.execute(tx)
    e = mycursor.fetchone()
    mydb.close()
    return json.dumps(e)


@app.route('/viewuseri', methods=["POST"], strict_slashes=False)
def viewuseri():
    r = request.json
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="health")
    mycursor = mydb.cursor()
    tx = "select *   from users where userid='%s'" % (
        r["userid"])
    mycursor.execute(tx)
    e = mycursor.fetchone()
    print(e)
    mydb.close()
    return json.dumps(e)


def Weight_Loss(USER_INP, age, weight, height):

    import pandas as pd
    import numpy as np
    from sklearn.cluster import KMeans
    import tkinter as tk

    ROOT = tk.Tk()

    ROOT.withdraw()

    data = pd.read_csv('input.csv')

    Breakfastdata = data['Breakfast']
    BreakfastdataNumpy = Breakfastdata.to_numpy()

    Lunchdata = data['Lunch']
    LunchdataNumpy = Lunchdata.to_numpy()

    Dinnerdata = data['Dinner']
    DinnerdataNumpy = Dinnerdata.to_numpy()

    Food_itemsdata = data['Food_items']
    breakfastfoodseparated = []
    Lunchfoodseparated = []
    Dinnerfoodseparated = []

    breakfastfoodseparatedID = []
    LunchfoodseparatedID = []
    DinnerfoodseparatedID = []

    for i in range(len(Breakfastdata)):
        if BreakfastdataNumpy[i] == 1:
            breakfastfoodseparated.append(Food_itemsdata[i])
            breakfastfoodseparatedID.append(i)
        if LunchdataNumpy[i] == 1:
            Lunchfoodseparated.append(Food_itemsdata[i])
            LunchfoodseparatedID.append(i)
        if DinnerdataNumpy[i] == 1:
            Dinnerfoodseparated.append(Food_itemsdata[i])
            DinnerfoodseparatedID.append(i)

    LunchfoodseparatedIDdata = data.iloc[LunchfoodseparatedID]
    LunchfoodseparatedIDdata = LunchfoodseparatedIDdata.T
    val = list(np.arange(5, 16))
    Valapnd = [0]+[4]+val
    LunchfoodseparatedIDdata = LunchfoodseparatedIDdata.iloc[Valapnd]
    LunchfoodseparatedIDdata = LunchfoodseparatedIDdata.T

    breakfastfoodseparatedIDdata = data.iloc[breakfastfoodseparatedID]
    breakfastfoodseparatedIDdata = breakfastfoodseparatedIDdata.T
    val = list(np.arange(5, 16))
    Valapnd = [0]+[4]+val
    breakfastfoodseparatedIDdata = breakfastfoodseparatedIDdata.iloc[Valapnd]
    breakfastfoodseparatedIDdata = breakfastfoodseparatedIDdata.T

    DinnerfoodseparatedIDdata = data.iloc[DinnerfoodseparatedID]
    DinnerfoodseparatedIDdata = DinnerfoodseparatedIDdata.T
    val = list(np.arange(5, 16))
    Valapnd = [0]+[4]+val
    DinnerfoodseparatedIDdata = DinnerfoodseparatedIDdata.iloc[Valapnd]
    DinnerfoodseparatedIDdata = DinnerfoodseparatedIDdata.T

    bmi = weight/(height**2)

    for lp in range(0, 80, 20):
        test_list = np.arange(lp, lp+20)
        for i in test_list:
            if (i == age):
                print('age is between', str(lp), str(lp+10))
                agecl = round(lp/20)

    print("Your body mass index is: ", bmi)
    if (bmi < 16):
        print("severely underweight")
        clbmi = 4
    elif (bmi >= 16 and bmi < 18.5):
        print("underweight")
        clbmi = 3
    elif (bmi >= 18.5 and bmi < 25):
        print("Healthy")
        clbmi = 2
    elif (bmi >= 25 and bmi < 30):
        print("overweight")
        clbmi = 1
    elif (bmi >= 30):
        print("severely overweight")
        clbmi = 0

    DinnerfoodseparatedIDdata = DinnerfoodseparatedIDdata.to_numpy()
    LunchfoodseparatedIDdata = LunchfoodseparatedIDdata.to_numpy()
    breakfastfoodseparatedIDdata = breakfastfoodseparatedIDdata.to_numpy()
    ti = (clbmi+agecl)/2

    # K-Means Based  Dinner Food
    Datacalorie = DinnerfoodseparatedIDdata[1:, 1:len(
        DinnerfoodseparatedIDdata)]
    X = np.array(Datacalorie)
    kmeans = KMeans(n_clusters=3, random_state=0).fit(X)
    XValu = np.arange(0, len(kmeans.labels_))
    dnrlbl = kmeans.labels_

    # K-Means Based  Lunch Food
    Datacalorie = LunchfoodseparatedIDdata[1:, 1:len(LunchfoodseparatedIDdata)]
    X = np.array(Datacalorie)
    kmeans = KMeans(n_clusters=3, random_state=0).fit(X)
    XValu = np.arange(0, len(kmeans.labels_))
    lnchlbl = kmeans.labels_

    # K-Means Based  Breakfast Food
    Datacalorie = breakfastfoodseparatedIDdata[1:, 1:len(
        breakfastfoodseparatedIDdata)]
    X = np.array(Datacalorie)
    kmeans = KMeans(n_clusters=3, random_state=0).fit(X)
    XValu = np.arange(0, len(kmeans.labels_))
    brklbl = kmeans.labels_

    # Reading of the Dataset
    datafin = pd.read_csv('inputfin.csv')

    dataTog = datafin.T

    bmicls = [0, 1, 2, 3, 4]
    agecls = [0, 1, 2, 3, 4]

    weightlosscat = dataTog.iloc[[1, 2, 7, 8]]
    weightlosscat = weightlosscat.T
    weightgaincat = dataTog.iloc[[0, 1, 2, 3, 4, 7, 9, 10]]
    weightgaincat = weightgaincat.T
    healthycat = dataTog.iloc[[1, 2, 3, 4, 6, 7, 9]]
    healthycat = healthycat.T
    weightlosscatDdata = weightlosscat.to_numpy()
    weightgaincatDdata = weightgaincat.to_numpy()
    healthycatDdata = healthycat.to_numpy()
    weightlosscat = weightlosscatDdata[1:, 0:len(weightlosscatDdata)]
    weightgaincat = weightgaincatDdata[1:, 0:len(weightgaincatDdata)]
    healthycat = healthycatDdata[1:, 0:len(healthycatDdata)]

    weightlossfin = np.zeros((len(weightlosscat)*5, 6), dtype=np.float32)
    weightgainfin = np.zeros((len(weightgaincat)*5, 10), dtype=np.float32)
    healthycatfin = np.zeros((len(healthycat)*5, 9), dtype=np.float32)

    t = 0
    r = 0
    s = 0
    yt = []
    yr = []
    ys = []
    for zz in range(5):
        for jj in range(len(weightlosscat)):
            valloc = list(weightlosscat[jj])
            valloc.append(bmicls[zz])
            valloc.append(agecls[zz])
            weightlossfin[t] = np.array(valloc)
            yt.append(brklbl[jj])
            t += 1

        for jj in range(len(weightlosscat)):
            valloc = list(weightlosscat[jj])
            valloc.append(bmicls[zz])
            valloc.append(agecls[zz])
            weightlossfin[r] = np.array(valloc)
            yr.append(lnchlbl[jj])
            r += 1

        for jj in range(len(weightlosscat)):
            valloc = list(weightlosscat[jj])
            valloc.append(bmicls[zz])
            valloc.append(agecls[zz])
            weightlossfin[s] = np.array(valloc)
            ys.append(dnrlbl[jj])
            s += 1

    X_test = np.zeros((len(weightlosscat), 6), dtype=np.float32)

    for jj in range(len(weightlosscat)):
        valloc = list(weightlosscat[jj])
        valloc.append(agecl)
        valloc.append(clbmi)
        X_test[jj] = np.array(valloc)*ti

    from sklearn.model_selection import train_test_split

    val = int(USER_INP)

    if val == 1:
        X_train = weightlossfin
        y_train = yt

    elif val == 2:
        X_train = weightlossfin
        y_train = yr

    elif val == 3:
        X_train = weightlossfin
        y_train = ys

    from sklearn.ensemble import RandomForestClassifier

    clf = RandomForestClassifier(n_estimators=100)

    clf.fit(X_train, y_train)

    y_pred = clf.predict(X_test)

    print('SUGGESTED FOOD ITEMS ::')
    n = []
    for ii in range(len(y_pred)):
        if y_pred[ii] == 2:
            print(Food_itemsdata[ii])
            n.append(Food_itemsdata[ii])
    return n


def Weight_Gain(USER_INP, age, weight, height):

    import pandas as pd
    import numpy as np
    from sklearn.cluster import KMeans
    import tkinter as tk

    ROOT = tk.Tk()

    ROOT.withdraw()

    data = pd.read_csv('input.csv')
    data.head(5)
    Breakfastdata = data['Breakfast']
    BreakfastdataNumpy = Breakfastdata.to_numpy()

    Lunchdata = data['Lunch']
    LunchdataNumpy = Lunchdata.to_numpy()

    Dinnerdata = data['Dinner']
    DinnerdataNumpy = Dinnerdata.to_numpy()

    Food_itemsdata = data['Food_items']
    breakfastfoodseparated = []
    Lunchfoodseparated = []
    Dinnerfoodseparated = []

    breakfastfoodseparatedID = []
    LunchfoodseparatedID = []
    DinnerfoodseparatedID = []

    for i in range(len(Breakfastdata)):
        if BreakfastdataNumpy[i] == 1:
            breakfastfoodseparated.append(Food_itemsdata[i])
            breakfastfoodseparatedID.append(i)
        if LunchdataNumpy[i] == 1:
            Lunchfoodseparated.append(Food_itemsdata[i])
            LunchfoodseparatedID.append(i)
        if DinnerdataNumpy[i] == 1:
            Dinnerfoodseparated.append(Food_itemsdata[i])
            DinnerfoodseparatedID.append(i)

    LunchfoodseparatedIDdata = data.iloc[LunchfoodseparatedID]
    LunchfoodseparatedIDdata = LunchfoodseparatedIDdata.T
    val = list(np.arange(5, 15))
    Valapnd = [0]+val
    LunchfoodseparatedIDdata = LunchfoodseparatedIDdata.iloc[Valapnd]
    LunchfoodseparatedIDdata = LunchfoodseparatedIDdata.T

    breakfastfoodseparatedIDdata = data.iloc[breakfastfoodseparatedID]
    breakfastfoodseparatedIDdata = breakfastfoodseparatedIDdata.T
    val = list(np.arange(5, 15))
    Valapnd = [0]+val
    breakfastfoodseparatedIDdata = breakfastfoodseparatedIDdata.iloc[Valapnd]
    breakfastfoodseparatedIDdata = breakfastfoodseparatedIDdata.T

    DinnerfoodseparatedIDdata = data.iloc[DinnerfoodseparatedID]
    DinnerfoodseparatedIDdata = DinnerfoodseparatedIDdata.T
    val = list(np.arange(5, 15))
    Valapnd = [0]+val
    DinnerfoodseparatedIDdata = DinnerfoodseparatedIDdata.iloc[Valapnd]
    DinnerfoodseparatedIDdata = DinnerfoodseparatedIDdata.T

    bmi = weight/(height**2)
    agewiseinp = 0

    for lp in range(0, 80, 20):
        test_list = np.arange(lp, lp+20)
        for i in test_list:
            if (i == age):
                print('age is between', str(lp), str(lp+10))
                tr = round(lp/20)
                agecl = round(lp/20)

    print("Your body mass index is: ", bmi)
    if (bmi < 16):
        print("severely underweight")
        clbmi = 4
    elif (bmi >= 16 and bmi < 18.5):
        print("underweight")
        clbmi = 3
    elif (bmi >= 18.5 and bmi < 25):
        print("Healthy")
        clbmi = 2
    elif (bmi >= 25 and bmi < 30):
        print("overweight")
        clbmi = 1
    elif (bmi >= 30):
        print("severely overweight")
        clbmi = 0
    val1 = DinnerfoodseparatedIDdata.describe()
    valTog = val1.T
    DinnerfoodseparatedIDdata = DinnerfoodseparatedIDdata.to_numpy()
    LunchfoodseparatedIDdata = LunchfoodseparatedIDdata.to_numpy()
    breakfastfoodseparatedIDdata = breakfastfoodseparatedIDdata.to_numpy()
    ti = (bmi+agecl)/2

    # K-Means Based  Dinner Food
    Datacalorie = DinnerfoodseparatedIDdata[1:, 1:len(
        DinnerfoodseparatedIDdata)]
    X = np.array(Datacalorie)
    kmeans = KMeans(n_clusters=3, random_state=0).fit(X)
    XValu = np.arange(0, len(kmeans.labels_))
    dnrlbl = kmeans.labels_

    # K-Means Based  lunch Food
    Datacalorie = LunchfoodseparatedIDdata[1:, 1:len(LunchfoodseparatedIDdata)]
    X = np.array(Datacalorie)
    kmeans = KMeans(n_clusters=3, random_state=0).fit(X)
    XValu = np.arange(0, len(kmeans.labels_))
    lnchlbl = kmeans.labels_

    # K-Means Based  lunch Food
    Datacalorie = breakfastfoodseparatedIDdata[1:, 1:len(
        breakfastfoodseparatedIDdata)]
    X = np.array(Datacalorie)
    kmeans = KMeans(n_clusters=3, random_state=0).fit(X)
    XValu = np.arange(0, len(kmeans.labels_))
    brklbl = kmeans.labels_

    inp = []
    datafin = pd.read_csv('inputfin.csv')
    datafin.head(5)
    dataTog = datafin.T
    bmicls = [0, 1, 2, 3, 4]
    agecls = [0, 1, 2, 3, 4]
    weightlosscat = dataTog.iloc[[1, 2, 7, 8]]
    weightlosscat = weightlosscat.T
    weightgaincat = dataTog.iloc[[0, 1, 2, 3, 4, 7, 9, 10]]
    weightgaincat = weightgaincat.T
    healthycat = dataTog.iloc[[1, 2, 3, 4, 6, 7, 9]]
    healthycat = healthycat.T
    weightlosscatDdata = weightlosscat.to_numpy()
    weightgaincatDdata = weightgaincat.to_numpy()
    healthycatDdata = healthycat.to_numpy()
    weightlosscat = weightlosscatDdata[1:, 0:len(weightlosscatDdata)]
    weightgaincat = weightgaincatDdata[1:, 0:len(weightgaincatDdata)]
    healthycat = healthycatDdata[1:, 0:len(healthycatDdata)]

    weightlossfin = np.zeros((len(weightlosscat)*5, 6), dtype=np.float32)
    weightgainfin = np.zeros((len(weightgaincat)*5, 10), dtype=np.float32)
    healthycatfin = np.zeros((len(healthycat)*5, 9), dtype=np.float32)
    t = 0
    r = 0
    s = 0
    yt = []
    yr = []
    ys = []
    for zz in range(5):
        for jj in range(len(weightgaincat)):
            valloc = list(weightgaincat[jj])
            valloc.append(bmicls[zz])
            valloc.append(agecls[zz])
            weightgainfin[t] = np.array(valloc)
            yt.append(brklbl[jj])
            t += 1
        for jj in range(len(weightgaincat)):
            valloc = list(weightgaincat[jj])
            valloc.append(bmicls[zz])
            valloc.append(agecls[zz])
            weightgainfin[r] = np.array(valloc)
            yr.append(lnchlbl[jj])
            r += 1
        for jj in range(len(weightgaincat)):
            valloc = list(weightgaincat[jj])
            valloc.append(bmicls[zz])
            valloc.append(agecls[zz])
            weightgainfin[s] = np.array(valloc)
            ys.append(dnrlbl[jj])
            s += 1

    X_test = np.zeros((len(weightgaincat), 10), dtype=np.float32)

    for jj in range(len(weightgaincat)):
        valloc = list(weightgaincat[jj])
        valloc.append(agecl)
        valloc.append(clbmi)
        X_test[jj] = np.array(valloc)*ti

    from sklearn.model_selection import train_test_split

    val = int(USER_INP)

    if val == 1:
        X_train = weightgainfin
        y_train = yt

    elif val == 2:
        X_train = weightgainfin
        y_train = yr

    elif val == 3:
        X_train = weightgainfin
        y_train = ys

    from sklearn.model_selection import train_test_split

    from sklearn.ensemble import RandomForestClassifier

    clf = RandomForestClassifier(n_estimators=100)

    clf.fit(X_train, y_train)

    y_pred = clf.predict(X_test)

    n = []
    for ii in range(len(y_pred)):
        if y_pred[ii] == 2:
            print(Food_itemsdata[ii])
            n.append(Food_itemsdata[ii])
    return n


def Healthy(USER_INP, age, weight, height):

    import pandas as pd
    import numpy as np

    from sklearn.cluster import KMeans

    data = pd.read_csv('input.csv')
    data.head(5)
    Breakfastdata = data['Breakfast']
    BreakfastdataNumpy = Breakfastdata.to_numpy()

    Lunchdata = data['Lunch']
    LunchdataNumpy = Lunchdata.to_numpy()

    Dinnerdata = data['Dinner']
    DinnerdataNumpy = Dinnerdata.to_numpy()

    Food_itemsdata = data['Food_items']
    breakfastfoodseparated = []
    Lunchfoodseparated = []
    Dinnerfoodseparated = []

    breakfastfoodseparatedID = []
    LunchfoodseparatedID = []
    DinnerfoodseparatedID = []

    for i in range(len(Breakfastdata)):
        if BreakfastdataNumpy[i] == 1:
            breakfastfoodseparated.append(Food_itemsdata[i])
            breakfastfoodseparatedID.append(i)
        if LunchdataNumpy[i] == 1:
            Lunchfoodseparated.append(Food_itemsdata[i])
            LunchfoodseparatedID.append(i)
        if DinnerdataNumpy[i] == 1:
            Dinnerfoodseparated.append(Food_itemsdata[i])
            DinnerfoodseparatedID.append(i)

    LunchfoodseparatedIDdata = data.iloc[LunchfoodseparatedID]
    LunchfoodseparatedIDdata = LunchfoodseparatedIDdata.T
    val = list(np.arange(5, 15))
    Valapnd = [0]+val
    LunchfoodseparatedIDdata = LunchfoodseparatedIDdata.iloc[Valapnd]
    LunchfoodseparatedIDdata = LunchfoodseparatedIDdata.T

    breakfastfoodseparatedIDdata = data.iloc[breakfastfoodseparatedID]
    breakfastfoodseparatedIDdata = breakfastfoodseparatedIDdata.T
    val = list(np.arange(5, 15))
    Valapnd = [0]+val
    breakfastfoodseparatedIDdata = breakfastfoodseparatedIDdata.iloc[Valapnd]
    breakfastfoodseparatedIDdata = breakfastfoodseparatedIDdata.T

    DinnerfoodseparatedIDdata = data.iloc[DinnerfoodseparatedID]
    DinnerfoodseparatedIDdata = DinnerfoodseparatedIDdata.T
    val = list(np.arange(5, 15))
    Valapnd = [0]+val
    DinnerfoodseparatedIDdata = DinnerfoodseparatedIDdata.iloc[Valapnd]
    DinnerfoodseparatedIDdata = DinnerfoodseparatedIDdata.T

    bmi = weight/(height**2)
    agewiseinp = 0

    for lp in range(0, 80, 20):
        test_list = np.arange(lp, lp+20)
        for i in test_list:
            if (i == age):
                print('age is between', str(lp), str(lp+10))
                tr = round(lp/20)
                agecl = round(lp/20)

    print("Your body mass index is: ", bmi)
    if (bmi < 16):
        print("severely underweight")
        clbmi = 4
    elif (bmi >= 16 and bmi < 18.5):
        print("underweight")
        clbmi = 3
    elif (bmi >= 18.5 and bmi < 25):
        print("Healthy")
        clbmi = 2
    elif (bmi >= 25 and bmi < 30):
        print("overweight")
        clbmi = 1
    elif (bmi >= 30):
        print("severely overweight")
        clbmi = 0
    val1 = DinnerfoodseparatedIDdata.describe()
    valTog = val1.T
    DinnerfoodseparatedIDdata = DinnerfoodseparatedIDdata.to_numpy()
    LunchfoodseparatedIDdata = LunchfoodseparatedIDdata.to_numpy()
    breakfastfoodseparatedIDdata = breakfastfoodseparatedIDdata.to_numpy()
    ti = (bmi+agecl)/2

    # K-Means Based  Dinner Food
    Datacalorie = DinnerfoodseparatedIDdata[1:, 1:len(
        DinnerfoodseparatedIDdata)]
    X = np.array(Datacalorie)
    kmeans = KMeans(n_clusters=3, random_state=0).fit(X)
    XValu = np.arange(0, len(kmeans.labels_))
    dnrlbl = kmeans.labels_

    # K-Means Based  lunch Food
    Datacalorie = LunchfoodseparatedIDdata[1:, 1:len(LunchfoodseparatedIDdata)]
    X = np.array(Datacalorie)
    kmeans = KMeans(n_clusters=3, random_state=0).fit(X)
    XValu = np.arange(0, len(kmeans.labels_))
    lnchlbl = kmeans.labels_

    # K-Means Based  lunch Food
    Datacalorie = breakfastfoodseparatedIDdata[1:, 1:len(
        breakfastfoodseparatedIDdata)]
    X = np.array(Datacalorie)
    kmeans = KMeans(n_clusters=3, random_state=0).fit(X)
    XValu = np.arange(0, len(kmeans.labels_))
    brklbl = kmeans.labels_
    inp = []
    datafin = pd.read_csv('inputfin.csv')
    datafin.head(5)
    dataTog = datafin.T
    bmicls = [0, 1, 2, 3, 4]
    agecls = [0, 1, 2, 3, 4]
    weightlosscat = dataTog.iloc[[1, 2, 7, 8]]
    weightlosscat = weightlosscat.T
    weightgaincat = dataTog.iloc[[0, 1, 2, 3, 4, 7, 9, 10]]
    weightgaincat = weightgaincat.T
    healthycat = dataTog.iloc[[1, 2, 3, 4, 6, 7, 9]]
    healthycat = healthycat.T
    weightlosscatDdata = weightlosscat.to_numpy()
    weightgaincatDdata = weightgaincat.to_numpy()
    healthycatDdata = healthycat.to_numpy()
    weightlosscat = weightlosscatDdata[1:, 0:len(weightlosscatDdata)]
    weightgaincat = weightgaincatDdata[1:, 0:len(weightgaincatDdata)]
    healthycat = healthycatDdata[1:, 0:len(healthycatDdata)]

    weightlossfin = np.zeros((len(weightlosscat)*5, 6), dtype=np.float32)
    weightgainfin = np.zeros((len(weightgaincat)*5, 10), dtype=np.float32)
    healthycatfin = np.zeros((len(healthycat)*5, 9), dtype=np.float32)
    t = 0
    r = 0
    s = 0
    yt = []
    yr = []
    ys = []
    for zz in range(5):
        for jj in range(len(healthycat)):
            valloc = list(healthycat[jj])
            valloc.append(bmicls[zz])
            valloc.append(agecls[zz])
            healthycatfin[t] = np.array(valloc)
            yt.append(brklbl[jj])
            t += 1
        for jj in range(len(healthycat)):
            valloc = list(healthycat[jj])
            valloc.append(bmicls[zz])
            valloc.append(agecls[zz])
            healthycatfin[r] = np.array(valloc)
            yr.append(lnchlbl[jj])
            r += 1
        for jj in range(len(healthycat)):
            valloc = list(healthycat[jj])
            valloc.append(bmicls[zz])
            valloc.append(agecls[zz])
            healthycatfin[s] = np.array(valloc)
            ys.append(dnrlbl[jj])
            s += 1

    X_test = np.zeros((len(healthycat)*5, 9), dtype=np.float32)
    for jj in range(len(healthycat)):
        valloc = list(healthycat[jj])
        valloc.append(agecl)
        valloc.append(clbmi)
        X_test[jj] = np.array(valloc)*ti

    from sklearn.model_selection import train_test_split

    val = int(USER_INP)

    if val == 1:
        X_train = healthycatfin
        y_train = yt

    elif val == 2:
        X_train = healthycatfin
        y_train = yt

    elif val == 3:
        X_train = healthycatfin
        y_train = ys

    from sklearn.model_selection import train_test_split

    from sklearn.ensemble import RandomForestClassifier

    clf = RandomForestClassifier(n_estimators=100)

    clf.fit(X_train, y_train)

    y_pred = clf.predict(X_test)

    print('SUGGESTED FOOD ITEMS ::')
    n = []
    for ii in range(len(y_pred)):
        if y_pred[ii] == 2:
            print(Food_itemsdata[ii])
            n.append(Food_itemsdata[ii])
    return n


@app.route('/viewallusers', methods=["POST"], strict_slashes=False)
def viewallusers():
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="health")
    mycursor = mydb.cursor()
    out = {}
    tx = "select *   from users "
    mycursor.execute(tx)
    e = mycursor.fetchall()
    return json.dumps(e)


@app.route('/viewusers', methods=["POST"], strict_slashes=False)
def viewusers():
    r = request.json
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="health")
    mycursor = mydb.cursor()
    out = {}
    tx = "select *   from users where userid='%s'" % (r["userid"])
    mycursor.execute(tx)
    e = mycursor.fetchone()
    out["user"] = e
    mydb.close()
    if e[-1] == "underweight.":
        print(1, e[6], e[4], e[5])
        d = Weight_Gain(1, e[6], e[4], e[5])
        out["bf"] = d
        d = Weight_Gain(2, e[6], e[4], e[5])
        out["lunch"] = d
        d = Weight_Gain(3, e[6], e[4], e[5])
        out["dnr"] = d
    elif e[-1] == "normal weight.":
        print(1, e[6], e[4], e[5])
        d = Healthy(1, e[6], e[4], e[5])
        out["bf"] = d
        d = Healthy(2, e[6], e[4], e[5])
        out["lunch"] = d
        d = Healthy(3, e[6], e[4], e[5])
        out["dnr"] = d
    elif e[-1] == "overweight.":
        print(1, e[6], e[4], e[5])
        d = Weight_Loss(1, e[6], e[4], e[5])
        out["bf"] = d
        d = Weight_Loss(2, e[6], e[4], e[5])
        out["lunch"] = d
        d = Weight_Loss(3, e[6], e[4], e[5])
        out["dnr"] = d
    elif e[-1] == "severly overweight.":
        print(1, e[6], e[4], e[5])
        d = Weight_Loss(1, e[6], e[4], e[5])
        out["bf"] = d
        d = Weight_Loss(2, e[6], e[4], e[5])
        out["lunch"] = d
        d = Weight_Loss(3, e[6], e[4], e[5])
        out["dnr"] = d

    elif e[-1] == "bese":
        d = Weight_Loss(1, e[6], e[4], e[5])
        out["bf"] = d
        d = Weight_Loss(2, e[6], e[4], e[5])
        out["lunch"] = d
        d = Weight_Loss(3, e[6], e[4], e[5])
        out["dnr"] = d

    else:
        d = Weight_Loss(1, e[6], e[4], e[5])
        out["bf"] = d
        d = Weight_Loss(2, e[6], e[4], e[5])
        out["lunch"] = d
        d = Weight_Loss(3, e[6], e[4], e[5])
        out["dnr"] = d

    return json.dumps(out)


@app.route('/dailychallenge', methods=["POST"], strict_slashes=False)
def dailychallenge():
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="health")
    mycursor = mydb.cursor()
    tx = "select *   from dailychallenge"
    mycursor.execute(tx)
    e = mycursor.fetchall()
    mydb.close()
    return json.dumps(e)


@app.route('/calories', methods=["POST"], strict_slashes=False)
def calories():
    r = request.json
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="health")
    mycursor = mydb.cursor()
    tx = "select *   from calories where userid='%s'" % (r["id"])
    mycursor.execute(tx)
    e = mycursor.fetchall()
    mydb.close()
    return json.dumps(e)


@app.route('/eachcalories', methods=["POST"], strict_slashes=False)
def eachcalories():
    r = request.json
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="health")
    mycursor = mydb.cursor()
    tx = "select *   from calories where curdate=curdate() and userid='%s'" % (
        r["id"])
    mycursor.execute(tx)
    e = mycursor.fetchone()
    mydb.close()
    return json.dumps(e)


@app.route('/insertcalories', methods=["POST"], strict_slashes=False)
def insertcalories():
    r = request.json
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="health")
    mycursor = mydb.cursor()
    tx = "select count(*) from calories where curdate=curdate() and userid='%s'" % (
        r["userid"])
    mycursor.execute(tx)
    e = mycursor.fetchone()
    if (e[0] == 0):
        mycursor = mydb.cursor()
        tx = "INSERT INTO `calories`( `breakfast`, `lunch`, `dnr`, `exercise`,  `userid`,water) VALUES ('%s','%s','%s','%s','%s','%s')" % (
            r["breakfast"], r["lunch"], r["dnr"], r["exercise"], r["userid"], r["water"])
        mycursor.execute(tx)
        mydb.commit()
        mydb.close()
        return 's'
    else:
        return "already filled"


@app.route('/noteveiw', methods=["POST"], strict_slashes=False)
def noteveiw():

    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="health")
    mycursor = mydb.cursor()
    tx = "select *   from notification"
    mycursor.execute(tx)
    e = mycursor.fetchall()
    mydb.close()
    return json.dumps(e)


@app.route('/noteup', methods=["POST"], strict_slashes=False)
def noteup():
    r = request.json
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="health")
    for k in r["x"]:

        mycursor = mydb.cursor()
        tx = "update notification set  time='%s' where id='%s'" % (k[1], k[0])
        mycursor.execute(tx)
        mydb.commit()
    mycursor = mydb.cursor()
    tx = "select *   from notification"
    mycursor.execute(tx)
    e = mycursor.fetchall()
    mydb.close()
    return json.dumps(e)


@app.route('/getquotes', methods=["POST"], strict_slashes=False)
def getquotes():
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="health")
    mycursor = mydb.cursor()
    tx = "select *   from quotes"
    mycursor.execute(tx)
    e = mycursor.fetchall()
    r = []
    for k in e:
        v = {}
        v["id"] = k[0]
        v["text"] = k[1]
        v["author"] = k[2]
        v["categories"] = k[3]
        r.append(v)
    val = []
    import random
    for k in range(3):
        y = random.randint(0000, 9301)
        val.append(r[y])
    print(val)
    mydb.close()
    return json.dumps(val)


if __name__ == '__main__':
    app.run('0.0.0.0')
