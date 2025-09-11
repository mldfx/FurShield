import { Link } from "react-router-dom";
import { useState } from "react";
import "./CareOptions.css";

const careData = {
  articles: [
    {
      id: 1,
      title: "Feeding Guidelines for Dogs & Cats",
      category: "feeding",
      content: `
        🐕‍🦺 Dogs:
        - Puppies (under 1 year): Feed 3 - 4 small meals/day with puppy-formula food.
        - Adults: 2 meals/day. Choose high-protein, low-grain options.
        - Seniors: Switch to low-calorie, joint-support formulas.

        🐈 Cats:
        - Kittens: Feed kitten-specific wet + dry food 3 - 4x/day.
        - Adults: Wet food preferred (helps hydration). Add dry food for dental health.
        - Seniors: Kidney-support or low-phosphorus diets.

        ❌ NEVER feed: Chocolate, grapes, raisins, onions, garlic, xylitol, alcohol, caffeine.
        💧 Always provide fresh, clean water — consider a cat water fountain to encourage drinking.
        ⚖️ Portion control: Follow bag guidelines, but adjust based on activity level and vet advice.
        📅 Pro Tip: Set feeding times — it helps with digestion, training, and prevents begging.
      `,
    },
    {
      id: 2,
      title: "Hygiene & Grooming Best Practices",
      category: "hygiene",
      content: `
        🛁 Bathing:
        - Dogs: Every 4 - 6 weeks (or when dirty/smelly). Use oatmeal or hypoallergenic shampoo.
        - Cats: Rarely needed — they self-groom. Only bathe if medicated or extremely dirty.

        🪮 Brushing:
        - Short hair: 1 - 2x/week.
        - Long hair (e.g., Persian, Collie): Daily brushing to prevent mats.
        - Use slicker brushes for dogs, fine-tooth combs for cats.

        👂 Ear Cleaning:
        - Check weekly. Clean with vet-approved solution on cotton ball — never Q-tips!
        - Signs of infection: Redness, odor, discharge, head shaking.

        ✂️ Nail Trimming:
        - Every 3 - 4 weeks. Trim just before the “quick” (pink part).
        - Use guillotine or scissor-style clippers. Have styptic powder ready for accidents.

        🚽 Litter Box / Potty Area:
        - Scoop daily. Full change 1 - 2x/week.
        - Rule of thumb: One litter box per cat + 1 extra.
        - For dogs: Pick up waste immediately — prevents parasites and keeps yard clean.
      `,
    },
    {
      id: 3,
      title: "Exercise Routines for Pets",
      category: "exercise",
      content: `
        🐕 Dogs:
        - Small breeds (e.g., Chihuahua): 20 - 30 mins/day of walks or indoor play.
        - Medium breeds (e.g., Beagle): 45 - 60 mins/day — walks, fetch, agility.
        - Large/High-energy (e.g., Border Collie): 60 - 90+ mins — running, hiking, dog sports.

        🐈 Cats:
        - 2 - 3 play sessions daily (10 - 15 mins each).
        - Use wand toys, laser pointers (always end with a physical toy!), puzzle feeders.
        - Cat trees and window perches for climbing and bird-watching = mental exercise!

        🧠 Mental Stimulation:
        - Teach tricks: “Sit,” “Stay,” “Paw,” “Spin.”
        - Use food puzzles or snuffle mats.
        - Rotate toys weekly to keep things interesting.

        🚫 Avoid:
        - Over-exercising puppies (can damage joints).
        - Exercising right after meals (risk of bloat in deep-chested dogs).
        - Off-leash in unsafe areas.

        🌞 Best Time: Early morning or evening in hot weather to avoid heatstroke.
      `,
    },
  ],
  videos: [
    {
      id: 1,
      title: "How to Brush Your Cat Without Stress",
      url: "https://www.youtube.com/embed/dEmoc52O-i8",
      category: "hygiene",
    },
    {
      id: 2,
      title: "Teach Your Dog to Sit & Stay",
      url: "https://www.youtube.com/embed/DPNz6reMVXY",
      category: "training",
    },
    {
      id: 3,
      title: "Feeding Time Made Easy",
      url: "https://www.youtube.com/embed/-QVH1r61qIQ",
      category: "feeding",
    },
    {
      id: 4,
      title: "Quick Emergency First Aid",
      url: "https://www.youtube.com/embed/p_Xw_LaofEQ&pp=ygUwaG93IHRvIGFkbWluc3RlciBmaXJzdCBhaWQgdHJlYXRtZW50IHRvIHlvdXIgcGV0",
      category: "emergency",
    },
    {
      id: 5,
      title: "Fun Indoor Exercises",
      url: "https://www.youtube.com/embed/9-1BN8tydCA",
      category: "exercise",
    },
  ],
  faqs: [
    {
      id: 1,
      question: "How often should I bathe my dog?",
      answer:
        "Every 2-4 weeks, or as needed. Over-bathing can dry out their skin.",
      category: "hygiene",
    },
    {
      id: 2,
      question: "Can I feed my cat dog food?",
      answer:
        "No. Cats require taurine and other nutrients not found in dog food. Always feed species-specific food.",
      category: "feeding",
    },
    {
      id: 3,
      question: "What should I do if my pet eats chocolate?",
      answer:
        "Call your vet or emergency pet poison line immediately. Chocolate is toxic to pets.",
      category: "emergency",
    },
    {
      id: 4,
      question: "How long should I walk my puppy?",
      answer:
        "5 minutes per month of age, up to twice a day. E.g., a 3-month-old puppy = 15 mins, 2x/day.",
      category: "exercise",
    },
    {
      id: 5,
      question: "How do I stop my dog from jumping?",
      answer:
        "Turn away and ignore when they jump. Reward only when all four paws are on the floor.",
      category: "training",
    },
    {
      id: 6,
      question: "Is grain-free food better?",
      answer:
        "Not necessarily. Some dogs need grains. Consult your vet before switching diets.",
      category: "feeding",
    },
    {
      id: 7,
      question: "What’s a pet emergency?",
      answer:
        "Difficulty breathing, seizures, poisoning, major trauma, or uncontrolled bleeding.",
      category: "emergency",
    },
    {
      id: 8,
      question: "Can cats be trained?",
      answer:
        "Yes! Use treats and clicker training. Start with ‘come’ or ‘sit’. Keep sessions short.",
      category: "training",
    },
    {
      id: 9,
      question: "Do cats need baths?",
      answer:
        "Rarely. Only if they’re dirty, have skin conditions, or can’t groom themselves.",
      category: "hygiene",
    },
    {
      id: 10,
      question: "Should I walk my cat?",
      answer:
        "Some cats enjoy harness walks! Train slowly indoors first. Never force it.",
      category: "exercise",
    },
  ],
  categories: [
    { id: "all", name: "All" },
    { id: "feeding", name: "Feeding" },
    { id: "hygiene", name: "Hygiene" },
    { id: "exercise", name: "Exercise" },
    { id: "emergency", name: "Emergency" },
    { id: "training", name: "Training" },
  ],
};

