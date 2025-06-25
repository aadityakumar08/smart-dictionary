# Contributing to Smart Dictionary

Thank you for your interest in contributing to Smart Dictionary! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Bugs

Before creating bug reports, please check the existing issues to see if the problem has already been reported. When creating a bug report, include:

- **Clear and descriptive title**
- **Steps to reproduce** the problem
- **Expected behavior** vs **actual behavior**
- **Browser and OS information**
- **Screenshots** if applicable

### Suggesting Enhancements

We welcome feature requests! When suggesting enhancements:

- **Describe the feature** in detail
- **Explain why** this feature would be useful
- **Provide examples** of how it would work
- **Consider the impact** on existing functionality

### Code Contributions

#### Development Setup

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/smart-dictionary.git
   cd smart-dictionary
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the coding standards below
   - Add tests if applicable
   - Update documentation

4. **Test your changes**
   - Test in multiple browsers
   - Test on mobile devices
   - Ensure accessibility compliance

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: descriptive commit message"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Provide a clear description of changes
   - Reference any related issues
   - Include screenshots for UI changes

## 📋 Coding Standards

### JavaScript

- Use **ES6+** features
- Follow **camelCase** for variables and functions
- Use **PascalCase** for classes
- Add **JSDoc comments** for functions
- Use **const** and **let** instead of **var**
- Prefer **arrow functions** for callbacks

```javascript
// Good
const searchWord = async (word) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error('Search failed:', error);
  }
};

// Bad
var searchWord = function(word) {
  // ...
};
```

### CSS

- Use **CSS custom properties** for theming
- Follow **BEM methodology** for class names
- Use **flexbox** and **grid** for layouts
- Keep **specificity** low
- Use **semantic class names**

```css
/* Good */
.search-form {
  display: flex;
  gap: 1rem;
}

.search-form__input {
  flex: 1;
  padding: 1rem;
}

/* Bad */
.searchForm {
  /* ... */
}
```

### HTML

- Use **semantic HTML5** elements
- Include **ARIA labels** for accessibility
- Keep **indentation** consistent (2 spaces)
- Use **descriptive alt text** for images

```html
<!-- Good -->
<main class="main-content">
  <section class="search-section">
    <h2>Search for Words</h2>
    <form class="search-form" aria-label="Word search">
      <input type="text" aria-label="Enter word to search" />
    </form>
  </section>
</main>

<!-- Bad -->
<div class="main">
  <div class="search">
    <div>Search for Words</div>
    <div class="form">
      <input type="text" />
    </div>
  </div>
</div>
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] **Cross-browser testing** (Chrome, Firefox, Safari, Edge)
- [ ] **Mobile responsiveness** (iOS Safari, Chrome Mobile)
- [ ] **Keyboard navigation** (Tab, Enter, Escape)
- [ ] **Screen reader** compatibility
- [ ] **Performance** (loading times, animations)
- [ ] **Error handling** (network errors, invalid input)

### Automated Testing

We're working on adding automated tests. For now, please ensure:

- No console errors
- All features work as expected
- No breaking changes to existing functionality

## 📝 Documentation

When contributing, please:

- **Update README.md** if adding new features
- **Add JSDoc comments** for new functions
- **Update API documentation** if changing endpoints
- **Include usage examples** for new features

## 🚀 Pull Request Process

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Update** documentation
6. **Submit** the pull request

### PR Guidelines

- **Title**: Clear and descriptive
- **Description**: Explain what and why, not how
- **Screenshots**: For UI changes
- **Tests**: Mention what you tested
- **Breaking changes**: Clearly mark if any

## 🏷️ Issue Labels

We use the following labels:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested

## 📞 Getting Help

If you need help:

- **Check existing issues** and discussions
- **Ask questions** in GitHub Discussions
- **Join our community** (if applicable)
- **Read the documentation** in the `/docs` folder

## 🎉 Recognition

Contributors will be recognized in:

- **README.md** contributors section
- **Release notes** for significant contributions
- **GitHub contributors** page

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Smart Dictionary! 🎉 