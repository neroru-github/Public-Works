
window.addEventListener( "resize", () => resize() );

function resize()
{
	console.log( "resize" );
	
	const width = document.documentElement.clientWidth;
	document.querySelector( "#Width span" ).textContent = String( width );

	const height = document.documentElement.clientHeight;
	document.querySelector( "#Height span" ).textContent = String( height );

	const pixcelRatio = window.devicePixelRatio;
	document.querySelector( "#PixcelRatio span" ).textContent = String( pixcelRatio );
}
