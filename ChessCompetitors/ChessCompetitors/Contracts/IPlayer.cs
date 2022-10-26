using ChessCompetitors.Models;

namespace ChessCompetitors.Contracts
{
    public interface IPlayer
    {
        string Name { get; }

        int Wins { get; }

        void ChallengePlayer(Player playerName);
    }
}
