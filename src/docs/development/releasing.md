# Releasing

We use [standard-version](https://github.com/conventional-changelog/standard-version) to generate a changelog from git commits and bump the package version.

1. Run `npm run release`. If the version you're working on is a pre-release, run `npm run release -- --prerelease alpha|beta|rc`.
2. Run `npm publish` to publish a new package to [GitHub Packages](https://github.com/features/packages).
