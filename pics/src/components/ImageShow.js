function ImageShow({ image }) {
	return(
		<div>
			{/*{image.id}*/}
			<img src={image.urls.small} alt="searched Images" />
		</div>
	);
}

export default ImageShow;