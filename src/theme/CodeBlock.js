// import React from 'react';
// import CodeBlock from '@theme-original/CodeBlock';


// const CustomCodeBlock = ({ children, ...props }) => {
//   const handleCopy = () => {
//     const code = children.trim();
//     const lines = code.split('\n');
//     const filteredLines = lines.filter(line => line.startsWith('$ '));
//     const copyCode = filteredLines.join('\n');
//     navigator.clipboard.writeText(copyCode);
//   };

//   return React.createElement(
//     CodeBlock,
//     props,
//     children,
//     React.createElement('button', { onClick: handleCopy }, 'Copy')
//   );
// };

// export default CustomCodeBlock;
import React from 'react';
import OriginalCodeBlock from '@theme-original/CodeBlock';

const CustomCodeBlock = ({ children, ...props }) => {
  const handleCopy = () => {
    // Extract the code content from the children
    const code = React.Children.toArray(children)
      .map((child) => (typeof child === 'string' ? child : child.props.children))
      .join('')
      .trim();

    // Filter lines starting with '$ ' (if needed)
    const lines = code.split('\n');
    const filteredLines = lines.filter((line) => line.startsWith('$ '));
    const copyCode = filteredLines.join('\n');

    // Copy to clipboard
    navigator.clipboard.writeText(copyCode);
  };

  return (
    <div style={{ position: 'relative' }}>
      <OriginalCodeBlock {...props}>{children}</OriginalCodeBlock>
      <button
        onClick={handleCopy}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          padding: '5px 10px',
          background: '#0078d4',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Copy
      </button>
    </div>
  );
};

export default CustomCodeBlock;