# Film Photo Showcase 2.0

[![Scheduled deploy](https://github.com/Teemeam/film-v2/actions/workflows/main.yml/badge.svg?event=schedule)](https://github.com/Teemeam/film-v2/actions/workflows/main.yml)

Fetch photos from the Flickr API.

![](sketch.svg)

## Used technologies

- React 18
- TypeScript
- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)

## Requirements

Requires Node 18.

Withastro/action@v0.2.0 requires version 7 of pnpm.

## Preparations

Create a Flickr App and use the app key to fetch images from the Flickr API. Methods are listed [in the App Garden](https://www.flickr.com/services/api/).

## Commands

### pnpm install

Install dependencies.

### pnpm dev

Run project.

### pnpm build

Build project.

## Deploy

GitHub workflow handles deploying automatically when pushed. Store your credentials in repository secrets.

Additionally, the workflow is scheduled to run every night at 00:00.
