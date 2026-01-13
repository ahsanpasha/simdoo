// AOS initialization file
AOS.init({
	duration: 900, // 0.9 seconds for slightly slow animation
	easing: 'ease-in-out',
	once: true,
	mirror: false, // Disable mirror to prevent scroll issues
	offset: 50, // Start animation 50px before element is in view
	anchorPlacement: 'top-bottom', // Trigger when top of element hits bottom of viewport
	disable: false,
});
