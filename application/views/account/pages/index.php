<!doctype html>
<html ng-app="pageBuilder">
  <head>

	<script src="<?php echo base_url('/assets/js/angular.js');?>"></script>
	<script src="<?php echo base_url('/assets/js/angular-strap.js');?>"></script>
	<script src="<?php echo base_url('/assets/js/modules/modal.tpl.min.js');?>"></script>
	<script src="<?php echo base_url('/assets/js/pagebuilder.js');?>"></script>

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha/css/bootstrap.min.css">
	<!-- <link rel="stylesheet" href="<?php echo base_url('/assets/css/bootstrap-grid.css');?>"> -->
	<link rel="stylesheet" href="<?php echo base_url('/assets/css/default.css');?>">
     
  </head>
  <body>


	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-12" ng-controller="pageController">
 

				<!-- Button to trigger a default modal with a scope as an object {title:'', content:'', etc.} -->
<!-- 				<button type="button" class="btn btn-lg btn-primary" data-animation="am-fade-and-scale" data-placement="center" bs-modal="modal">Click to toggle modal
				  <br>
				  <small>(using an object)</small>
				</button> -->

				<!-- You can use a custom html template with the `data-template` attr -->
				<button type="button" class="btn btn-lg btn-danger" data-animation="am-fade-and-slide-top" data-template-url="/assets/partials/basic.html" bs-modal="modal">Custom Modal
				  <br>
				  <small>(using data-template)</small>
				</button>

				<!-- You can use a custom html template with the `data-template` attr -->
				<!-- <button type="button" class="btn btn-lg btn-danger" ng-click="showModal()">Modal
				  <br>
				  <small>(using service)</small>
				</button> -->


<!-- 			    <div>
			      <label>Name:</label>
			      <input type="text" ng-model="yourName" placeholder="Enter a name here">
			      <hr>
			      <h1>Hello {{yourName}}!</h1>
			    </div>
 -->

			</div>
		</div>
	</div>


	
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>-->
  </body>
</html>