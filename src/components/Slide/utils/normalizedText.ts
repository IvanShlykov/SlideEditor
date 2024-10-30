export function normalizePasteText(text: string): string[] {
  const pastedText = text.trim();
  const lines = pastedText.split(/(\r\n|\n|\r)/);
  const filteredLines = lines.map((line) => line.trim()).filter((line) => line !== '');
  return filteredLines;
}
