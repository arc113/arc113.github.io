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
	  <h2>Add Compliance</h2>
	  <form method="POST">


		<div class="form-group">
			<label for="radio-inline">Mode Of Communication:</label>
			<label class="radio-inline"><input id="mode" type="radio" name="mode" checked>Email</label>
			<label class="radio-inline"><input type="radio" name="mode">Telephonic</label>
			<label class="radio-inline"><input type="radio" name="mode">Verbal</label>
			<label class="radio-inline"><input type="radio" name="mode">Hardcopy</label>
			<label class="radio-inline"><input type="radio" name="mode">Other</label>
		</div>

		<div class="form-group">
		  <label for="subject">Subject:</label>
		  <input type="text" class="form-control" id="subject" name="subject">
		</div>

		<div class="form-group">
		  <label for="contact_person">Contact Person:</label>
		  <input type="text" class="form-control" id="contact_person" name="contact_person">
		</div>

		<div class="form-group">
		  <label for="department">Department:</label>
		  <input type="text" class="form-control" id="department" name="department">
		</div>

		<div class="form-group">
		  <label for="email">Email:</label>
		  <input type="email" class="form-control" id="email" name="email">
		</div>

		<div class="form-group">
		  <label for="contact_number">Contact Number:</label>
		  <input type="text" class="form-control" id="contact_number" name="contact_number">
		</div>

		<div class="form-group">
		  <label for="last_date">Last Date:</label>
		  <input type="text" class="form-control" id="last_date" name="last_date">
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
		<div class="form-group">
			<label for="compliance_file"> Upload Compliance: </label>
			<input type="file" name="compliance_file" accept="">
		</div>

		<button type="submit" class="btn btn-default">Submit</button>
	  </form>
	</div>		






	</BODY>

</HTML>