//Javascript file includes function definition

function validateAndGetFormData() {
      var idVar = $("#id").val();
      if (idVar === "") {
      alert("Student RollNo Required Value");
      $("#id").focus();
      return "";
    }
  var nameVar = $("#name").val();
  if (nameVar === "") {
  alert("Student Name is Required Value");
  $("#name").focus();
  return "";
  }
  var enrVar = $("#enrollment_date").val();
  if (emailVar === "") {
  alert("Student Enrollment Date is Required Value");
  $("#enrollment_date").focus();
  return "";
  }
  var classVar = $("#class").val();
  if (classVar === "") {
  alert("Student Class is Required Value");
  $("#class").focus();
  return "";
  }
  var birthVar = $("#birthDate").val();
  if (birthVar === "") {
  alert("Student Birthdate is Required Value");
  $("#birthDate").focus();
  return "";
  }
  var addressVar = $("#address").val();
  if (addressVar === "") {
  alert("Student address is Required Value");
  $("#address").focus();
  return "";
  }
  var jsonStrObj = {
     Roll_no: idVar,
     Full_Name: nameVar,
     Class: classVar,
    BirthDate: birthVar,
    Enrollment_date: enrVar,
    Address: addressVar
   };
   return JSON.stringify(jsonStrObj);
  }
// This method is used to create PUT Json request.
function createPUTRequest(connToken, jsonObj, dbName, relName) {
  var putRequest = "{\n"+ "\"token\" : \"" + connToken
  + "\","
+ "\"dbName\": \""
+ dbName
+ "\",\n" + "\"cmd\" : \"PUT\",\n"
+ "\"rel\" : \""
+ relName + "\","
+ "\"jsonStr\": \n"
+ jsonObj
+ "\n"
+ "}";
return putRequest;
}
function executeCommand(reqString, dbBaseUrl, apiEndPointUrl) {
var url = dbBaseUrl + apiEndPointUrl;
var jsonObj;
$.post(url, reqString, function (result) {
jsonObj = JSON.parse(result);
}).fail(function (result) {
var dataJsonObj = result.responseText;
jsonObj = JSON.parse(dataJsonObj);
});
return jsonObj;
}

//To fill the data when a roll_no is entered
function fillData(jsonObj){
  saveRecNo2LS(jsonObj);
  var data= JSON.parse(jsonObj.data).record;
  $("#id").val("data.Roll_no")
  $("#name").val("data.Full_Name");
  $("#enrollment_date").val("data.Enrollment_date");
  $("#class").val("data.Class");
  $("#birthDate").val("data.BirthDate");
  $("#address").val("data.Address");
}


function resetForm() {
  $("#id").val("")
  $("#name").val("");
  $("#enrollment_date").val("");
  $("#birthDate").val("");
  $("#address").val("");
  $("#id").prop("disabled", false);
  $("#save").prop("disabled", true);
  $("#update").prop("disabled", true);
  $("#reset").prop("disabled", true);
  $("#id").focus();
}


function getStu(){
  var stuIdJsonObj= getStuIdAsJsonObj();
  var getRequest= createGET_BY_KEYRequest("90932650|-31949276125560560|90948779","STUDENT-DB", "STUDENT-TABLE", stuIdJsonObj);
  jQuery.ajaxSetup({async:false});
  var resJsonObj= executeCommandAtGivenBaseUrl(getRequest,"http://api.login2explore.com:5577", "/api/irl" );
  jQuery.ajaxSetup({async: true});
  if(resJsonObj.status=== 400){
    $("#save").prop("disabled", false);
    $("#update").prop("disabled", false);
    $("#name").focus();
  }
  else if(resJsonObj.status=== 200){
    $("#id").prop("disabled", true);
    fillData(resJsonObj);

    $("#update").prop("disabled", false);
    $("#reset").prop("disabled", false);
    $("#name").focus();
  }
}

function saveRecNo2LS(jsonObj){
  var lvData= JSON.parse(jsonObj.data);
  localStorage.setItem("recno", lvData.rec_no);
}


function getStuIdAsJsonObj(){
  var id= $('#id').val();
  var jsonStr= {
    Roll_no: id;
  };
  return JSON.stringify(jsonStr);
}


function saveStudent(){
  var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
       return "";
    }
    var putReqStr = 
   createPUTRequest("90932650|-31949276125560560|90948779",
    jsonStr, "STUDENT-DB", "STUDENT-TABLE");
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommand(putReqStr,"http://api.login2explore.com:5577", "/api/iml");
     jQuery.ajaxSetup({async: true});
    resetForm();
  $("#id").focus();
  }


function changeData(){
  $('#update').prop("disabled", true);
  jsonChg= validateAndGetFormData();
  var updateRequest= createUPDATERecordRequest("90932650|-31949276125560560|90948779",
    jsonChg, "STUDENT-DB", "STUDENT-TABLE");
  jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(updateRequest,"http://api.login2explore.com:5577", "/api/iml");
     jQuery.ajaxSetup({async: true});
    resetForm();
  $("#id").focus();
}
