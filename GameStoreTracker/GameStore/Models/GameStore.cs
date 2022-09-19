namespace GameStore.Models
{
    using Contracts;
    using Games;
    using System.Text;

    public class GameStore : IStore
    {
        private string name;
        private ICollection<VideoGame> gameLibrary;

        public GameStore(string name)
            : this()
        {
            this.Name = name;
        }

        private GameStore()
        {
            this.gameLibrary = new List<VideoGame>();
        }

        public string Name
        {
            get => this.name;
            private set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentNullException("Store name cannot be null or white space!");
                }

                this.name = value;
            }
        }

        public bool IsOpen => this.CheckIfOpen();

        public string AddItem(VideoGame game)
        {
            if (!this.IsOpen)
            {
                return $"Store {this.Name} is closed!";
            }

            this.gameLibrary.Add(game);

            return $"Successfuly added {game.Name} to the {this.Name} store!";
        }

        public string RemoveItem(string name)
        {
            if (!this.IsOpen)
            {
                return $"Store {this.Name} is closed!";
            }

            if (!this.gameLibrary.Any(g => g.Name == name))
            {
                return $"No game found with the name: {name}!";
            }

            var gameToRemove = this.gameLibrary.First(g => g.Name == name);
            this.gameLibrary.Remove(gameToRemove);

            return $"Successfuly removed {name} from {this.Name} store!";
        }

        public override string ToString()
        {
            var result = new StringBuilder();

            result.AppendLine($">>>{this.Name}<<<");

            if (this.gameLibrary.Count == 0)
            {
                result.AppendLine("No games presented in this store.");
            }
            else
            {
                foreach (var game in this.gameLibrary)
                {
                    result.AppendLine(game.ToString());
                }
            }

            return result.ToString().TrimEnd();
        }

        private bool CheckIfOpen()
        {
            TimeSpan start = new TimeSpan(8, 0, 0);
            TimeSpan end = new TimeSpan(18, 0, 0);
            TimeSpan now = DateTime.Now.TimeOfDay;

            if ((now >= start) && (now <= end))
            {
                return true;
            }

            return false;
        }
    }
}
