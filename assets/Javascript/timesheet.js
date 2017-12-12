 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyDvLn91mLeOQW21Pxx5Gu8xTLoz-hcTx_s",
     authDomain: "my-awesome-project-b6074.firebaseapp.com",
     databaseURL: "https://my-awesome-project-b6074.firebaseio.com",
     projectId: "my-awesome-project-b6074",
     storageBucket: "my-awesome-project-b6074.appspot.com",
     messagingSenderId: "844819946056"
 };
 firebase.initializeApp(config);

 var database = firebase.database();

 $("#submit").on("click", function (event) {
     event.preventDefault();

     var empName = $("#employeeName").val().trim();
     var empRole = $("#role").val().trim();
     var empStart = $("#startDate").val().trim();
     var empRate = $("#rate").val().trim();

     var newEmp = {
         name: empName,
         role: empRole,
         start: empStart,
         rate: empRate
     };

     //Uploads employee data to the database
     database.ref().push(newEmp);

     //logs everything to console
     console.log(newEmp.name);
     console.log(newEmp.role);
     console.log(newEmp.start);
     console.log(newEmp.rate);

     //Alert
     alert("Employe succesfully added");

     // clear input after submit
     $("#employeeName").val("").focus();
     $("#role").val("").focus();
     $("#startDate").val("").focus();
     $("#rate").val("").focus();
 });

 //Create Firebase event for adding employee to the datbase and a row in the html when a user add an ent 
 database.ref().on("child_added", function(childSnapshot, prevChildKey){
    // storing the snapshot.val() in a variable for convenience
    var sv = childSnapshot.val();
    
          // Console.loging the last user's data
          console.log(sv.name);
          console.log(sv.role);
          console.log(sv.start);
          console.log(sv.rate);

 })

