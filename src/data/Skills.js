// src/data/skills.js

// Skills data organized by categories
export const skillsData = {
  categories: [
    {
      id: "software",
      name: "Web Dev",
      icon: "💻",
      skills: [
        { name: "FastAPI", level: "Advanced" },
        { name: "Flask", level: "Advanced" },
        { name: "React.js", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "TailwindCSS", level: "Intermediate" },
        { name: "Docker", level: "Beginner" },
      ],
    },
    {
      id: "expertise",
      name: "IA",
      icon: "✨",
      skills: [
        { name: "Machine Learning", level: "Advanced" },
        { name: "Deep Learning (TensorFlow)", level: "Intermediate" },
        { name: "LangChain", level: "Intermediate" },
        { name: "Hugging Face", level: "Intermediate" },
        { name: "Data Analysis (Pandas, Matplotlib)", level: "Advanced" },
        { name: "NLP (Scikit-learn, Embeddings)", level: "Intermediate" },
      ],
    },
    {
      id: "language",
      name: "Language",
      icon: "🌐",
      skills: [
        { name: "English", level: "Fluent" },
        { name: "French", level: "Fluent" },
        { name: "Arabic", level: "Native" },
      ],
    },
  ],
};
