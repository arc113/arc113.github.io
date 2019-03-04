<DOCTYPE! HTML>

<HTML>

	<HEAD>
		<link rel="stylesheet" href="add_compliance.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
	</HEAD>

	<BODY>

	<div class="container">
	  <h2>Add Organisation</h2>
	  <form method="POST">

		<div class="form-group">
		  <label for="name">Organisation Name:</label>
		  <input type="text" class="form-control" id="name" name="name">
		</div>

		<div class="form-group">
		  <label for="address">Organisation Address:</label>
		  <input type="text" class="form-control" id="address" name="address">
		</div>

		<div class="form-group">
		  <label for="phone">Phone No:</label>
		  <input type="text" class="form-control" id="phone" name="phone">
		</div>

		<div class="form-group">
		  <label for="email">Email:</label>
		  <input type="email" class="form-control" id="email" name="email">
		</div>

		<div class="form-group">
		  <label for="website">Organisation Website:</label>
		  <input type="text" class="form-control" id="website" name="website">
		</div>
<!--
		<div class="form-group">
		  <label for="pwd">Password:</label>
		  <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd">
		</div>

		<div class="checkbox">
		  <label><input type="checkbox" name="remember"> Remember me</label>
		</div>
-->		
		<button type="submit" class="btn btn-default">Submit</button>
	  </form>
	</div>		






	</BODY>

</HTML>