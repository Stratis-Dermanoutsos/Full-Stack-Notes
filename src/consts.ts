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
	English: 'en'
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
			{ text: 'General', link: 'en/general' },
			{ text: 'Algorithms', link: 'en/general/algorithms' },
			{ text: 'APIs', link: 'en/general/api' },
			{ text: 'Data Structures', link: 'en/general/data-structures' },
			{ text: 'Design Patterns', link: 'en/general/design-patterns' },
			{ text: 'Project Architectures', link: 'en/general/architecture' }
		],
		'Languages': [
			{ text: 'Languages', link: 'en/languages' },
			{ text: 'C#', link: 'en/languages/csharp' },
			{ text: 'Dart', link: 'en/languages/dart' },
			{ text: 'Java', link: 'en/languages/java' },
			{ text: 'JavaScript', link: 'en/languages/javascript' },
			{ text: 'Ruby', link: 'en/languages/ruby' },
			{ text: 'Swift', link: 'en/languages/swift' },
			{ text: 'TypeScript', link: 'en/languages/typescript' },
		],
		'Backend Frameworks': [
			{ text: 'Backend Frameworks', link: 'en/backend/frameworks' },
			{ text: 'ASP.NET Core (C#)', link: 'en/backend/frameworks/aspnet-core' },
			{ text: 'Entity Framework (C#)', link: 'en/backend/frameworks/entity-framework' },
			{ text: 'Ruby on Rails (Ruby)', link: 'en/backend/frameworks/ruby-on-rails' },
			{ text: 'Spring (Java)', link: 'en/backend/frameworks/spring' },
		],
		'Frontend Languages': [
			{ text: 'Frontend Languages', link: 'en/frontend/languages' },
			{ text: 'CSS', link: 'en/frontend/languages/css' },
			{ text: 'SCSS', link: 'en/frontend/languages/scss' },
			{ text: 'HTML', link: 'en/frontend/languages/html' }
		],
		'Frontend Frameworks': [
			{ text: 'Frontend Frameworks', link: 'en/frontend/frameworks' },
			{ text: 'Astro (JavaScript)', link: 'en/frontend/frameworks/astro' },
			{ text: 'Bootstrap (CSS)', link: 'en/frontend/frameworks/bootstrap' },
			{ text: 'Ext (JavaScript)', link: 'en/frontend/frameworks/ext' },
			{ text: 'Svelte (JavaScript)', link: 'en/frontend/frameworks/svelte' },
			{ text: 'Tailwind (CSS)', link: 'en/frontend/frameworks/tailwind' },
			{ text: 'Vue (JavaScript)', link: 'en/frontend/frameworks/vue' }
		],
		'Frontend Libraries': [
			{ text: 'Frontend Libraries', link: 'en/frontend/libraries' },
			{ text: 'Axios (JavaScript)', link: 'en/frontend/libraries/axios' },
			{ text: 'jQuery (JavaScript)', link: 'en/frontend/libraries/jquery' },
			{ text: 'Preact (JavaScript)', link: 'en/frontend/frameworks/preact' },
			{ text: 'React (JavaScript)', link: 'en/frontend/frameworks/react' },
			{ text: 'React Query (JavaScript)', link: 'en/frontend/libraries/react-query' },
			{ text: 'Redux (JavaScript)', link: 'en/frontend/libraries/redux' }
		],
		'Mobile Frameworks': [
			{ text: 'Mobile Frameworks', link: 'en/mobile/frameworks' },
			{ text: 'Flutter (Dart)', link: 'en/mobile/frameworks/flutter' },
			{ text: 'MAUI (C#)', link: 'en/mobile/frameworks/maui' },
			{ text: 'React Native (JavaScript)', link: 'en/mobile/frameworks/react-native' },
			{ text: 'SwiftUI (Swift)', link: 'en/mobile/frameworks/swiftui' },
			{ text: 'Xamarin (C#)', link: 'en/mobile/frameworks/xamarin' }
		],
		'Extras': [
			{ text: 'Extras', link: 'en/extras' },
			{ text: 'Design', link: 'en/extras/design' },
			{ text: 'Git', link: 'en/extras/git' },
			{ text: 'Markdown', link: 'en/extras/markdown' },
			{ text: 'NPM', link: 'en/extras/npm' },
			{ text: 'NuGet', link: 'en/extras/nuget' },
			{ text: 'Vite', link: 'en/extras/vite' },
			{ text: 'Webpack', link: 'en/extras/webpack' }
		]
	},
};
