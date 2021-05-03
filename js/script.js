'use strict';

const projectsContainer = document.querySelector('.projects-container');

const projectsHTML = projectsData.map(({ cssClass, projectLink, title }, index) => {
	return(`
		<a href="${ projectLink }">
			<div class="project ${ cssClass }">
				<h2>${ title }</h2>
			</div>
		</a>
	`);
}).join('');

projectsContainer.innerHTML = projectsHTML;