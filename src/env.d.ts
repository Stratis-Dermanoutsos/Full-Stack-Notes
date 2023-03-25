/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
	readonly GITHUB_TOKEN: string | undefined;
}

//? Cannot import the package without this.
declare module 'uuid';

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
