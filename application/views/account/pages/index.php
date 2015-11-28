<!doctype html>
<html ng-app="pageBuilder">
  <head>



	<script src="<?php echo base_url('/assets/js/angular1.4.8.js');?>"></script>
	<script src="<?php echo base_url('/assets/js/angular-strap.js');?>"></script>
	<script src="<?php echo base_url('/assets/js/angular-strap.tpl.js');?>"></script>
	<script src="<?php echo base_url('/assets/js/ng-sortable.js');?>"></script>
	<script src="<?php echo base_url('/assets/js/angular-contenteditable.js');?>"></script>

	



 
	<script src="<?php echo base_url('/assets/js/pagebuilder.js');?>"></script>

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha/css/bootstrap.min.css">
	<!-- <link rel="stylesheet" href="<?php echo base_url('/assets/css/bootstrap-grid.css');?>"> -->


	<link rel="stylesheet" href="<?php echo base_url('/assets/css/ng-sortable.css');?>">
	<link rel="stylesheet" href="<?php echo base_url('/assets/css/default.css');?>">
     
  </head>
<body>


<div ng-controller="pageController">

	<div ng-controller="Customer">
	  <div my-customer></div>
	</div>



 
    <addbuttonsbutton></addbuttonsbutton>
    <div id="space-for-buttons">

    </div>




 
  	<select ng-model="template" ng-options="t.name for t in templates">
  		<option value="">(blank)</option>
  	</select>
  	url of the template: <code>{{template.url}}</code>
  	<hr/>
  	<div class="container-fluid slide-animate-container">
  		<div class="slide-animate" ng-include="template.url"></div>
  	</div>
 




<div class="container-fluid">
    <div class="row">
        <div class="col-xs-3">
            <ul as-sortable="sortableOptions" ng-model="items">
                <li ng-repeat="item in items" as-sortable-item class="as-sortable-item">
                    <div>
                        <span as-sortable-item-handle class="as-sortable-item-handle" style="height:50px">DRAG HERE</span><span data-ng-bind="item.name" contenteditable></span>
                    </div>
                </li>
            </ul>
        </div>
    </div>


	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-12">
 
				<!-- Button to trigger a default modal with a scope as an object {title:'', content:'', etc.} -->
				<button type="button" class="btn btn-lg btn-primary" data-animation="am-fade-and-scale" data-placement="center" bs-modal="modal">Click to toggle modal
				  <br>
				  <small>(using an object)</small>
				</button>

				<!-- You can use a custom html template with the `data-template` attr -->
				<button type="button" class="btn btn-lg btn-danger" data-animation="am-fade-and-slide-top" data-template-url="/assets/partials/modal.html" bs-modal="modal">Custom Modal
				  <br>
				  <small>(using data-template)</small>
				</button>

				<!-- You can use a custom html template with the `data-template` attr -->
				<button type="button" class="btn btn-lg btn-danger" ng-click="showModal()">Modal
				  <br>
				  <small>(using service)</small>
				</button>




			</div>
		</div>
	</div>

</div>
	
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>-->
  </body>
</html>