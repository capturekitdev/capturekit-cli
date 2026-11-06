# CaptureKit CLI

Official command-line interface for the [CaptureKit](https://www.capturekit.dev) screenshot API.

Capture websites as PNG, JPEG, WebP or PDF, extract their content, or analyse them with AI.

Every documented endpoint is a command — **7 commands** — and `request` reaches any other path. JSON responses are pretty-printed; files (images, PDFs…) are saved with `-o`.

## Requirements

- Node.js 20 or newer
- a CaptureKit [API key](https://app.capturekit.dev)

## Install

```sh
npm install --global @capturekitdev/cli
capturekit --help
```

Or run it without installing:

```sh
npx @capturekitdev/cli --help
```

## Configure your API key

The CLI reads the key from the environment; it does not load `.env` files.

```sh
export CAPTUREKIT_API_KEY="YOUR_API_KEY"
```

PowerShell:

```powershell
$env:CAPTUREKIT_API_KEY = "YOUR_API_KEY"
```

## Usage

```sh
capturekit content --url https://example.com
```

Parameters use the names of the [API reference](https://app.capturekit.dev/openapi) as flags: `--full-page` and `--full_page` are equivalent. Boolean flags can be bare (`--flag`) or explicit (`--flag=false`); array parameters accept commas or repeated flags.

```sh
capturekit content --help     # parameters of one command
capturekit endpoints                # every command and its HTTP path
capturekit endpoints search         # filter the list
```

### Save files

```sh
capturekit capture --url https://example.com --format png -o screenshot.png
```

Binary responses are never written to a terminal: pass `-o <file>`, or `-o -` to pipe them.

### JSON parameters

```sh
echo '{"url": "https://example.com"}' | capturekit content --params -
capturekit content --params params.json --compact
```

Flags override values read with `--params`.

### Any endpoint

```sh
capturekit request get /v1/usage
capturekit request post /v1/some/new/endpoint --params body.json
```

### Pipe into jq

```sh
capturekit content --url https://example.com | jq .
```

## Exit codes

| Code | Meaning                                                                             |
| ---- | ----------------------------------------------------------------------------------- |
| `0`  | Success.                                                                            |
| `1`  | The API returned an error (details on standard error) or the network failed.        |
| `2`  | Invalid usage: unknown command or parameter, missing API key or required parameter. |

## Commands

| Command           | HTTP                             | Description                                                                                                              |
| ----------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `analyze`         | GET / POST `/v1/analyze`         | AI Content API analyzes any webpage and returns AI insights summary, value proposition, features, categories, use cases… |
| `capture`         | GET / POST `/v1/capture`         | Browser-like Screenshot API that captures webpages as PNG/JPEG/WebP or PDF for previews, QA, reporting, monitoring, and… |
| `content`         | GET / POST `/v1/content`         | CaptureKit Content API extracts structured webpage data, metadata, links, HTML/Markdown: in one request for SEO, monito… |
| `jobs`            | GET `/v1/jobs/{id}`              | Poll the status, progress (0–100) and result of a job started with is_async=true. Polling is free. Poll until status is… |
| `stats`           | GET `/v1/stats`                  | Infrastructure health for an engine or endpoint over the last hour. Not scoped to your account or tenant. Enabled per a… |
| `usage`           | GET `/v1/usage`                  | Retrieve real-time usage statistics and credit balance for your CaptureKit account.                                      |
| `website-crawler` | GET / POST `/v1/website/crawler` | Website Crawler API fetches raw HTML from any webpage in request mode (no rendering) for fast scraping, audits, monitor… |

## Built on the SDK

The CLI uses the official [Node.js SDK](https://github.com/capturekitdev/capturekit-node) (`@capturekitdev/sdk`). Use the SDK directly for programmatic access.

## All CaptureKit SDKs

| SDK        | Package                                                                      | Install                                         |
| ---------- | ---------------------------------------------------------------------------- | ----------------------------------------------- |
| Node.js    | [`@capturekitdev/sdk`](https://www.npmjs.com/package/@capturekitdev/sdk)     | `npm install @capturekitdev/sdk`                |
| Python     | [`capturekitdev`](https://pypi.org/project/capturekitdev/)                   | `pip install capturekitdev`                     |
| Go         | [`capturekit-go`](https://pkg.go.dev/github.com/capturekitdev/capturekit-go) | `go get github.com/capturekitdev/capturekit-go` |
| .NET       | [`CaptureKit`](https://www.nuget.org/packages/CaptureKit)                    | `dotnet add package CaptureKit`                 |
| Ruby       | [`capturekitdev`](https://rubygems.org/gems/capturekitdev)                   | `gem install capturekitdev`                     |
| PHP        | [`capturekitdev/sdk`](https://packagist.org/packages/capturekitdev/sdk)      | `composer require capturekitdev/sdk`            |
| Java       | [`capturekit-java`](https://github.com/capturekitdev/capturekit-java)        | build from source, see its README               |
| CLI        | [`@capturekitdev/cli`](https://www.npmjs.com/package/@capturekitdev/cli)     | `npm install -g @capturekitdev/cli`             |
| MCP server | [`@capturekitdev/mcp`](https://www.npmjs.com/package/@capturekitdev/mcp)     | `npx -y @capturekitdev/mcp`                     |

## License

MIT — see [LICENSE](LICENSE).
