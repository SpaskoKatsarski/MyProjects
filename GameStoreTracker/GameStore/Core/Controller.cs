namespace GameStore.Core
{
    using Contracts;
    using Models;
    using GameStore.Models.Contracts;
    using GameStore.Models.Games;
    using System.Text;
    using System.Reflection;

    public class Controller : IController
    {
        private ICollection<VideoGame> games;
        private ICollection<Customer> customers;
        private ICollection<IStore> stores;

        public Controller()
        {
            this.games = new List<VideoGame>();
            this.customers = new List<Customer>();
            this.stores = new List<IStore>();
        }

        public string AddGame(string name)
        {
            //if (name != typeof(Fallin76).Name &&
            //    name != typeof(LeagueOfNotLegends).Name &&
            //    name != typeof(SuperLario).Name &&
            //    name != typeof(Underwatch).Name )
            //{
            //    throw new ArgumentException($"Game with the name {name} still does not exist!");
            //}

            //VideoGame game;

            //if (name == typeof(Fallin76).Name)
            //{
            //    game = new Fallin76();
            //}
            //else if (name == typeof(LeagueOfNotLegends).Name)
            //{
            //    game = new LeagueOfNotLegends();
            //}
            //else if (name == typeof(SuperLario).Name)
            //{
            //    game = new SuperLario();
            //}
            //else if (name == typeof(Underwatch).Name)
            //{
            //    game = new Underwatch();
            //}
            //else
            //{
            //    throw new ArgumentException("Something went wrong!");
            //}

            //That's how I made adding a new game class to not crash the program -> open to extension, closed for modification
            //Remove all of this and change it with the one below (Reflection)

            const string gamesAssemblyNamespace = "GameStore.Models.Games";

            Type[] gameTypes = Assembly
                .GetExecutingAssembly()
                .GetTypes()
                .Where(t => t.Namespace == gamesAssemblyNamespace
                        && !t.IsAbstract
                        && t.IsClass)
                .ToArray();

            //Type[] testTypes = Assembly
            //    .GetExecutingAssembly()
            //    .GetTypes()
            //    .Where(t => t is IStore)
            //    .ToArray();

            if (!gameTypes.Any(gt => gt.Name == name))
            {
                throw new ArgumentException($"Game with the name {name} is not created yet!");
            }

            Type gameType = gameTypes.First(gt => gt.Name == name);

            VideoGame game = (VideoGame)Activator.CreateInstance(gameType)!;
            this.games.Add(game);

            return $"Successfuly added {game.Name}!";
        }

        public string AddCustomer(string name, decimal balance)
        {
            if (this.customers.Any(c => c.Name == name))
            {
                throw new InvalidOperationException($"Customer with the name {name} is already registered!");
            }

           this.customers.Add(new Customer(name, balance));

            return $"Successfuly added customer with the name: {name}";
        }

        public string AddStore(string name)
        {
            if (this.stores.Any(s => s.Name == name))
            {
                throw new InvalidOperationException($"Store with the name {name} already exists!");
            }

            var store = new GameStore(name);

            this.stores.Add(store);

            return $"Successfuly added {store.Name}";
        }

        public string AddGameToCart(string gameName, string customerName, string storeName)
        {
            var gameToAdd = this.games.FirstOrDefault(g => g.Name == gameName);

            if (gameToAdd == null)
            {
                throw new ArgumentException($"Game with the name {gameName} does not exist!");
            }

            var customer = this.customers.FirstOrDefault(c => c.Name == customerName);

            if (customer == null)
            {
                throw new ArgumentException($"Customer with the name {customerName} does not exist!");
            }

            var store = this.stores.FirstOrDefault(s => s.Name == storeName);

            if (store == null)
            {
                throw new ArgumentException($"Store with the name {store} does not exist!");
            }

            store.RemoveItem(gameName);

            return customer.AddToCart(gameToAdd);
        }

        public string DepositToAccount(string accountName, decimal amount)
        {
            var customer = this.customers.FirstOrDefault(c => c.Name == accountName);

            if (customer == null)
            {
                throw new ArgumentException($"Customer with the name {accountName} does not exist!");
            }

            return customer.Deposit(amount);
        }

        public string PurchaseProducts(string customerName)
        {
            var customer = this.customers.FirstOrDefault(c => c.Name == customerName);

            if (customer == null)
            {
                throw new ArgumentException($"Customer with the name {customerName} does not exist!");
            }

            return customer.CheckOut();
        }

        public string AddGameToStore(string gameName, string storeName)
        {
            VideoGame game = this.games.FirstOrDefault(g => g.Name == gameName);

            if (game == null)
            {
                throw new ArgumentException($"Game with the name {gameName} does not exist!");
            }

            IStore store = this.stores.FirstOrDefault(s => s.Name == storeName);

            if (store == null)
            {
                throw new ArgumentException($"Store with the name {store} does not exist!");
            }

            return store.AddItem(game);
        }

        public string RemoveGameFromStore(string gameName, string storeName)
        {
            if (!this.games.Any(g => g.Name == gameName))
            {
                throw new ArgumentException($"Game with the name {gameName} does not exist!");
            }

            IStore store = this.stores.FirstOrDefault(s => s.Name == storeName);

            if (store == null)
            {
                throw new ArgumentException($"Store with the name {store} does not exist!");
            }

            return store.RemoveItem(gameName);
        }

        public string AllStoresInfo()
        {
            var result = new StringBuilder();

            foreach (var store in this.stores)
            {
                result.Append(store.ToString());
                result.AppendLine();
            }

            return result.ToString().Trim();
        }
    }
}
