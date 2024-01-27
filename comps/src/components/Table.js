function Table({ data }) {
	return(
		<table>
			<thead>
				<tr>
					<th>Fruits</th>
					<th>Color</th>
					<th>Score</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Orange</td>
					<td>orange</td>
					<td>5</td>
				</tr>
				<tr>
					<td>Apple</td>
					<td>red</td>
					<td>3</td>
				</tr>
				<tr>
					<td>Banana</td>
					<td>yellow</td>
					<td>1</td>
				</tr>
				<tr>
					<td>Lime</td>
					<td>green</td>
					<td>4</td>
				</tr>
			</tbody>
		</table>
	);
}

export default Table;