sap.ui.controller("course_content.course", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf course_content.course
*/
	onInit: function() {
		var oModel = new sap.ui.model.json.JSONModel();
	     oModel.loadData("modeldata/data.json");
	     this.getView().setModel(oModel);
	     
	     var oTable = this.getView().byId("idTable");
	     var oText = new sap.m.Text({text:"{subtopic}"});
	     var oTemplate = new sap.m.ColumnListItem({
	    cells : [
	    	sap.m.Panel({ expandable:true, expanded:false, headerText: "{maintopic}"}).bindAggregation("content","/topic",oText)
	    ]	 
	     });      
	    	 	    
	 
	   
	     
	     oTable.bindAggregation("items","/topic",oTemplate);     
	    	     
	     
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf course_content.course
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf course_content.course
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf course_content.course
*/
//	onExit: function() {
//
//	}

});