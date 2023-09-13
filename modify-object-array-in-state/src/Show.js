export default function Show({ el }) {
	console.log(el);
	return(
		<div>
			ID = {el.id} | Value = {el.val} | Type = {el.type}
		</div>
	);
}