namespace ChessCompetitors.Models
{
    using ChessCompetitors.Contracts;

    public class Player : IPlayer
    {
        private string name;
        private readonly Random randomWinnerPicker;

        private Player()
        {
            this.randomWinnerPicker = new Random();
        }

        public Player(string name)
            : this()
        {
            this.Name = name;
        }

        public string Name
        {
            get => this.name;
            private set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentNullException("Name cannot be null or empty!");
                }

                this.name = value;
            }
        }

        public int Wins { get; private set; } = 0;

        public void ChallengePlayer(Player player)
        {
            int winnerNum = this.randomWinnerPicker.Next(1, 3);

            if (winnerNum == 1)
            {
                this.Wins++;

                Console.WriteLine($"Player {this.Name} defeated {player.Name}!");
            }
            else
            {
                player.Wins++;

                Console.WriteLine($"Player {player.Name} defeated {this.Name}!");
            }
        }

        public override string ToString()
        {
            return $"{this.Name} has {this.Wins} wins.";
        }
    }
}
