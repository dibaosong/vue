import vCode from './verificationCode/verificationCode';

import sVCode from './sendVerificationCode/sendVerificationCode';

import iscroll from './iscroll/iscroll';

const components = {
	vCode,
	sVCode,
	iscroll
};

const install = function(Vue, Option){
	Object.keys(components).forEach((key) => {
		Vue.component(components[key].name, components[key]);
	});
};

export default{
	install
}