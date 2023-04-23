export function formatVoteToColor(vote: number): string {
   if (vote >= 7) {
      return `#00ff47`;
   } else if (vote >= 4 && vote <= 6.9) {
      return `#ffdc00`;
   } else {
      return `#ff1200`;
   }
}
