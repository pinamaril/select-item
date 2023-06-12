const $ = (element) => {
	return document.querySelector(element);
};

const $$ = (elements) => {
	return document.querySelectorAll(elements);
};

export { $, $$ };
