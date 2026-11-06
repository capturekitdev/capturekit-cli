// Generated from the CaptureKit OpenAPI document. Do not edit by hand.

import type { CommandDefinition } from "./types.js";

export const COMMANDS: readonly CommandDefinition[] = [
  {
    command: "analyze",
    operation: "analyze",
    path: "/v1/analyze",
    methods: ["GET", "POST"],
    summary: "Analyze (AI)",
    description:
      "AI Content API analyzes any webpage and returns AI insights summary, value proposition, features, categories, use cases, and optional contact signals.",
    params: [
      {
        name: "url",
        type: "string",
        required: true,
        description: "The URL of the webpage to capture.",
      },
      {
        name: "custom_response",
        type: "string",
        required: false,
        description:
          "Pass custom response fields to be included in the AI response.",
      },
      {
        name: "custom_prompt",
        type: "string",
        required: false,
        description: "Add your own instructions to guide the AI’s analysis.",
      },
      {
        name: "proxy",
        type: "string",
        required: false,
        description: "Specify a proxy server to route your request through.",
      },
      {
        name: "cache",
        type: "boolean",
        required: false,
        description: "Cache the response.",
        default: false,
      },
      {
        name: "cache_ttl",
        type: "number",
        required: false,
        description: "Cache the response for a custom TTL (in seconds).",
        default: 2592000,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "capture",
    operation: "capture",
    path: "/v1/capture",
    methods: ["GET", "POST"],
    summary: "Capture (Screenshot)",
    description:
      "Browser-like Screenshot API that captures webpages as PNG/JPEG/WebP or PDF for previews, QA, reporting, monitoring, and archiving no headless setup.",
    params: [
      {
        name: "url",
        type: "string",
        required: true,
        description:
          "The URL of the webpage to capture. Examples:  https://www.amazon.com/s?k=pokemon ",
      },
      {
        name: "format",
        type: "string",
        required: false,
        description: "The output format of the screenshot.",
        enum: ["jpeg", "jpg", "pdf", "png", "webp"],
        default: "png",
      },
      {
        name: "device",
        type: "string",
        required: false,
        description: "The device type to emulate for the screenshot.",
        enum: [
          "galaxy_fold4",
          "galaxy_s23",
          "galaxy_s23_ultra",
          "galaxy_s8",
          "huawei_mate_50_pro",
          "huawei_p60_pro",
          "ipad",
          "iphone_12",
          "iphone_13_mini",
          "iphone_13_pro_max",
          "iphone_14_pro",
          "iphone_14_pro_max",
          "iphone_x",
          "pixel_5",
          "pixel_6a",
          "pixel_7_pro",
          "redmi_note_11",
          "redmi_note_12_pro",
        ],
      },
      {
        name: "full_page",
        type: "boolean",
        required: false,
        description:
          "Capture the entire page instead of just the visible viewport.",
        default: false,
      },
      {
        name: "full_page_scroll",
        type: "boolean",
        required: false,
        description:
          "Scroll the page to fully load lazy-loaded elements before capturing a full-page screenshot.",
        default: false,
      },
      {
        name: "full_page_scroll_duration",
        type: "number",
        required: false,
        description:
          "Time in milliseconds for scrolling before capturing the full page.",
        default: 400,
      },
      {
        name: "viewport_width",
        type: "number",
        required: false,
        description: "The width of the browser viewport in pixels.",
        default: 1280,
      },
      {
        name: "viewport_height",
        type: "number",
        required: false,
        description: "The height of the browser viewport in pixels.",
        default: 1024,
      },
      {
        name: "scale_factor",
        type: "number",
        required: false,
        description: "The scale factor for high-resolution screenshots.",
        default: 1,
      },
      {
        name: "image_quality",
        type: "string",
        required: false,
        description: "Generate images with custom quality settings.",
        default: "80",
      },
      {
        name: "selector",
        type: "string",
        required: false,
        description:
          "Capture a specific element on the page instead of the full viewport.",
      },
      {
        name: "cache",
        type: "boolean",
        required: false,
        description: "Cache the response.",
        default: false,
      },
      {
        name: "cache_ttl",
        type: "number",
        required: false,
        description: "Cache the response for a custom TTL (in seconds).",
        default: 2592000,
      },
      {
        name: "remove_selectors",
        type: "string",
        required: false,
        description:
          "A comma-separated list of elements to hide before capturing (e.g., ads, popups).",
      },
      {
        name: "remove_cookie_banners",
        type: "boolean",
        required: false,
        description: "Automatically remove cookie banners before capturing.",
        default: false,
      },
      {
        name: "remove_ads",
        type: "boolean",
        required: false,
        description: "Automatically remove ads before capturing.",
        default: false,
      },
      {
        name: "block_resources",
        type: "string",
        required: false,
        description:
          "Comma-separated list of resource types to block (e.g., “image,stylesheet,font”).",
        enum: [
          "document",
          "eventsource",
          "fetch",
          "font",
          "image",
          "manifest",
          "media",
          "other",
          "script",
          "stylesheet",
          "texttrack",
          "websocket",
          "xhr",
        ],
      },
      {
        name: "block_urls",
        type: "string",
        required: false,
        description:
          "Comma-separated list of URL patterns to block (e.g., “analytics,tracking,advertisement”).",
      },
      {
        name: "delay",
        type: "number",
        required: false,
        description: "Delay in seconds before capturing the screenshot.",
        default: 0,
      },
      {
        name: "wait_until",
        type: "array",
        required: false,
        description: "Define when to capture.",
        items: "string",
        enum: ["domcontentloaded", "load", "networkidle0", "networkidle2"],
      },
      {
        name: "wait_for_selector",
        type: "string",
        required: false,
        description:
          "Wait for a specific element to appear before taking the screenshot.",
      },
      {
        name: "proxy",
        type: "string",
        required: false,
        description: "Specify a proxy server to route your request through.",
      },
      {
        name: "s3_secret_key",
        type: "string",
        required: false,
        description: "AWS S3 secret access key.",
      },
      {
        name: "s3_access_key_id",
        type: "string",
        required: false,
        description: "AWS S3 access key ID.",
      },
      {
        name: "s3_bucket",
        type: "string",
        required: false,
        description:
          "The S3 bucket name where the screenshot will be uploaded.",
      },
      {
        name: "s3_object_key",
        type: "string",
        required: false,
        description:
          "The filename for the S3 object (auto-generated if not provided).",
      },
      {
        name: "s3_region",
        type: "string",
        required: false,
        description: "AWS S3 region for storage.",
      },
      {
        name: "storage_endpoint",
        type: "string",
        required: false,
        description:
          "Leave this field empty for AWS S3. Only specify a value if required. S3-compatible storage services are supported, for example, use https://<accountId>.r2.cloudflarestorage.com for Cloudflare R2.",
      },
      {
        name: "s3_url",
        type: "boolean",
        required: false,
        description:
          "Use S3 storage for screenshots. The S3 URL will be returned in the response.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "content",
    operation: "content",
    path: "/v1/content",
    methods: ["GET", "POST"],
    summary: "Content",
    description:
      "CaptureKit Content API extracts structured webpage data, metadata, links, HTML/Markdown: in one request for SEO, monitoring, indexing and automation.",
    params: [
      {
        name: "url",
        type: "string",
        required: true,
        description: "The URL of the webpage to capture.",
      },
      {
        name: "include_html",
        type: "boolean",
        required: false,
        description: "Include the raw HTML of the webpage in the response.",
        default: false,
      },
      {
        name: "include_markdown",
        type: "boolean",
        required: false,
        description: "Include the Markdown of the webpage in the response.",
        default: false,
      },
      {
        name: "include_sitemap",
        type: "boolean",
        required: false,
        description: "Include the sitemap of the website in the response.",
        default: false,
      },
      {
        name: "use_defuddle",
        type: "boolean",
        required: false,
        description:
          "Use Defuddle to clean and extract the main content from web pages. This popular library removes unnecessary elements like comments, sidebars, headers, footers, and other non-essential elements, leavi…",
        default: false,
      },
      {
        name: "remove_selectors",
        type: "string",
        required: false,
        description:
          "A comma-separated list of elements to hide before capturing (e.g., ads, popups).",
      },
      {
        name: "remove_cookie_banners",
        type: "boolean",
        required: false,
        description: "Automatically remove cookie banners before capturing.",
        default: false,
      },
      {
        name: "remove_ads",
        type: "boolean",
        required: false,
        description: "Automatically remove ads before capturing.",
        default: false,
      },
      {
        name: "block_resources",
        type: "string",
        required: false,
        description:
          "Comma-separated list of resource types to block (e.g., “image,stylesheet,font”).",
        enum: [
          "document",
          "eventsource",
          "fetch",
          "font",
          "image",
          "manifest",
          "media",
          "other",
          "script",
          "stylesheet",
          "texttrack",
          "websocket",
          "xhr",
        ],
      },
      {
        name: "block_urls",
        type: "string",
        required: false,
        description:
          "Comma-separated list of URL patterns to block (e.g., “analytics,tracking,advertisement”).",
      },
      {
        name: "delay",
        type: "number",
        required: false,
        description: "Delay in seconds before capturing the screenshot.",
        default: 0,
      },
      {
        name: "wait_until",
        type: "array",
        required: false,
        description: "Define when to capture.",
        items: "string",
        enum: ["domcontentloaded", "load", "networkidle0", "networkidle2"],
      },
      {
        name: "wait_for_selector",
        type: "string",
        required: false,
        description:
          "Wait for a specific element to appear before taking the screenshot.",
      },
      {
        name: "proxy",
        type: "string",
        required: false,
        description: "Specify a proxy server to route your request through.",
      },
      {
        name: "cache",
        type: "boolean",
        required: false,
        description: "Cache the response.",
        default: false,
      },
      {
        name: "cache_ttl",
        type: "number",
        required: false,
        description: "Cache the response for a custom TTL (in seconds).",
        default: 2592000,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "jobs",
    operation: "jobs",
    path: "/v1/jobs/{id}",
    methods: ["GET"],
    summary: "Jobs",
    description:
      "Poll the status, progress (0–100) and result of a job started with is_async=true. Polling is free. Poll until status is terminal: CompletedJob, Error, NotFound or BadRequest.",
    params: [
      {
        name: "id",
        type: "string",
        required: true,
        description:
          "The job_id returned by an endpoint called with is_async=true.",
      },
    ],
  },
  {
    command: "stats",
    operation: "stats",
    path: "/v1/stats",
    methods: ["GET"],
    summary: "Stats",
    description:
      "Infrastructure health for an engine or endpoint over the last hour. Not scoped to your account or tenant. Enabled per account: HTTP 403 means contact support to activate it.",
    params: [
      {
        name: "engine",
        type: "string",
        required: false,
        description:
          "API family to check, for example capture. Provide at least engine or path.",
      },
      {
        name: "path",
        type: "string",
        required: false,
        description:
          "Specific endpoint to check, for example /v1/capture. If you also pass engine, use an endpoint from that API.",
      },
    ],
  },
  {
    command: "usage",
    operation: "usage",
    path: "/v1/usage",
    methods: ["GET"],
    summary: "Usage",
    description:
      "Retrieve real-time usage statistics and credit balance for your CaptureKit account.",
    params: [],
  },
  {
    command: "website-crawler",
    operation: "website_crawler",
    path: "/v1/website/crawler",
    methods: ["GET", "POST"],
    summary: "Website Crawler",
    description:
      "Website Crawler API fetches raw HTML from any webpage in request mode (no rendering) for fast scraping, audits, monitoring, and link/metadata extraction.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A website URL with either the http or https protocol.",
      },
      {
        name: "allow_redirects",
        type: "boolean",
        required: false,
        description: "If set to false, do not follow redirects.",
        default: true,
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "If set to true, the response will be the HTML source of the page.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
];
