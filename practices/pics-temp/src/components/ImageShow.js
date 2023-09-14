function ImageShow({ image }) {
	return(
		<div>
			{/*<p>ImageId: {image.id}</p>*/}
			{/*<p>ImageAltDesc: {image.alt_description}</p>*/}
			<img src={image.urls.small} alt={image.alt_description} />
		</div>
	);
}

export default ImageShow;