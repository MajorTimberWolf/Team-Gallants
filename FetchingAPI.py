import requests
import mysql.connector as sqltor

mycon = sqltor.connect(host = "localhost", user = "root", password = "root")
mycursor = mycon.cursor()
mycursor.execute("CREATE DATABASE IF NOT EXISTS FIYOC")
print("Database created")
mycursor.execute("USE FIYOC")
contributors = """CREATE TABLE IF NOT EXISTS contributors (
    username VARCHAR(50) NOT NULL,
    contributions INTEGER,
    repository VARCHAR(50)
)"""
mycursor.execute(contributors)

repoName = [
  "Mozilla/send", 
   "Mozilla/sops",
   "Mozilla/glean",
   "Brave/brave-browser",
   "Brave/brave-core",
   "Brave/brave-ios",
   "Brave/brave-ui",
   "Brave/adblock-rust",
   "Adobe/spectrum-web-components",
   "Adobe/helix-website",
   "Adobe/hyde",
   "Adobe/ferrum", 
]

for repo in repoName:
    api_url = f"https://api.github.com/repos/{repo}/contributors"

    response = requests.get(api_url)
    data = response.json()
    print(data)
    for user in data:
        #print(user['login'], user['contributions'])
        username = user["login"]
        contributions = user["contributions"]
        mycursor.execute(f"INSERT INTO contributors values('{username}', {contributions}, '{repo}')")
    #print("\n\n\n\n")
    print("TABLE CREATED")

mycon.commit()