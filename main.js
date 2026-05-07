// ============================================================
// EAGOX STUDIO - AI TOOLS HUB
// Premium SaaS aesthetic with intelligent search & fast performance
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
  // ===== CONFIGURATION =====
  const MAX_RECENT_SEARCHES = 5;
  const DEBOUNCE_DELAY = 200;
  const DROPDOWN_MAX_RESULTS = 10;
  const RECENT_SEARCHES_KEY = 'eagox_recent_searches';

  // ===== DOM ELEMENTS =====
  const loader = document.getElementById('loader');
  const themeToggle = document.getElementById('theme-toggle');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');
  const searchResultsCount = document.getElementById('search-results-count');
  const searchDropdownContainer = document.querySelector('.search-dropdown-container');
  const searchResultsSection = document.getElementById('search-results-section');
  const searchRecentSection = document.getElementById('search-recent-section');
  const searchDropdownList = document.getElementById('search-dropdown-list');
  const searchRecentList = document.getElementById('search-recent-list');
  const searchEmptyState = document.getElementById('search-empty-state');
  const catTabs = document.querySelectorAll('.cat-tab');
  const toolsGrid = document.getElementById('tools-grid');
  const featuredGrid = document.getElementById('featured-grid');
  const noResults = document.getElementById('no-results');
  const revealElements = document.querySelectorAll('.reveal');

  // ===== STATE =====
  let currentCategory = 'all';
  let currentSearch = '';
  let recentSearches = JSON.parse(localStorage.getItem(RECENT_SEARCHES_KEY) || '[]');

  // ===== UTILITY FUNCTIONS =====
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function getMatchedTools(searchTerm) {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return [];

    const exactMatches = [];
    const partialMatches = [];
    const otherMatches = [];

    for (const tool of AI_TOOLS) {
      const name = tool.name.toLowerCase();
      const desc = tool.desc.toLowerCase();
      const category = tool.category.toLowerCase();

      if (name.startsWith(term)) exactMatches.push(tool);
      else if (name.includes(term)) partialMatches.push(tool);
      else if (desc.includes(term) || category.includes(term)) otherMatches.push(tool);

      if (exactMatches.length + partialMatches.length + otherMatches.length >= DROPDOWN_MAX_RESULTS * 3) break;
    }

    return [...exactMatches, ...partialMatches, ...otherMatches].slice(0, DROPDOWN_MAX_RESULTS);
  }

  function saveRecentSearch(toolName) {
    // Remove if already exists
    recentSearches = recentSearches.filter(s => s !== toolName);
    // Add to front
    recentSearches.unshift(toolName);
    // Keep only last 5
    recentSearches = recentSearches.slice(0, MAX_RECENT_SEARCHES);
    // Save to localStorage
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(recentSearches));
  }

  // ===== FILTERING & RENDERING =====
  function getFilteredTools() {
    let tools = AI_TOOLS;

    // Filter by category
    if (currentCategory !== 'all') {
      tools = tools.filter(tool => tool.category === currentCategory);
    }

    // Filter by search
    if (currentSearch.trim()) {
      const searchTerm = currentSearch.toLowerCase();
      tools = tools.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm) ||
        tool.desc.toLowerCase().includes(searchTerm) ||
        tool.category.toLowerCase().includes(searchTerm)
      );
    }

    return tools;
  }

  function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = `
      <div class="tool-header">
        <div class="tool-icon">${tool.emoji}</div>
        <div class="tool-category">${CATEGORY_LABELS[tool.category]}</div>
      </div>
      <h3 class="tool-name">${tool.name}</h3>
      <p class="tool-desc">${tool.desc}</p>
      <div class="tool-footer">
        <a href="${tool.url}" class="tool-link" target="_blank" rel="noopener">
          Visit Tool
        </a>
      </div>
    `;
    return card;
  }

  function renderTools() {
    if (!toolsGrid) return;

    const tools = getFilteredTools();

    // Update search results count
    if (searchResultsCount && currentSearch.trim()) {
      searchResultsCount.textContent = `${tools.length} tool${tools.length !== 1 ? 's' : ''} found`;
      searchResultsCount.classList.add('visible');
    } else {
      searchResultsCount.classList.remove('visible');
    }

    // Clear grid efficiently
    toolsGrid.innerHTML = '';

    // Show no results or render tools
    if (tools.length === 0) {
      if (noResults) noResults.classList.remove('hidden');
      return;
    }

    if (noResults) noResults.classList.add('hidden');

    // Use document fragment for better performance
    const fragment = document.createDocumentFragment();
    tools.forEach(tool => {
      fragment.appendChild(createToolCard(tool));
    });
    toolsGrid.appendChild(fragment);
  }

  function renderFeatured() {
    if (!featuredGrid) return;

    featuredGrid.innerHTML = '';
    const featuredTools = AI_TOOLS.filter(tool => tool.featured);
    const fragment = document.createDocumentFragment();
    featuredTools.forEach(tool => fragment.appendChild(createToolCard(tool)));
    featuredGrid.appendChild(fragment);
  }

  // ===== SEARCH DROPDOWN RENDERING =====
  function renderSearchDropdown() {
    if (!searchDropdownContainer) return;

    const searchTerm = currentSearch.trim();
    if (!searchTerm) {
      if (recentSearches.length > 0) {
        searchResultsSection?.classList.add('hidden');
        searchRecentSection?.classList.remove('hidden');
        searchEmptyState?.classList.add('hidden');
        renderRecentSearches();
        searchDropdownContainer.classList.remove('hidden');
      } else {
        searchDropdownContainer.classList.add('hidden');
      }
      return;
    }

    const matchedTools = getMatchedTools(searchTerm);
    if (matchedTools.length === 0) {
      searchResultsSection?.classList.add('hidden');
      searchRecentSection?.classList.add('hidden');
      searchEmptyState?.classList.remove('hidden');
      searchDropdownContainer.classList.remove('hidden');
      return;
    }

    searchDropdownContainer.classList.remove('hidden');
    searchResultsSection?.classList.remove('hidden');
    searchRecentSection?.classList.add('hidden');
    searchEmptyState?.classList.add('hidden');

    searchDropdownList.innerHTML = '';
    const fragment = document.createDocumentFragment();

    matchedTools.forEach(tool => {
      const li = document.createElement('li');
      li.className = 'search-dropdown-item';
      li.innerHTML = `
        <span class="search-dropdown-emoji">${tool.emoji}</span>
        <span class="search-dropdown-name">${tool.name}</span>
        <span class="search-dropdown-badge">${CATEGORY_LABELS[tool.category]}</span>
      `;
      li.addEventListener('click', () => {
        selectSearchResult(tool);
      });
      fragment.appendChild(li);
    });

    searchDropdownList.appendChild(fragment);
  }

  function renderRecentSearches() {
    if (!searchRecentList || recentSearches.length === 0) return;

    searchRecentList.innerHTML = '';
    const fragment = document.createDocumentFragment();

    recentSearches.forEach(searchTerm => {
      const li = document.createElement('li');
      li.className = 'search-recent-item';
      li.innerHTML = `
        <span class="search-recent-icon">🕐</span>
        <span class="search-recent-text">${searchTerm}</span>
      `;
      li.addEventListener('click', () => {
        searchInput.value = searchTerm;
        currentSearch = searchTerm;
        setupClearButton();
        renderSearchDropdown();
        renderTools();
      });
      fragment.appendChild(li);
    });

    searchRecentList.appendChild(fragment);
  }

  function selectSearchResult(tool) {
    if (!searchInput) return;
    searchInput.value = tool.name;
    currentSearch = tool.name;
    setupClearButton();
    saveRecentSearch(tool.name);
    searchDropdownContainer?.classList.add('hidden');
    renderTools();
  }

  function setupClearButton() {
    if (searchClear) {
      searchClear.classList.toggle('visible', currentSearch.trim() !== '');
    }
  }

  // ===== EVENT LISTENERS =====

  // Loader
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
        }, 300);
      }, 800);
    });
  }

  // Theme toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const revealOnLoad = () => revealElements.forEach(el => el.classList.add('visible'));
  revealOnLoad();

  // Mobile menu
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
  }

  // Search input with debouncing
  if (searchInput && searchClear) {
    const debouncedSearch = debounce(() => {
      currentSearch = searchInput.value;
      setupClearButton();
      renderSearchDropdown();
      renderTools();
    }, DEBOUNCE_DELAY);

    searchInput.addEventListener('input', debouncedSearch);

    searchInput.addEventListener('focus', () => {
      if (currentSearch.trim() || recentSearches.length > 0) {
        renderSearchDropdown();
      }
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchDropdownContainer?.classList.add('hidden');
      }
    });

    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      currentSearch = '';
      setupClearButton();
      searchDropdownContainer?.classList.add('hidden');
      renderTools();
      searchInput.focus();
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-wrap')) {
        searchDropdownContainer?.classList.add('hidden');
      }
    });
  }

  // Category tabs
  if (catTabs.length > 0) {
    catTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        catTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentCategory = tab.dataset.cat;
        if (searchInput) {
          searchInput.value = '';
          currentSearch = '';
          setupClearButton();
          searchDropdownContainer?.classList.add('hidden');
        }
        renderTools();
      });
    });
  }

  // Navbar scroll effect
  let lastScrollY = 0;
  const navbar = document.getElementById('navbar');
  const scrollHandler = () => {
    const scrollY = window.scrollY;
    if (scrollY > 20 && lastScrollY <= 20) {
      navbar?.classList.add('scrolled');
    } else if (scrollY <= 20 && lastScrollY > 20) {
      navbar?.classList.remove('scrolled');
    }
    lastScrollY = scrollY;
  };
  
  window.addEventListener('scroll', scrollHandler, { passive: true });

  // ===== INITIALIZATION =====
  if (featuredGrid) renderFeatured();
  if (toolsGrid) renderTools();
});