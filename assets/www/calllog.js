/************************************** 
* Name:			ScreenCapture.js
* Brief:		Wrapper for accessing the Native code
* Version:		1.0
* Publisher: 	SAP 
* CopyRight: 	Copyright (c) SAP @ 2013
* Author: 		Sachin Mohite
* email: 		s.mohite@sap.com
* Description:	
**************************************/

/*********************************************************************
					CallLog.js starts here
 ********************************************************************/

/**********************************	
* Name:				CallLog()
* Return:			void 
* Parameters:		
*					No parameters						
* Description:
*					return Object literal singleton instance of Torch
* Author :			Sachin Mohite
************************************/
function CallLog() {
	this.resultCallback = null; // Function
}

/**********************************	
* Name:				cordova.addConstructor
* Return:			void 
* Parameters:		
*					No parameters						
* Description:
*					This Method is used to add the constructors to the Cordova module
* Author :			Sachin Mohite
************************************/
cordova.addConstructor(function()
{
	
	//Creating the instance of plugins if does not exist already
	if(!window.plugins)
	{
		window.plugins = {};
		
	}//if(!window.plugins)
	   
	// shim to work in 1.5 and 1.6
	if(!window.Cordova)
	{
		window.Cordova = cordova;
		
	}//if(!window.Cordova)

	//Creating the instance of CallLog if doesnt exist already
	if (!window.plugins.CallLog)
	{
		window.plugins.CallLog = new CallLog();
		
	}//if (!window.plugins.CallLog)
	
});

CallLog.prototype.list = function(strLimit, successCallback, failureCallback) {
	//Variable declaration	
	var params= {};
	
	//assigning function parameters to the arrayList
	if(params)
	{
		params.strLimit = strLimit;
	}//if(params)
	
	return cordova.exec(successCallback, failureCallback, 'CallLog', 'list',	[ params ]);
};

CallLog.prototype.contact = function(contactNumber, successCallback, failureCallback)
{

	//Variable declaration	
	var params= {};
	
	//assigning function parameters to the arrayList
	if(params)
	{
		params.contactNumber = contactNumber;
	}//if(params)
	
	return cordova.exec(successCallback, failureCallback, 'CallLog', 'contact', [ params ]);
};

CallLog.prototype.show = function(contactNumber, successCallback, failureCallback)
{

	//Variable declaration
	var params= {};
	
	//assigning function parameters to the arrayList
	if(params)
	{
		params.contactNumber = contactNumber;
	}//if(params)

	return cordova.exec(successCallback, failureCallback, 'CallLog', 'show',	[ params ]);
};

/**********************************	
* Name:				onSuccess
* Return:			void 
* Parameters:		
*					No parameters						
* Description:
*					onSuccess call back
* Author :			Sachin Mohite
************************************/
function onSuccess()
{
	console.log("****************onSuccess");
}//function onSuccess()

/**********************************	
* Name:				onFailure
* Return:			void 
* Parameters:		
*					No parameters						
* Description:
*					onFailure call back
* Author :			Sachin Mohite
************************************/
function onFailure()
{
	console.log("*******************onFailure");
}//function onFailure()

/*********************************************************************
				ScreenCapture.js ends here
********************************************************************/