<!doctype html>
<html ng-app="pageBuilder">
	<head>
 
	<script src="<?php echo base_url('/assets/js/angular1.4.8.js');?>"></script>
	<script src="<?php echo base_url('/assets/js/angular-strap.js');?>"></script>
	<script src="<?php echo base_url('/assets/js/angular-strap.tpl.js');?>"></script>
	<script src="<?php echo base_url('/assets/js/ng-sortable.js');?>"></script>
	<script src="<?php echo base_url('/assets/js/angular-contenteditable.js');?>"></script>
 
	<script src="<?php echo base_url('/assets/js/pagebuilder_modal.js');?>"></script>

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha/css/bootstrap.min.css">
	<link rel="stylesheet" href="<?php echo base_url('/assets/css/ng-sortable.css');?>">
	<link rel="stylesheet" href="<?php echo base_url('/assets/css/default.css');?>">
		 
	</head>
<body>
	


 

				<!-- You can use a custom html template with the `data-template` attr -->
				<!-- <button type="button" class="btn btn-lg btn-danger" data-animation="am-fade-and-slide-top" data-template-url="/assets/partials/modal.html" bs-modal="modal">Custom Modal
				  <br>
				  <small>(using data-template)</small>
				</button> -->

				<!-- You can use a custom html template with the `data-template` attr -->



		<div class="container-fluid" ng-controller="templateController" >
 

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


    
			<div id="template-container" as-sortable></div>

			<button type="button" class="btn btn-md btn-default" ng-click="showModal()">Add a Section</button>

		</div>

	</body>
</html>