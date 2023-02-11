# Student-Enrollment-Form

In this project, I have designed a Student Enrollm"ent Form to input the student details using a HTML form and store the information collected in a database managed by using JsonPowerDB. 

**TITLE OF THE PROJECT**
The project title is "Student Enrollment Form". It stores student details such as Roll_No, Name, Address, Enrollment_date, and BirthDate with three buttons "Save", "Reset" and "Update" to perform the respective operations. 

**DESCRIPTION**
I have created an HTML form where the input is taken from the user and that input is validated as per the criteria set to store the values in a database Student-DB using powerful JsonPowerDB. The default focus will be on the Student Roll_no text box and every time a button is clicked the focus comes back to the Student Roll_no text box.
The three buttons used in the form have their respective tasks:
"Save" : The button will save the details in the Student-Table inside the Student-DB. 
"Update" : This button is used to update the records if any need arises. 
"Reset" " This button is used to reset the contents of the form to empty. Also, every time save or update button is clicked the function resetForm() will automatically be called to reset the contents to empty. 

**BENEFITS OF USING JSONPOWERDB**
JsonPowerDB (JPDB) is Next Generation, Creative and Disruptive Multi-mode DBMS_ with many USPs.
Proprietary algorithm for High Performance CRUD operations. 
Multiple times faster than popular DBMS.
Serverless support for faster development - A UI developer can develop complete dynamic application.
DBMS with built in web / application server and embedded caching makes the performance lightning fast.
Server side Native NoSQL - best query performance.
In-built support to query on multiple JPDB databases.
Multi-mode DBMS - Document DB, Key-Value DB, RDBMS support.

**RELEASE NOTES**
v0.3.2.20220829.2828 beta

0.3.2 / 2022-08-29
==================
* Completed Phase-4 of Pluggable API framework for configuration properties that controls the usage of API for global and individual users.
* Added NEW pluggable API for importing data from CSV files.
* Modified existing Drive API to support the Phase-4 of Pluggable API release.
* Development for Phase-1 for Replication of user's database - Replica Manager Dashboard, Sync user database from MasterNode to ReplicaNode(s) completed. 
* Added: New methods in jpdb-commons.js (0.0.4 and 0.0.5) for creating the 
  COPY COLUMN request i.e. createCopyColumnRequest(token, jsonObj, dbName, relName), 
  RENAME COLUMN request i.e. createRenameColumnRequest(token, jsonObj, dbName, relName), 
  REMOVE COLUMN request i.e. createRemoveColumnRequest(token, jsonObj, dbName, relName), 
  CHANGE COLUMN request i.e. createChangeColumnTypeRequest(token, jsonObj, dbName, relName), 
  UPDATE RECORD request i.e. createUPDATERecordRequest2(token, jsonObj, dbName, relName).
* Improved: Documentation
* Improved: SMTP Implementation for sending Emails 
* Fixed: Various Important bugs fixed
