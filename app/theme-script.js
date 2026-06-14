export const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme') || 'github';
    document.documentElement.setAttribute('data-theme', theme);
  })()
`;
