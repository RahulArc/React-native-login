# How to start application

JWT secures the application and uses authentication 

## Run the application as spring boot app

### Step 1: Register the username and password as a POST request as shown in Postman

![Test Image 1](images/s1.png)

![Test Image 2](images/s2.png)

### Step 2: Keep the username and password same, use "/authenticate" to generate unique hashcode

![Test Image 3](images/s3.png)

### Step 3: Add header as "Authorization" and add hashcode generated in above step prefixing with " Bearer [space] hashcode"

![Test Image 4](images/s4.png)

### Step 4: GET request using above header and different URl

![Test Image 5](images/s5.png)