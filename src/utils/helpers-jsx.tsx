export const renderGoldText = (header: string) => {
  const regex = /<gold>(.*?)<\/gold>/g;
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(header)) !== null) {
    // Add text before <gold>
    if (match.index > lastIndex) {
      parts.push(header.slice(lastIndex, match.index));
    }
    // Add gold text
    parts.push(
      <span key={match.index} className="text-sand">
        {match[1]}
      </span>
    );
    lastIndex = regex.lastIndex;
  }
  // Add remaining text after last </gold>
  if (lastIndex < header.length) {
    parts.push(header.slice(lastIndex));
  }
  return parts;
};
