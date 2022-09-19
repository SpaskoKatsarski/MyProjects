using System.Text;

namespace GameStore.Models.Games
{
    public abstract class VideoGame
    {
        private string name;
        private decimal price;
        private string type;

        public VideoGame(string name, decimal price, string type)
        {
            this.Name = name;
            this.Price = price;
            this.Type = type;
        }

        public string Name
        {
            get => this.name; 
            private set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentNullException("Game name cannot be null or white space!");
                }

                this.name = value;
            }
        }

        public decimal Price
        {
            get => this.price;
            private set
            {
                if (value < 0)
                {
                    throw new ArgumentException("Game price cannot be less than 0!");
                }

                this.price = value;
            }
        }

        public string Type
        {
            get => this.type;
            private set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentNullException("Game type cannot be null or white space!");
                }

                this.type = value;
            }
        }

        public sealed override string ToString()
        {
            var result = new StringBuilder();

            result.AppendLine($"Name: {this.Name}, Type: {this.Type}, Price: ${this.Price}");

            return result.ToString().TrimEnd();
        }
    }
}
