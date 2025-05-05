import React, { useState } from "react";
import "./BlogPage.css";

const blogPosts = [
  {
    title: "Top 5 Mistakes to Avoid in Image Editing",
    date: "May 5, 2025",
    readTime: "3 min read",
    summary:
      "Avoid the most common editing errors that can ruin a photo, from over-filtering to color imbalance.",
    content:
      "Many people unknowingly harm their images by making these simple mistakes:\n\n- Don’t overuse filters — subtlety wins.\n- Avoid inconsistent lighting and shadows.\n- Maintain original proportions to prevent distortion.\n- Save edits in non-destructive formats (like PSD).\n- Match color tones across a batch for consistency.",
  },
  {
    title: "How Background Removal Boosts E-commerce Sales",
    date: "May 3, 2025",
    readTime: "2 min read",
    summary:
      "A clean background makes your product stand out and leads to better conversions online.",
    content:
      "Removing cluttered backgrounds ensures your product is the focal point.\n\n- Helps products stand out clearly on websites.\n- Consistency builds trust across all product listings.\n- Improves page load time with optimized images.\n- Easier to repurpose for marketing banners and ads.",
  },
  {
    title: "Understanding Color Correction: The Basics",
    date: "April 30, 2025",
    readTime: "4 min read",
    summary:
      "Color correction can transform an image — here’s how to get it right without going overboard.",
    content:
      "A well-balanced color scheme can make a huge difference.\n\n- Adjust white balance for accurate skin tones and fabrics.\n- Ensure consistent color temperature across photo sets.\n- Fix underexposed or overexposed images.\n- Create visual harmony without oversaturation.",
  },
  {
    title: "Clipping Path vs. Masking: What’s the Difference?",
    date: "April 28, 2025",
    readTime: "3 min read",
    summary:
      "Learn the difference between clipping paths and masking — and when to use which.",
    content:
      "Clients often confuse these terms. Here's a quick guide:\n\n- **Clipping Path**: Best for sharp-edged objects like gadgets.\n- **Masking**: Ideal for soft edges like hair or transparent materials.\n- Choosing the right method saves time and improves precision.",
  },
  {
    title: "Why Consistent Image Styling Matters for Your Brand",
    date: "April 25, 2025",
    readTime: "2 min read",
    summary:
      "Random photo styles weaken your brand. Find out how consistent styling improves trust.",
    content:
      "Consistency in image editing supports brand identity.\n\n- Uniform lighting, angles, and background create coherence.\n- Helps in social media grids and catalog layouts.\n- Increases brand recall and professionalism.",
  }
];

const BlogPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleContent = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="blog-page">
      <h1 className="blog-title"><span className="highlighted-text">Blog</span>– Image Editing Tips & Insights</h1>
      <p className="blog-intro">
        Get quick tips, industry trends, and expert advice to enhance your visuals with professional editing.
      </p>

      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <h2 className="post-title">{post.title}</h2>
            <p className="meta">
              {post.date} · {post.readTime}
            </p>
            <p className="summary">{post.summary}</p>

            <button
              onClick={() => toggleContent(index)}
              className="toggle-button"
            >
              {openIndex === index ? "Show Less" : "Read More"}
            </button>

            {openIndex === index && (
              <div className="full-content">
                {post.content.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