// ✅ Categories to apply special "All" view to
const SPECIAL_CATEGORIES = [
  "feeding",
  "exercise",
  "hygiene",
  "emergency",
  "training",
];

export default function CareOptions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Prepare data by adding type
  const articles = careData.articles.map((item) => ({
    ...item,
    type: "article",
  }));
  const videos = careData.videos.map((item) => ({ ...item, type: "video" }));
  const faqs = careData.faqs.map((item) => ({ ...item, type: "faq" }));

  let contentToDisplay = [];

  if (selectedCategory === "all") {
    // For each special category, pick:
    // 1 article, 1 video, 2 faqs
    SPECIAL_CATEGORIES.forEach((cat) => {
      const catArticles = articles.filter((a) => a.category === cat);
      const catVideos = videos.filter((v) => v.category === cat);
      const catFaqs = faqs.filter((f) => f.category === cat);

      if (catArticles.length > 0) {
        contentToDisplay.push(catArticles[0]); // 1 article
      }
      if (catVideos.length > 0) {
        contentToDisplay.push(catVideos[0]); // 1 video
      }
      if (catFaqs.length > 0) {
        contentToDisplay.push(...catFaqs.slice(0, 2)); // 2 FAQs
      }
    });

    // Optional: Include items from other categories without limit
    const otherCategories = [
      ...new Set([
        ...articles
          .filter((a) => !SPECIAL_CATEGORIES.includes(a.category))
          .map((a) => a.category),
        ...videos
          .filter((v) => !SPECIAL_CATEGORIES.includes(v.category))
          .map((v) => v.category),
        ...faqs
          .filter((f) => !SPECIAL_CATEGORIES.includes(f.category))
          .map((f) => f.category),
      ]),
    ];

    otherCategories.forEach((cat) => {
      contentToDisplay.push(
        ...articles.filter((a) => a.category === cat),
        ...videos.filter((v) => v.category === cat),
        ...faqs.filter((f) => f.category === cat)
      );
    });
  } else {
    // Show all items in selected category
    contentToDisplay = [
      ...articles.filter((a) => a.category === selectedCategory),
      ...videos.filter((v) => v.category === selectedCategory),
      ...faqs.filter((f) => f.category === selectedCategory),
    ];
  }

  // 🔍 Apply search
  const searchedContent = contentToDisplay.filter((item) => {
    if (item.type === "faq") {
      return (
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      return (
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.content &&
          item.content.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
  });

  // 🗂️ Group by type for rendering
  const articlesToDisplay = searchedContent.filter(
    (item) => item.type === "article"
  );
  const videosToDisplay = searchedContent.filter(
    (item) => item.type === "video"
  );
  const faqsToDisplay = searchedContent.filter((item) => item.type === "faq");

  return (
    <div
      className={`care-container ${
        selectedCategory !== "all" ? "category-selected" : ""
      }`}
    >
      {/* Navbar */}
      <nav className="care-navbar">
        <h2 className="navbar-title">📚 Care Resources</h2>
        <Link to="/dashboard/pet-owner">
          <button className="back-btn" aria-label="Back to Dashboard">
            ⬅ Back to Dashboard
          </button>
        </Link>
      </nav>

      {/* Search Section */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search care tips, videos, FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Category Section */}
      <div className="category-filter">
        {careData.categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-btn ${
              selectedCategory === cat.id ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Render sections only if they have items */}
      {articlesToDisplay.length > 0 && (
        <>
          <h2>Care Articles</h2>
          <div className="articles-grid">
            {articlesToDisplay.map((article) => (
              <div key={article.id} className="article-card">
                <h3>{article.title}</h3>
                {/* ✅ HERE IS THE ONLY CHANGE — truncate content when "All" is selected */}
                <p>
                  {selectedCategory === "all"
                    ? article.content
                        .split("\n")
                        .slice(0, 3)
                        .filter((line) => line.trim() !== "")
                        .join("\n") + "\n..."
                    : article.content}
                </p>
                <span className="article-tag">{article.category}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {videosToDisplay.length > 0 && (
        <>
          <h2>Video Guides</h2>
          <div className="videos-grid">
            {videosToDisplay.map((video) => (
              <div key={video.id} className="video-card">
                <h3>{video.title}</h3>
                <div className="video-wrapper">
                  <iframe
                    width="100%"
                    height="200"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {faqsToDisplay.length > 0 && (
        <>
          <h2>Frequently Asked Questions</h2>
          <div className="faq-section">
            {faqsToDisplay.map((faq) => (
              <div key={faq.id} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {searchedContent.length === 0 && searchTerm && (
        <p className="no-results">No results found for your search.</p>
      )}

      {searchedContent.length === 0 &&
        !searchTerm &&
        selectedCategory !== "all" && (
          <p className="no-results">No content available in this category.</p>
        )}
    </div>
  );
}
