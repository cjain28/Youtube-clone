# Youtube-clone

A small React app that searches YouTube with the YouTube Data API v3 and plays the selected video in an embedded player, next to a clickable list of results.

## Features

- Search YouTube videos by keyword (press **Enter** to search)
- Shows up to 50 results, each with a thumbnail and title
- Click a result to play it in the embedded player, with its title and description below
- On page load, runs a default search (`"Blast"`) and auto-selects the first result so the player isn't empty

## Tech stack

- React 18 (class components)
- [Create React App](https://create-react-app.dev) (`react-scripts` 5)
- [axios](https://axios-http.com) for HTTP requests
- [Semantic UI](https://semantic-ui.com) for styling (loaded from a CDN in `public/index.html`)
- [YouTube Data API v3](https://developers.google.com/youtube/v3/docs/search/list)

## Getting started

### Prerequisites

- Node.js 14 or newer
- A Google API key with the **YouTube Data API v3** enabled:
  1. Open the [Google Cloud Console](https://console.cloud.google.com/) and create or select a project.
  2. Go to **APIs & Services → Library** and enable **YouTube Data API v3**.
  3. Go to **APIs & Services → Credentials** and create an **API key**.

### Setup

```bash
git clone https://github.com/cjain28/Youtube-clone.git
cd Youtube-clone
npm install
```

Copy the example env file and put in your key:

```bash
cp .env.example .env
```

```env
REACT_APP_YOUTUBE_API_KEY=your_key_here
```

Then start the dev server:

```bash
npm start
```

The app runs at <http://localhost:3000>. If you edit `.env`, restart `npm start`, because env variables are only read at startup.

## Available scripts

| Command         | What it does                                        |
| --------------- | --------------------------------------------------- |
| `npm start`     | Runs the app in development mode on port 3000       |
| `npm run build` | Builds an optimized production bundle into `build/` |
| `npm test`      | Runs the test runner in watch mode                  |

## Project structure

```
src/
├── apis/
│   └── youtube.js         # Preconfigured axios instance (base URL, key, default params)
├── Components/
│   ├── App.js             # Holds the video list + selected video; runs the search
│   ├── SearchBar.js       # Controlled input; calls onTermSubmit(term) on Enter
│   ├── VideoList.js       # Maps results to VideoItem components
│   ├── VideoItem.js       # Thumbnail + title; click to select
│   ├── VideoItem.css
│   └── VideoDetail.js     # Embedded player + title/description of the selected video
└── index.js               # Entry point
```

## How it works

1. `src/apis/youtube.js` creates an axios instance with base URL `https://www.googleapis.com/youtube/v3`. It sends these default params on every request: `part=snippet`, `type=video`, `maxResults=50`, and your API key.
2. When a search is submitted, `App` calls `GET /search?q=<term>`. It stores the returned items and selects the first one.
3. Clicking a `VideoItem` calls `onSelectedVideo(video)`, which updates the selected video in `App` state.
4. `VideoDetail` embeds `https://youtube.com/embed/<videoId>` in an iframe.

## Quota and security notes

- **Quota:** each search costs 100 units of the YouTube Data API's default daily quota of 10,000 units. That's roughly 100 searches a day, including the automatic search on every page load.
- **Key exposure:** Create React App builds `REACT_APP_*` variables into the JavaScript bundle, so anyone who opens the deployed site can see the key. In the Google Cloud Console, restrict the key to the YouTube Data API and to your site's HTTP referrers.
