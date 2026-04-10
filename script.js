const resources = [
  {
    title: "Datawhale 组队学习",
    description: "社区驱动的任务式学习活动，适合建立持续学习节奏。",
    url: "https://www.datawhale.cn/",
    category: "社区竞赛",
    level: "入门",
    tags: ["组队", "打卡", "开源"],
  },
  {
    title: "吴恩达机器学习专项课",
    description: "系统学习监督学习、非监督学习与模型调优。",
    url: "https://www.coursera.org/specializations/machine-learning-introduction",
    category: "机器学习",
    level: "入门",
    tags: ["经典课程", "数学基础"],
  },
  {
    title: "CS229 课程资料",
    description: "斯坦福经典 ML 课程，理论和推导更完整。",
    url: "https://cs229.stanford.edu/",
    category: "机器学习",
    level: "高阶",
    tags: ["理论", "推导"],
  },
  {
    title: "动手学深度学习",
    description: "从零实现深度学习模型，覆盖 PyTorch 版本。",
    url: "https://zh.d2l.ai/",
    category: "深度学习",
    level: "入门",
    tags: ["实战", "教材"],
  },
  {
    title: "fast.ai Practical Deep Learning",
    description: "项目驱动课程，强调先实践后深入原理。",
    url: "https://course.fast.ai/",
    category: "深度学习",
    level: "进阶",
    tags: ["项目制", "英文"],
  },
  {
    title: "Hugging Face Course",
    description: "NLP 与 Transformer 实战课程，含代码和部署。",
    url: "https://huggingface.co/learn",
    category: "大模型",
    level: "进阶",
    tags: ["Transformer", "NLP"],
  },
  {
    title: "OpenAI API 文档",
    description: "模型调用、工具调用与结构化输出的官方文档。",
    url: "https://platform.openai.com/docs",
    category: "Agent",
    level: "入门",
    tags: ["工具调用", "API"],
  },
  {
    title: "LangChain 文档",
    description: "构建 RAG 与 Agent 工作流的常用框架文档。",
    url: "https://python.langchain.com/docs/introduction/",
    category: "Agent",
    level: "进阶",
    tags: ["Agent", "RAG"],
  },
  {
    title: "LlamaIndex 文档",
    description: "面向知识库与索引编排的框架，适合做问答系统。",
    url: "https://docs.llamaindex.ai/",
    category: "大模型",
    level: "进阶",
    tags: ["检索", "知识库"],
  },
  {
    title: "Kaggle Learn",
    description: "短平快课程体系，适合上手数据分析与建模。",
    url: "https://www.kaggle.com/learn",
    category: "入门基础",
    level: "入门",
    tags: ["练习", "数据集"],
  },
  {
    title: "Scikit-learn 官方教程",
    description: "传统 ML 实战工具库，覆盖建模全流程。",
    url: "https://scikit-learn.org/stable/tutorial/index.html",
    category: "机器学习",
    level: "入门",
    tags: ["工具库", "工程化"],
  },
  {
    title: "PyTorch 官方教程",
    description: "深度学习训练、部署、调试的基础与进阶指南。",
    url: "https://pytorch.org/tutorials/",
    category: "深度学习",
    level: "进阶",
    tags: ["训练", "部署"],
  },
  {
    title: "TensorFlow 官方教程",
    description: "从 Keras 入门到生产部署的完整路径。",
    url: "https://www.tensorflow.org/tutorials",
    category: "深度学习",
    level: "进阶",
    tags: ["Keras", "生产"],
  },
  {
    title: "Paper with Code",
    description: "论文、代码与 SOTA 榜单对照查询平台。",
    url: "https://paperswithcode.com/",
    category: "研究前沿",
    level: "高阶",
    tags: ["论文", "SOTA"],
  },
  {
    title: "arXiv cs.AI",
    description: "跟踪 AI 领域最新论文更新。",
    url: "https://arxiv.org/list/cs.AI/recent",
    category: "研究前沿",
    level: "高阶",
    tags: ["论文追踪", "前沿"],
  },
  {
    title: "GitHub Trending (AI)",
    description: "发现最近活跃的 AI 开源项目与工具。",
    url: "https://github.com/trending",
    category: "实战项目",
    level: "入门",
    tags: ["开源项目", "趋势"],
  },
  {
    title: "Awesome LLM Apps",
    description: "大模型应用案例集合，适合找灵感与模板。",
    url: "https://github.com/Shubhamsaboo/awesome-llm-apps",
    category: "实战项目",
    level: "进阶",
    tags: ["案例库", "应用"],
  },
  {
    title: "LangChain Templates",
    description: "RAG、Chatbot、Agent 的可复用模板仓库。",
    url: "https://github.com/langchain-ai/langchain/tree/master/templates",
    category: "Agent",
    level: "进阶",
    tags: ["模板", "快速起步"],
  },
  {
    title: "OpenAI Agents 指南",
    description: "从单 Agent 到多 Agent 的设计模式与实现建议。",
    url: "https://platform.openai.com/docs/guides/agents",
    category: "Agent",
    level: "进阶",
    tags: ["多 Agent", "编排"],
  },
  {
    title: "AutoGen 文档",
    description: "多 Agent 协同框架，适合实验协作型智能体。",
    url: "https://microsoft.github.io/autogen/",
    category: "Agent",
    level: "高阶",
    tags: ["多智能体", "协作"],
  },
  {
    title: "CrewAI 文档",
    description: "角色化 Agent 编排框架，适合任务流自动化。",
    url: "https://docs.crewai.com/",
    category: "Agent",
    level: "进阶",
    tags: ["任务编排", "自动化"],
  },
  {
    title: "v0",
    description: "通过自然语言快速生成前端界面与可运行代码。",
    url: "https://v0.dev/",
    category: "Vibe Coding",
    level: "入门",
    tags: ["原型", "UI 生成"],
  },
  {
    title: "Bolt.new",
    description: "浏览器内快速生成并迭代全栈应用原型。",
    url: "https://bolt.new/",
    category: "Vibe Coding",
    level: "入门",
    tags: ["全栈原型", "快速迭代"],
  },
  {
    title: "Lovable",
    description: "面向产品快速落地的 AI 开发体验平台。",
    url: "https://lovable.dev/",
    category: "Vibe Coding",
    level: "进阶",
    tags: ["产品化", "MVP"],
  },
  {
    title: "Cursor Docs",
    description: "AI 协作编码工作流与工程实践文档。",
    url: "https://docs.cursor.com/",
    category: "Vibe Coding",
    level: "进阶",
    tags: ["AI 编程", "工程效率"],
  },
  {
    title: "Windsurf Docs",
    description: "基于 AI 的编程协作与自动化开发文档。",
    url: "https://docs.windsurf.com/",
    category: "Vibe Coding",
    level: "进阶",
    tags: ["AI IDE", "协作开发"],
  },
  {
    title: "Coggle / XMind 知识图谱",
    description: "构建 AI 学习地图，整理概念关系与学习笔记。",
    url: "https://xmind.app/",
    category: "入门基础",
    level: "入门",
    tags: ["知识管理", "可视化"],
  },
  {
    title: "LeetCode 数据结构与算法",
    description: "补齐工程与算法基础，提高代码表达能力。",
    url: "https://leetcode.cn/",
    category: "入门基础",
    level: "入门",
    tags: ["算法", "编程基础"],
  },
  {
    title: "天池竞赛平台",
    description: "中文竞赛平台，适合训练业务场景建模能力。",
    url: "https://tianchi.aliyun.com/",
    category: "社区竞赛",
    level: "进阶",
    tags: ["竞赛", "实战"],
  },
  {
    title: "Kaggle Competitions",
    description: "全球数据科学竞赛平台，含社区讨论与代码。",
    url: "https://www.kaggle.com/competitions",
    category: "社区竞赛",
    level: "进阶",
    tags: ["竞赛", "国际"],
  },
  {
    title: "Hugging Face Spaces",
    description: "在线体验和部署 AI Demo，快速验证想法。",
    url: "https://huggingface.co/spaces",
    category: "实战项目",
    level: "入门",
    tags: ["Demo", "部署"],
  },
  {
    title: "Weights & Biases Guides",
    description: "实验追踪、可视化与团队协作最佳实践。",
    url: "https://docs.wandb.ai/guides",
    category: "研究前沿",
    level: "进阶",
    tags: ["实验管理", "可视化"],
  },
];

