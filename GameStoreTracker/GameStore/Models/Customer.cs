namespace GameStore.Models
{
    using Games;

    public class Customer
    {
        private string name;
        private decimal balance;
        private ICollection<VideoGame> cart;
        private ICollection<VideoGame> games;

        public Customer(string name, decimal balance)
            : this()
        {
            this.Name = name;
            this.Balance = balance;
        }

        private Customer()
        {
            this.cart = new List<VideoGame>();
            this.games = new List<VideoGame>();
        }

        public string Name
        {
            get => this.name;
            private set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentNullException("Customer name cannot be null or white space!");
                }

                this.name = value;
            }
        }

        public decimal Balance
        {
            get => this.balance;
            private set
            {
                if (value < 0)
                {
                    throw new ArgumentException("Customer balance cannot be negative!");
                }

                this.balance = value;
            }
        }

        public IReadOnlyCollection<VideoGame> Cart => this.cart.ToList().AsReadOnly();

        public string Deposit(decimal amount)
        {
            if (amount < 0)
            {
                throw new ArgumentException($"Deposit amount must be a positive number!");
            }

            this.Balance += amount;

            return $"Successfully added ${amount} to the account!";
        }

        public string AddToCart(VideoGame game)
        {
            this.cart.Add(game);

            return $"Successfuly added {game.Name} to the cart!";
        }

        public string RemoveFromCart(string name)
        {
            if (!this.cart.Any(g => g.Name == name))
            {
                return $"No game found with the name: {name}!";
            }

            var gameToRemove = this.cart.First(g => g.Name == name);
            this.cart.Remove(gameToRemove);

            return $"Successfuly removed {name} from the cart!";
        }

        public string CheckOut()
        {
            decimal totalAmount = 0;

            foreach (var game in this.cart)
            {
                totalAmount += game.Price;
            }

            if (this.Balance < totalAmount)
            {
                throw new InvalidOperationException($"User needs ${totalAmount - this.Balance} more to make the purchase!");
            }

            this.Balance -= totalAmount;

            foreach (var game in this.cart)
            {
                this.games.Add(game);
            }

            string message = $"User successfuly purchased {this.cart.Count} number of products!";
            this.cart.Clear();

            return message;
        }
    }
}
