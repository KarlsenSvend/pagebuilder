<!doctype html>
<html ng-app="pageBuilder">
  <head>
 
	<script src="<?php echo base_url('/assets/js/angular1.4.8.js');?>"></script>
	<script src="<?php echo base_url('/assets/js/angular-strap.js');?>"></script>
	<script src="<?php echo base_url('/assets/js/angular-strap.tpl.js');?>"></script>
	<script src="<?php echo base_url('/assets/js/ng-sortable.js');?>"></script>
	<script src="<?php echo base_url('/assets/js/angular-contenteditable.js');?>"></script>
 
	<script src="<?php echo base_url('/assets/js/pagebuilder_template.js');?>"></script>

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha/css/bootstrap.min.css">
	<link rel="stylesheet" href="<?php echo base_url('/assets/css/ng-sortable.css');?>">
	<link rel="stylesheet" href="<?php echo base_url('/assets/css/default.css');?>">
     
  </head>
<body>
	
		<div ng-controller="Customer">
			<div my-customer></div>
		</div>
 

 		<div ng-controller="templateController">
			<div id="template-container">
				
				<!-- <div ng-controller="Customer"></div> -->
				<button add-template>Add Text Template</button>
			
			</div>
		</div>

		<div ng-bind-html="content"></div>
 
	</body>
</html>