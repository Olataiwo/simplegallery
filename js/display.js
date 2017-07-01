define(["./sb"], function(sb) {

	var id, place;

				id = "display-module";

			function init () {

				place = document.getElementById("placeholder");

				MainImg = place.childNodes[0];

				sb.listen({
					
					 "notify-display": execute

				}, id);
			}

			function execute (href) {

					MainImg.setAttribute('src', href);
			}

			return {

				id:id,

				init:init,

				execute:execute
			}

});