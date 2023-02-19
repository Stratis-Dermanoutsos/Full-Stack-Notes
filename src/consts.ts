export const SITE = {
	title: 'Full-Stack Notes',
	description: 'Stratis\' notes on Full-Stack software engineering.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt: 'Full-Stack Notes banner',
	},
	twitter: 'stratis_derm',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes`;

export const COMMUNITY_INVITE_URL = `https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes/discussions`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Intro': [
			{ text: 'Introduction', link: 'en/intro' },
			{ text: 'Project Ideas', link: 'en/intro/project-ideas' }
		],
		'General': [
		]
	},
};
