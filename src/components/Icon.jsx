import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faHandHeart,
	faUserChart,
	faIdBadge,
	faTasks,
	faSpinnerThird,
	faHeart,
	faPhoneLaptop,
	faPencilRuler,
	faBug,
	faCode,
	faStar,
	faBracketsCurly,
	faDesktop,
	faServer,
	faDatabase,
	faFire,
	faCopyright,
	faEnvelope,
	faBars,
	faFileDownload,
} from '@fortawesome/pro-regular-svg-icons';
import {
	faReact,
	faPhp,
	faNode,
	faJsSquare,
	faVuejs,
	faAngular,
	faCss3Alt,
	faSass,
	faLess,
	faCss3,
	faBootstrap,
	faWhatsapp,
	faLinkedin,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';

library.add(
	faHandHeart,
	faUserChart,
	faIdBadge,
	faTasks,
	faSpinnerThird,
	faHeart,
	faReact,
	faPhoneLaptop,
	faPencilRuler,
	faBug,
	faCode,
	faPhp,
	faNode,
	faJsSquare,
	faVuejs,
	faAngular,
	faCss3Alt,
	faSass,
	faLess,
	faStar,
	faBracketsCurly,
	faDesktop,
	faCss3,
	faServer,
	faDatabase,
	faBootstrap,
	faFire,
	faCopyright,
	faWhatsapp,
	faLinkedin,
	faEnvelope,
	faGithub,
	faBars,
	faFileDownload
);

const Icon = (props) => (
	<FontAwesomeIcon
		{...props}
		icon={[props.prefix || 'far', props.name]}
		title={props.alt}
	/>
);

export default memo(Icon, (p, n) => p.name === n.name);
