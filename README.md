# Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/492ea281-b085-4049-8195-75a6d3548ed7/deploy-status)](https://app.netlify.com/sites/ristoranteaquazzurrasveltekit/deploys)

## Developing

This project uses [Bun 1.4](https://bun.sh) as runtime and package manager.

Once you've cloned the project, install dependencies with `bun install` and start a development server:

```bash
bun install
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

## Building

To create a production version of your app:

```bash
bun --bun run build
```

You can preview the production build with `bun --bun run preview`.

> The app uses [`adapter-static`](https://svelte.dev/docs/kit/adapter-static) and deploys
> the `build/` directory to Netlify (see `netlify.toml`).
