export const voteFormat = {
   percentageBar: function (vote: number): number {
      return parseFloat((vote * 10).toFixed(1));
   },
   voteNumber: function (vote: number): number {
      return parseFloat(vote.toFixed(1));
   },
};
