document.addEventListener('mouseover', function(e) {
	if(e.target.dataset.tooltip != undefined) {
		let tooltip = document.createElement('div');
		tooltip.className = 'tooltip';
		tooltip.innerHTML = e.target.dataset.tooltip;
		e.target.after(tooltip);
      
		let top = e.target.getBoundingClientRect().top;
		let left = e.target.getBoundingClientRect().left;
      
		if(top < tooltip.offsetHeight + 5) {
			top += e.target.offsetHeight + 5;
		} else top = top - tooltip.offsetHeight - 5;
      
		tooltip.style.top = top + 'px';
		tooltip.style.left = left + 'px';
	}
});
  
document.addEventListener('mouseout', function (e) {
	if(e.target.dataset.tooltip != undefined) {
		if(e.target.nextElementSibling.className.includes('tooltip')) {
			e.target.nextElementSibling.remove();
		}
	}
});