window.$on = function(target, type, cb) {
			target.addEventListener(type, cb, false);
		}


define(["./core","./action","./display"],function(CORE,action,display){

		CORE.addModule(action.id,action);

		CORE.addModule(display.id,display);

		action.init();

		display.init();

});