const state = {
  query: "",
  category: "全部",
  level: "全部",
};

const categoryChips = document.getElementById("category-chips");
const levelChips = document.getElementById("level-chips");
const searchInput = document.getElementById("search-input");
const grid = document.getElementById("resource-grid");
const emptyState = document.getElementById("empty-state");
const statTotal = document.getElementById("stat-total");
const statVisible = document.getElementById("stat-visible");
const statDirections = document.getElementById("stat-directions");

const categories = ["全部", ...new Set(resources.map((item) => item.category))];
const levels = ["全部", "入门", "进阶", "高阶"];

function createChip(text, selected, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `chip${selected ? " active" : ""}`;
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}

function renderChips() {
  categoryChips.innerHTML = "";
  levelChips.innerHTML = "";

  categories.forEach((item) => {
    categoryChips.appendChild(
      createChip(item, state.category === item, () => {
        state.category = item;
        renderAll();
      }),
    );
  });

  levels.forEach((item) => {
    levelChips.appendChild(
      createChip(item, state.level === item, () => {
        state.level = item;
        renderAll();
      }),
    );
  });
}

function filterResources() {
  const q = state.query.trim().toLowerCase();

  return resources.filter((item) => {
    const categoryOK = state.category === "全部" || item.category === state.category;
    const levelOK = state.level === "全部" || item.level === state.level;
    const queryOK =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags.join(" ").toLowerCase().includes(q);

    return categoryOK && levelOK && queryOK;
  });
}

function renderCards(items) {
  grid.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "resource-card";
    card.innerHTML = `
      <div class="resource-meta">
        <span class="badge">${item.category}</span>
        <span class="badge level">${item.level}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="resource-foot">
        <span class="tag-list">${item.tags.map((tag) => `#${tag}`).join(" ")}</span>
        <a href="${item.url}" target="_blank" rel="noopener noreferrer">访问资源</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderAll() {
  const filtered = filterResources();
  renderChips();
  renderCards(filtered);

  statTotal.textContent = String(resources.length);
  statVisible.textContent = String(filtered.length);
  statDirections.textContent = String(categories.length - 1);
  emptyState.classList.toggle("hidden", filtered.length > 0);
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderAll();
});

renderAll();
