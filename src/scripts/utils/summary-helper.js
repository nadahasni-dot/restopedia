const SummaryHelper = {
  createSummary(text, length) {
    if (text.length > length) {
      let newText = text.slice(0, length);
      newText += ' ...';
      return newText;
    }
    return text;
  },
};

export default SummaryHelper;
