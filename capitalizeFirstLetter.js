/** This function allows you to make the first letter of a word capitalized.
 * Like the title() function in Python
 */
function capitalizeFirstLetter(sentence) {
  let arraySentence = sentence.split(" ");

  for (let i = 0; i < arraySentence.length; i++) {
    const word = arraySentence[i];
    const firstLetter = word.charAt(0);
    arraySentence[i] = word.replace(firstLetter, firstLetter.toUpperCase());
  }
  // Here, replace allows to replace wide white spaces with simple white spaces
  const newSentence = arraySentence.join(" ").replace(/(\s){2,}/g, " ");
  return newSentence;
}
