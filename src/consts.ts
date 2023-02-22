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
			{ text: 'Project Architectures', link: 'en/general/project-architectures' }
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
			{ text: 'Backend Frameworks', link: 'en/frameworks/backend' },
			{ text: 'ASP.NET Core (C#)', link: 'en/frameworks/backend/aspnet-core' },
			{ text: 'Entity Framework (C#)', link: 'en/frameworks/backend/entity-framework' },
			{ text: 'Express (JavaScript)', link: 'en/frameworks/backend/express' },
			{ text: 'Ruby on Rails (Ruby)', link: 'en/frameworks/backend/ruby-on-rails' },
			{ text: 'Spring (Java)', link: 'en/frameworks/backend/spring' },
		],
		'Frontend Languages': [
			{ text: 'Frontend Languages', link: 'en/languages/frontend' },
			{ text: 'HTML', link: 'en/languages/frontend/html' },
			{ text: 'CSS', link: 'en/languages/frontend/css' }
		],
		'Frontend Frameworks': [
			{ text: 'Frontend Frameworks', link: 'en/frameworks/frontend' },
			{ text: 'Astro (JavaScript)', link: 'en/frameworks/frontend/astro' },
			{ text: 'Bootstrap (CSS)', link: 'en/frameworks/frontend/bootstrap' },
			{ text: 'Ext (JavaScript)', link: 'en/frameworks/frontend/ext' },
			{ text: 'Svelte (JavaScript)', link: 'en/frameworks/frontend/svelte' },
			{ text: 'Tailwind (CSS)', link: 'en/frameworks/frontend/tailwind' },
			{ text: 'Vue (JavaScript)', link: 'en/frameworks/frontend/vue' }
		],
		'Frontend Meta-Frameworks': [
			{ text: 'Frontend Meta-Frameworks', link: 'en/frameworks/frontend/meta' },
			{ text: 'Next (React)', link: 'en/frameworks/frontend/meta/next' }
		],
		'Frontend Libraries': [
			{ text: 'Frontend Libraries', link: 'en/libraries/frontend' },
			{ text: 'Axios (JavaScript)', link: 'en/libraries/frontend/axios' },
			{ text: 'jQuery (JavaScript)', link: 'en/libraries/frontend/jquery' },
			{ text: 'Preact (JavaScript)', link: 'en/libraries/frontend/preact' },
			{ text: 'React (JavaScript)', link: 'en/libraries/frontend/react' },
			{ text: 'React Query (JavaScript)', link: 'en/libraries/frontend/react-query' },
			{ text: 'Redux (JavaScript)', link: 'en/libraries/frontend/redux' }
		],
		'Mobile Frameworks': [
			{ text: 'Mobile Frameworks', link: 'en/frameworks/mobile' },
			{ text: 'Flutter (Dart)', link: 'en/frameworks/mobile/flutter' },
			{ text: 'MAUI (C#)', link: 'en/frameworks/mobile/maui' },
			{ text: 'React Native (JavaScript)', link: 'en/frameworks/mobile/react-native' },
			{ text: 'SwiftUI (Swift)', link: 'en/frameworks/mobile/swiftui' },
			{ text: 'Xamarin (C#)', link: 'en/frameworks/mobile/xamarin' }
		],
		'Databases': [
			{ text: 'Databases', link: 'en/databases' },
			{ text: 'SQL', link: 'en/databases/sql' },
			{ text: 'NoSQL', link: 'en/databases/nosql' },
			{ text: 'NewSQL', link: 'en/databases/newsql' },
		],
		'CSS Preprocessors': [
			{ text: 'CSS Preprocessors', link: 'en/languages/frontend/css/preprocessors' },
			{ text: 'SASS', link: 'en/languages/frontend/css/preprocessors/sass' },
			{ text: 'SCSS', link: 'en/languages/frontend/css/preprocessors/scss' }
		],
		'Tools': [
			{ text: 'Tools', link: 'en/tools' },
			{ text: 'Git', link: 'en/tools/git' },
			{ text: 'Markdown', link: 'en/tools/markdown' },
			{ text: 'Module bundlers', link: 'en/tools/module-bundlers' },
			{ text: 'NPM', link: 'en/tools/npm' },
			{ text: 'NuGet', link: 'en/tools/nuget' }
		],
		'Concepts': [
			{ text: 'Concepts', link: 'en/concepts' },
			{ text: 'Design', link: 'en/concepts/design' }
		]
	},
};
