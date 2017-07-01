define(["./sb"], function(sb){

	var id, thumbs, links, href;

			id = "action-module";

			

			function init() {

				thumbs = document.getElementById('thumbs');

				links = thumbs.getElementsByTagName("a");


				for(i = 0;i < links.length; i++) {


					$on(links[i], "click", publish);

				}

			}

			function publish (e) {

				href = this.getAttribute("href");

				sb.notify ({

					type:"notify-display",

					data: href

					});

					e.preventDefault();

				}

			return {

				id:id,

				init:init,

				publish:publish
			}

});