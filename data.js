// AI Tools Hub — Data
// help me to add more ai tools
const AI_TOOLS = [
  // ===== CHATBOTS =====
  {
    name: "ChatGPT",
    desc: "General assistant & reasoning powerhouse from OpenAI. Best for writing, analysis, and problem solving.",
    url: "https://chatgpt.com",
    category: "chatbots",
    emoji: "🤖",
    featured: true
  },
  {
    name: "Claude",
    desc: "Long-document analysis & natural writing from Anthropic. Exceptional at nuanced reasoning.",
    url: "https://claude.ai",
    category: "chatbots",
    emoji: "✨",
    featured: true
  },
  {
    name: "Gemini",
    desc: "Multimodal search & Google integration. Deep web knowledge with real-time access.",
    url: "https://gemini.google.com",
    category: "chatbots",
    emoji: "💎",
    featured: true
  },
  {
    name: "Perplexity",
    desc: "AI-powered search engine with real-time citations. Perfect for research and fact-checking.",
    url: "https://perplexity.ai",
    category: "chatbots",
    emoji: "🔍",
    featured: true
  },
  {
    name: "Grok",
    desc: "Real-time news & X (Twitter) integration from xAI. Unfiltered, up-to-date AI assistant.",
    url: "https://x.ai",
    category: "chatbots",
    emoji: "⚡",
    featured: false
  },
  {
    name: "Pi",
    desc: "Conversational, high-EQ personal AI. Designed for meaningful, empathetic dialogue.",
    url: "https://pi.ai",
    category: "chatbots",
    emoji: "🥧",
    featured: false
  },
  {
    name: "Character.AI",
    desc: "Roleplay & personality-driven chat. Create and chat with any character imaginable.",
    url: "https://character.ai",
    category: "chatbots",
    emoji: "🎭",
    featured: false
  },
  {
    name: "Mistral",
    desc: "High-performance open-weight models. Efficient, powerful, and privacy-friendly AI.",
    url: "https://mistral.ai",
    category: "chatbots",
    emoji: "🌪",
    featured: false
  },
  {
    name: "DeepSeek",
    desc: "Advanced coding and reasoning models from China. Exceptional math and logic capabilities.",
    url: "https://deepseek.com",
    category: "chatbots",
    emoji: "🌊",
    featured: false
  },
  {
    name: "Poe",
    desc: "All-in-one platform for various LLMs. Access Claude, GPT, Gemini and more in one place.",
    url: "https://poe.com",
    category: "chatbots",
    emoji: "🎪",
    featured: false
  },

  // ===== IMAGE GENERATION =====
  {
    name: "Midjourney",
    desc: "Hyper-realistic artistic generation. Industry leader for stunning, painterly AI art.",
    url: "https://midjourney.com",
    category: "image",
    emoji: "🎨",
    featured: true
  },
  {
    name: "DALL-E 3",
    desc: "Integrated OpenAI image generator. Best for accurate, prompt-following image creation.",
    url: "https://labs.openai.com",
    category: "image",
    emoji: "🖼",
    featured: true
  },
  {
    name: "Adobe Firefly",
    desc: "Professional design & generative fill. Seamlessly integrated into Adobe's creative suite.",
    url: "https://firefly.adobe.com",
    category: "image",
    emoji: "🦋",
    featured: false
  },
  {
    name: "Canva Magic Studio",
    desc: "Easy-to-use AI design graphics. Generate and edit visuals with drag-and-drop simplicity.",
    url: "https://canva.com",
    category: "image",
    emoji: "🎠",
    featured: false
  },
  {
    name: "Leonardo.ai",
    desc: "Production-quality asset generation. Great for game assets and consistent character art.",
    url: "https://leonardo.ai",
    category: "image",
    emoji: "🎮",
    featured: false
  },
  {
    name: "Stable Diffusion",
    desc: "Open-source, highly customizable AI image generation. Run locally for full control.",
    url: "https://stability.ai",
    category: "image",
    emoji: "🧪",
    featured: false
  },
  {
    name: "Krea AI",
    desc: "Real-time image enhancement & upscaling. See AI generations evolve as you type.",
    url: "https://krea.ai",
    category: "image",
    emoji: "⚗️",
    featured: false
  },
  {
    name: "PhotoRoom",
    desc: "Instant background removal for product photography. Professional results in seconds.",
    url: "https://photoroom.com",
    category: "image",
    emoji: "📸",
    featured: false
  },
  {
    name: "Magnific AI",
    desc: "Ultra-high-resolution image upscaler. Add jaw-dropping detail to any image.",
    url: "https://magnific.ai",
    category: "image",
    emoji: "🔬",
    featured: false
  },
  {
    name: "Flair.ai",
    desc: "AI product photography for brands. Studio-quality product shots without a studio.",
    url: "https://flair.ai",
    category: "image",
    emoji: "💅",
    featured: false
  },
  {
    name: "Artbreeder",
    desc: "Collaborative AI art creation. Blend and evolve images in endless creative ways.",
    url: "https://artbreeder.com",
    category: "image",
    emoji: "🌿",
    featured: false
  },
  {
    name: "Kittl",
    desc: "AI-powered brand and logo design. Beautiful templates with intelligent customization.",
    url: "https://kittl.com",
    category: "image",
    emoji: "🏷",
    featured: false
  },
  {
    name: "Stockimg.ai",
    desc: "AI-generated stock photography. On-demand, royalty-free images for any use case.",
    url: "https://stockimg.ai",
    category: "image",
    emoji: "🗄",
    featured: false
  },
  {
    name: "Lexica Art",
    desc: "Massive search engine for AI art. Discover and recreate stunning AI-generated images.",
    url: "https://lexica.art",
    category: "image",
    emoji: "🔎",
    featured: false
  },
  {
    name: "Craiyon",
    desc: "Free, simple AI image generator. No sign-up needed for quick creative exploration.",
    url: "https://craiyon.com",
    category: "image",
    emoji: "🖍",
    featured: false
  },

  // ===== VIDEO =====
  {
    name: "Sora 2",
    desc: "Narrative-driven cinematic clips from OpenAI. State-of-the-art video generation.",
    url: "https://openai.com/sora",
    category: "video",
    emoji: "🎬",
    featured: true
  },
  {
    name: "Runway Gen-3",
    desc: "Professional AI video production suite. The gold standard for AI filmmaking.",
    url: "https://runwayml.com",
    category: "video",
    emoji: "🎞",
    featured: true
  },
  {
    name: "HeyGen",
    desc: "Personalized AI video messaging with realistic avatars. Scale video content instantly.",
    url: "https://heygen.com",
    category: "video",
    emoji: "🎙",
    featured: false
  },
  {
    name: "Synthesia",
    desc: "AI avatars for corporate training and e-learning. 130+ languages supported.",
    url: "https://synthesia.io",
    category: "video",
    emoji: "👤",
    featured: false
  },
  {
    name: "Luma Dream Machine",
    desc: "High-speed realistic video generation from prompts or images. Stunning motion quality.",
    url: "https://lumalabs.ai",
    category: "video",
    emoji: "🌙",
    featured: false
  },
  {
    name: "Pika Labs",
    desc: "Creative animation and motion control. Turn images into cinematic videos with ease.",
    url: "https://pika.art",
    category: "video",
    emoji: "⚡",
    featured: false
  },
  {
    name: "Descript",
    desc: "Edit video and podcast by editing transcript text. Revolutionary non-linear editing.",
    url: "https://descript.com",
    category: "video",
    emoji: "✂️",
    featured: false
  },
  {
    name: "InVideo AI",
    desc: "One-click script-to-video generation. Create YouTube and social content in minutes.",
    url: "https://invideo.io",
    category: "video",
    emoji: "📱",
    featured: false
  },
  {
    name: "CapCut AI",
    desc: "Mobile-first AI video editing app. Auto-captions, effects, and smart editing tools.",
    url: "https://capcut.com",
    category: "video",
    emoji: "✂️",
    featured: false
  },
  {
    name: "Kling AI",
    desc: "Advanced video generation with long durations. Exceptional realism and character consistency.",
    url: "https://klingai.com",
    category: "video",
    emoji: "🎥",
    featured: false
  },
  {
    name: "Kaiber",
    desc: "Music-reactive AI animation. Transform music into stunning visual art and video.",
    url: "https://kaiber.ai",
    category: "video",
    emoji: "🎵",
    featured: false
  },
  {
    name: "Fliki",
    desc: "Turn blog posts and scripts into videos with realistic AI voice narration.",
    url: "https://fliki.ai",
    category: "video",
    emoji: "🦜",
    featured: false
  },
  {
    name: "PixVerse",
    desc: "Image-to-video with perfect audio sync. Bring any still image to life dynamically.",
    url: "https://pixverse.ai",
    category: "video",
    emoji: "🌀",
    featured: false
  },
  {
    name: "Lovo",
    desc: "Realistic AI voiceovers & video production. Studio-quality voice with natural emotion.",
    url: "https://lovo.ai",
    category: "video",
    emoji: "🔈",
    featured: false
  },

  // ===== CODING =====
  {
    name: "GitHub Copilot",
    desc: "Inline AI code completion by GitHub & OpenAI. Writes full functions as you type.",
    url: "https://github.com/features/copilot",
    category: "coding",
    emoji: "🐙",
    featured: true
  },
  {
    name: "Cursor",
    desc: "AI-first code editor built on VS Code. Chat with your codebase and auto-fix bugs.",
    url: "https://cursor.com",
    category: "coding",
    emoji: "⌨️",
    featured: true
  },
  {
    name: "Replit Agent",
    desc: "Build and deploy full apps by chatting. No setup needed — code runs instantly in browser.",
    url: "https://replit.com",
    category: "coding",
    emoji: "🚀",
    featured: false
  },
  {
    name: "Blackbox AI",
    desc: "Fast AI code generation and intelligent search. Find and generate code at lightning speed.",
    url: "https://blackbox.ai",
    category: "coding",
    emoji: "🖤",
    featured: false
  },
  {
    name: "Tabnine",
    desc: "Private, local AI code completion. Runs on your machine — your code never leaves.",
    url: "https://tabnine.com",
    category: "coding",
    emoji: "🔒",
    featured: false
  },
  {
    name: "Codeium",
    desc: "Powerful free AI coding extension for any IDE. 70+ languages, zero cost to individuals.",
    url: "https://codeium.com",
    category: "coding",
    emoji: "💡",
    featured: false
  },
  {
    name: "Lovable",
    desc: "Full-stack web app builder with zero code. Describe your app, watch it get built.",
    url: "https://lovable.dev",
    category: "coding",
    emoji: "❤️",
    featured: false
  },
  {
    name: "AskCodi",
    desc: "Developer assistance for all programming languages. Explain, fix, and optimize code.",
    url: "https://askcodi.com",
    category: "coding",
    emoji: "🙋",
    featured: false
  },
  {
    name: "Amazon Q",
    desc: "Enterprise-grade AI coding assistant from AWS. Deep AWS integration and security.",
    url: "https://aws.amazon.com/q",
    category: "coding",
    emoji: "☁️",
    featured: false
  },
  {
    name: "Buzzy",
    desc: "Turn ideas into full working apps via simple prompts. No-code app builder powered by AI.",
    url: "https://buzzy.com",
    category: "coding",
    emoji: "🐝",
    featured: false
  },

  // ===== WRITING =====
  {
    name: "Jasper",
    desc: "Brand-aligned marketing copy at scale. 50+ templates for every content format.",
    url: "https://jasper.ai",
    category: "writing",
    emoji: "💼",
    featured: true
  },
  {
    name: "GrammarlyGO",
    desc: "Real-time grammar, tone, and style suggestions. Write with confidence everywhere.",
    url: "https://grammarly.com",
    category: "writing",
    emoji: "✅",
    featured: false
  },
  {
    name: "Copy.ai",
    desc: "Workflow automation for marketers. Generate campaigns, emails, and content in bulk.",
    url: "https://copy.ai",
    category: "writing",
    emoji: "📋",
    featured: false
  },
  {
    name: "Writesonic",
    desc: "SEO-optimized blog writing with real-time data. Rank higher with AI-powered content.",
    url: "https://writesonic.com",
    category: "writing",
    emoji: "📊",
    featured: false
  },
  {
    name: "Sudowrite",
    desc: "AI writing companion for fiction and novels. Brainstorm, expand, and rewrite prose.",
    url: "https://sudowrite.com",
    category: "writing",
    emoji: "📚",
    featured: false
  },
  {
    name: "Rytr",
    desc: "Simple, effective AI copywriting assistant. Over 40 use-cases for any writing need.",
    url: "https://rytr.me",
    category: "writing",
    emoji: "✒️",
    featured: false
  },
  {
    name: "Hemingway Editor Plus",
    desc: "AI for clarity and readability. Spot dense, complex sentences instantly.",
    url: "https://hemingwayapp.com",
    category: "writing",
    emoji: "🏆",
    featured: false
  },
  {
    name: "Wordtune",
    desc: "Intelligent sentence rephrasing and rewriting. Say exactly what you mean, better.",
    url: "https://wordtune.com",
    category: "writing",
    emoji: "🎯",
    featured: false
  },
  {
    name: "QuillBot",
    desc: "Advanced AI paraphrasing tool with multiple modes. Used by millions of students.",
    url: "https://quillbot.com",
    category: "writing",
    emoji: "🪶",
    featured: false
  },
  {
    name: "Anyword",
    desc: "Data-driven marketing copy with performance scores. Write copy that actually converts.",
    url: "https://anyword.com",
    category: "writing",
    emoji: "📈",
    featured: false
  },

  // ===== AUDIO =====
  {
    name: "ElevenLabs",
    desc: "Best-in-class text-to-speech and voice cloning. Hyper-realistic voices in 30+ languages.",
    url: "https://elevenlabs.io",
    category: "audio",
    emoji: "🎤",
    featured: true
  },
  {
    name: "Suno",
    desc: "Full song generation from text prompts. Lyrics, melody, and production all in one.",
    url: "https://suno.com",
    category: "audio",
    emoji: "🎵",
    featured: true
  },
  {
    name: "Udio",
    desc: "High-fidelity music & vocal track generation. Studio-quality AI music at your fingertips.",
    url: "https://udio.com",
    category: "audio",
    emoji: "🎸",
    featured: false
  },
  {
    name: "Murf",
    desc: "AI voiceovers for presentations and videos. 120+ voices in 20+ languages.",
    url: "https://murf.ai",
    category: "audio",
    emoji: "🎙",
    featured: false
  },
  {
    name: "LALAL.AI",
    desc: "AI stem separation and vocal isolation. Split any song into individual tracks.",
    url: "https://lalal.ai",
    category: "audio",
    emoji: "🎼",
    featured: false
  },
  {
    name: "AIVA",
    desc: "Creative AI music composer for film and games. Royalty-free orchestral compositions.",
    url: "https://aiva.ai",
    category: "audio",
    emoji: "🎹",
    featured: false
  },
  {
    name: "Soundraw",
    desc: "Royalty-free AI music generator. Create custom tracks for any project instantly.",
    url: "https://soundraw.io",
    category: "audio",
    emoji: "🌊",
    featured: false
  },
  {
    name: "Voicemod",
    desc: "Real-time AI voice changer for gaming and streaming. 90+ voice filters live.",
    url: "https://voicemod.net",
    category: "audio",
    emoji: "🎭",
    featured: false
  },
  {
    name: "Riverside.fm",
    desc: "AI-powered podcast recording and editing. Studio-quality recording from anywhere.",
    url: "https://riverside.fm",
    category: "audio",
    emoji: "🎙",
    featured: false
  },
  {
    name: "Cleanvoice",
    desc: "Automatically remove filler words, stutters, and mouth noises from audio recordings.",
    url: "https://cleanvoice.ai",
    category: "audio",
    emoji: "🧹",
    featured: false
  },

  // ===== PRODUCTIVITY =====
  {
    name: "NotebookLM",
    desc: "AI research assistant that learns from your notes and documents. Deep source analysis.",
    url: "https://notebooklm.google.com",
    category: "productivity",
    emoji: "📓",
    featured: true
  },
  {
    name: "Notion AI",
    desc: "Integrated workspace with AI writing, summarizing, and database management.",
    url: "https://notion.so/ai",
    category: "productivity",
    emoji: "📐",
    featured: true
  },
  {
    name: "Gamma",
    desc: "AI-generated slide decks and websites. Beautiful presentations in under a minute.",
    url: "https://gamma.app",
    category: "productivity",
    emoji: "🎯",
    featured: false
  },
  {
    name: "Fathom",
    desc: "AI meeting recorder and summarizer. Never take notes during a call again.",
    url: "https://fathom.video",
    category: "productivity",
    emoji: "🐳",
    featured: false
  },
  {
    name: "Otter.ai",
    desc: "Real-time meeting transcription and summaries. Searchable, shareable meeting notes.",
    url: "https://otter.ai",
    category: "productivity",
    emoji: "🦦",
    featured: false
  },
  {
    name: "Fireflies.ai",
    desc: "Voice conversation intelligence for sales teams. Track action items and insights.",
    url: "https://fireflies.ai",
    category: "productivity",
    emoji: "🔥",
    featured: false
  },
  {
    name: "Zapier Central",
    desc: "Build custom AI agents for workflow automation. Connect 6,000+ apps intelligently.",
    url: "https://zapier.com",
    category: "productivity",
    emoji: "⚡",
    featured: false
  },
  {
    name: "Reclaim AI",
    desc: "Intelligent calendar scheduling that protects your focus time automatically.",
    url: "https://reclaim.ai",
    category: "productivity",
    emoji: "📅",
    featured: false
  },
  {
    name: "Consensus",
    desc: "AI search engine for scientific research papers. Evidence-based answers instantly.",
    url: "https://consensus.app",
    category: "productivity",
    emoji: "🔬",
    featured: false
  },
  {
    name: "Elicit",
    desc: "AI-powered literature review for researchers. Analyze thousands of papers at once.",
    url: "https://elicit.com",
    category: "productivity",
    emoji: "📖",
    featured: false
  },
  {
    name: "Humata",
    desc: "Chat with long PDF documents. Ask questions, get cited answers from any document.",
    url: "https://humata.ai",
    category: "productivity",
    emoji: "💬",
    featured: false
  },
  {
    name: "Scite.ai",
    desc: "Verify scientific citations and find contradicting evidence in academic papers.",
    url: "https://scite.ai",
    category: "productivity",
    emoji: "🔖",
    featured: false
  },
  {
    name: "Tome",
    desc: "Narrative storytelling and AI presentations. Pitch decks that actually tell a story.",
    url: "https://tome.app",
    category: "productivity",
    emoji: "📜",
    featured: false
  },

  // ===== BUSINESS =====
  {
    name: "AdCreative.ai",
    desc: "AI-generated high-converting ads. Automatically A/B test creatives for best ROI.",
    url: "https://adcreative.ai",
    category: "business",
    emoji: "📣",
    featured: false
  },
  {
    name: "Brandwell",
    desc: "AI branding and identity creation. Logo, copy, and brand kit generated together.",
    url: "https://brandwell.com",
    category: "business",
    emoji: "🏢",
    featured: false
  },
  {
    name: "Looka",
    desc: "AI logo and brand kit generator. Professional identity for startups and businesses.",
    url: "https://looka.com",
    category: "business",
    emoji: "🎨",
    featured: false
  },
  {
    name: "Browse AI",
    desc: "Automated web scraping and data extraction. Monitor any website without code.",
    url: "https://browse.ai",
    category: "business",
    emoji: "🕷",
    featured: false
  },
  {
    name: "Reply.io",
    desc: "AI sales outreach and automated email sequences. Personalize at scale with AI.",
    url: "https://reply.io",
    category: "business",
    emoji: "📧",
    featured: false
  },
  {
    name: "Smartwriter.ai",
    desc: "Hyper-personalized cold email outreach using LinkedIn data and AI research.",
    url: "https://smartwriter.ai",
    category: "business",
    emoji: "🧠",
    featured: false
  },
  {
    name: "Brand24",
    desc: "AI social media monitoring and brand sentiment analysis. Know what people say.",
    url: "https://brand24.com",
    category: "business",
    emoji: "📡",
    featured: false
  },
  {
    name: "Gong",
    desc: "Revenue intelligence for sales teams. AI insights from every customer conversation.",
    url: "https://gong.io",
    category: "business",
    emoji: "🔔",
    featured: false
  },
  {
    name: "Lavender",
    desc: "AI email coaching for SDRs and sales reps. Real-time scoring and suggestions.",
    url: "https://lavender.ai",
    category: "business",
    emoji: "💜",
    featured: false
  },
  {
    name: "10Web",
    desc: "AI-powered WordPress website builder. Generate complete sites from a description.",
    url: "https://10web.io",
    category: "business",
    emoji: "🌐",
    featured: false
  },

  // ===== SPECIALIZED =====
  {
    name: "ChatPDF",
    desc: "Converse with any PDF file. Ask questions and get instant answers from documents.",
    url: "https://chatpdf.com",
    category: "specialized",
    emoji: "📄",
    featured: false
  },
  {
    name: "Interior AI",
    desc: "AI-driven room redesign and interior visualization. Reimagine any space instantly.",
    url: "https://interiorai.com",
    category: "specialized",
    emoji: "🏠",
    featured: false
  },
  {
    name: "Hugging Face",
    desc: "The hub for open-source AI models and datasets. GitHub of the AI community.",
    url: "https://huggingface.co",
    category: "specialized",
    emoji: "🤗",
    featured: false
  },
  {
    name: "Shortwave",
    desc: "AI-first email management that understands your inbox and drafts replies.",
    url: "https://shortwave.com",
    category: "specialized",
    emoji: "📬",
    featured: false
  },
  {
    name: "Morgen",
    desc: "Unified calendar and AI task manager. Schedule smarter with AI time blocking.",
    url: "https://morgen.ai",
    category: "specialized",
    emoji: "🌅",
    featured: false
  }
];

const FEATURED_IDS = ["ChatGPT", "Claude", "Gemini", "Perplexity", "Midjourney", "GitHub Copilot", "ElevenLabs", "Suno"];

const CATEGORY_LABELS = {
  chatbots: "💬 Chatbots",
  image: "🖼 Image Generation",
  video: "🎬 Video Tools",
  coding: "💻 Coding Tools",
  writing: "✍️ Writing Tools",
  audio: "🎧 Audio & Music",
  productivity: "🚀 Productivity",
  business: "📊 Business",
  specialized: "🛠 Specialized"
};
