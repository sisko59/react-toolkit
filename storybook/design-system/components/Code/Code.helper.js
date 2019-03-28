import hljs from 'highlightjs';

export const highlightCode = () => {
  const nodes = document.querySelectorAll('pre code');
  if (nodes.length > 0) {
    for (let i = 0; i < nodes.length; i += 1) {
      hljs.highlightBlock(nodes[i]);
    }
  }
};
