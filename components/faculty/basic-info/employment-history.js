import Link from 'next/link'
function EmploymentHistory(){
	return(
<div>
		<div>
	<table class = "table table-striped table-sm">
		<tbody>
			<tr>
				<th>Position</th>
				<th>Start Date</th>
				<th>End Date</th>
			</tr>
			<tr>
				<td>Professor 2</td>
				<td>2020-01-26</td>
				<td></td>
			</tr>
			<tr>
				<td>Professor 1</td>
				<td>2017-05-26</td>
				<td>2020-01-25</td>
			</tr>
			<tr>
				<td>Instructor 1</td>
				<td>2010-09-06</td>
				<td>2017-05-25</td>
			</tr>
		</tbody>
	</table>
</div>	

<div>
	<form>
		<hr />
		<div class = "form-row">
			<div class = "col-auto">
				<button type = "button" class = "btn btn-primary" id = "AddEmploymentHistory"> Add Employment History </button>
			</div>
			<div class = "col-auto">
				<button type = "button" class = "btn btn-danger" id = "RemoveEmploymentHistory"> Remove a Row </button>
			</div>
		</div>
		<br />
		<div class = "form-row">
			<div class = "form-group col-md-2">
				<label for = "PositionEmploymentHistory[]"> Position </label>
				<input class = "form-control" type = "text" name = "PositionEmploymentHistory[]" placeholder = "Input position" />
			</div>
			<div class = "form-group col-md-2">
				<label for = "StartDateEmploymentHistory[]"> Start Date </label>
				<input type = "date" class = "form-control" name = "StartDateEmploymentHistory[]" />
			</div>
			<div class = "form-group col-md-2">
				<label for = "EndDateEmploymentHistory[]"> End Date </label>
				<input type = "date" class = "form-control" name = "EndDateEmploymentHistory[]" />
			</div>

		</div>
		<div id = "EmploymentHistory">
			
		</div>
		<br />
		<button type = "submit" class = "btn btn-primary"> Submit </button>
		<hr />
	</form>
</div>	

</div>
	)
}

export default EmploymentHistory