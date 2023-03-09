export const SITE = {
	title: 'Stratis\' Notes',
	description: 'Stratis\' notes on Full-Stack software engineering.',
	defaultLanguage: 'en-us',
	appIcon: 'https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes/blob/main/Images/Full_Stack_Notes_icon.svg?raw=true'
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

export const GITHUB_REPO_URL = `https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes`;
export const GITHUB_SPONSOR_URL = `https://github.com/sponsors/Stratis-Dermanoutsos`;
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
			{ text: 'C\#', link: 'en/languages/csharp' },
			{ text: 'Dart', link: 'en/languages/dart' },
			{ text: 'Java', link: 'en/languages/java' },
			{ text: 'JavaScript', link: 'en/languages/javascript' },
			{ text: 'Ruby', link: 'en/languages/ruby' },
			{ text: 'Swift', link: 'en/languages/swift' },
			{ text: 'TypeScript', link: 'en/languages/typescript' },
		],
		'Frontend Languages': [
			{ text: 'Frontend Languages', link: 'en/languages/frontend' },
			{ text: 'HTML', link: 'en/languages/frontend/html' },
			{ text: 'CSS', link: 'en/languages/frontend/css' }
		],
		'Libraries': [
			{ text: 'Libraries', link: 'en/libraries' },
			{ text: 'Axios (JavaScript)', link: 'en/libraries/axios' },
			{ text: 'jQuery (JavaScript)', link: 'en/libraries/jquery' },
			{ text: 'Preact (JavaScript)', link: 'en/libraries/preact' },
			{ text: 'React (JavaScript)', link: 'en/libraries/react' },
			{ text: 'React Query (React)', link: 'en/libraries/react-query' },
			{ text: 'Redux (JavaScript)', link: 'en/libraries/redux' }
		],
		'Frameworks': [
			{ text: 'Frameworks', link: 'en/frameworks' },
			{ text: '.NET (C\#)', link: 'en/frameworks/dotnet' },
			{ text: 'ASP.NET (C\#)', link: 'en/frameworks/aspnet' },
			{ text: 'Astro (JavaScript)', link: 'en/frameworks/astro' },
			{ text: 'Bootstrap (CSS)', link: 'en/frameworks/bootstrap' },
			{ text: 'Entity Framework (C\#)', link: 'en/frameworks/entity-framework' },
			{ text: 'Express (JavaScript)', link: 'en/frameworks/express' },
			{ text: 'Ext (JavaScript)', link: 'en/frameworks/ext' },
			{ text: 'Flutter (Dart)', link: 'en/frameworks/flutter' },
			{ text: 'MAUI (C\#)', link: 'en/frameworks/maui' },
			{ text: 'Next (React)', link: 'en/frameworks/next' },
			{ text: 'React Native (JavaScript)', link: 'en/frameworks/react-native' },
			{ text: 'Ruby on Rails (Ruby)', link: 'en/frameworks/ruby-on-rails' },
			{ text: 'Spring (Java)', link: 'en/frameworks/spring' },
			{ text: 'SwiftUI (Swift)', link: 'en/frameworks/swiftui' },
			{ text: 'Svelte (JavaScript)', link: 'en/frameworks/svelte' },
			{ text: 'Tailwind (CSS)', link: 'en/frameworks/tailwind' },
			{ text: 'Vue (JavaScript)', link: 'en/frameworks/vue' },
			{ text: 'Xamarin (C\#)', link: 'en/frameworks/xamarin' }
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
		'DevOps': [
			{ text: 'DevOps', link: 'en/devops' },
			{ text: 'Jenkins', link: 'en/devops/jenkins' },
			{ text: 'GitHub Actions', link: 'en/devops/github-actions' },
		],
		'Concepts': [
			{ text: 'Concepts', link: 'en/concepts' },
			{ text: 'Design', link: 'en/concepts/design' },
			{ text: 'Proxy', link: 'en/concepts/proxy' },
			{ text: 'Load Balancer', link: 'en/concepts/load-balancer' },
			{ text: 'Caching Server', link: 'en/concepts/caching-server' },
			{ text: 'Firewall', link: 'en/concepts/firewall' }
		]
	},
};
