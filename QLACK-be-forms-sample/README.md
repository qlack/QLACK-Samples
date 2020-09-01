# Qlack-BusinessEngine forms sample application

This application demonstrates how a form can be loaded as an iframe in an angular application
 using Qlack-BusinessEngine as a middleware.

This application is the "end application" described in the diagram below.

![qbe-forms-arch](https://github.com/qlack/QLACK-BusinessEngine/blob/master/qlack-be-forms/qlack-be-forms-server/src/main/resources/images/qbe-forms-arch.png?raw=true)

### qlack-be-forms-sample-server

This module is a simple Spring boot backend application that uses Zuul Reverse proxy to proxy
 requests from backend to the Qlack-BusinessEngine middleware. 

### qlack-be-forms-sample-ui

This module is a simple angular application with a button that loads an orbeon form in an iframe
. The form should be first created on Qlack-BusinessEngine forms under the app name `qlack` and the
 form name `myform`. Upon clicking save on the form the middleware calls the `submitDone()` function, a globally registered function bound to an angular controller function to alert
  that the data have been submitted and then navigates to the edit of the form the user has just
   completed. The edit part is hard to distinguish for the moment in this app.

## Run
To run this application while on root folder on a cmd execute 

```cmd
mvn clean install
```

 Then, change directory on  `/qlack-be-forms-sample-server`

```cmd
cd qlack-be-forms-sample-server
```

and execute:

```cmd
mvn spring-boot:run
```

The application should be deployed in port 8081. Hit the homepage at [http://localhost:8081](http://localhost:8081)
