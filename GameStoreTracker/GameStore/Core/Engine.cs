namespace GameStore.Core
{
    using GameStore.Core.Contracts;

    public class Engine : IEngine
    {
        //TODO: Make reader and writer classes

        private IController controller;

        public Engine()
        {
            this.controller = new Controller();
        }

        public void Start()
        {
            string input;

            while ((input = Console.ReadLine()).ToLower() != "end")
            {
                try
                {
                    string[] cmdArgs = input.Split();

                    string aciton = cmdArgs[0];

                    if (aciton == "AddGame")
                    {
                        string type = cmdArgs[1];

                        Console.WriteLine(this.controller.AddGame(type));
                    }
                    else if (aciton == "AddStore")
                    {
                        string name = cmdArgs[1];

                        Console.WriteLine(this.controller.AddStore(name));
                    }
                    else if (aciton == "AddGameToStore")
                    {
                        string gameName = cmdArgs[1];
                        string storeName = cmdArgs[2];

                        Console.WriteLine(this.controller.AddGameToStore(gameName, storeName));
                    }
                    else if (aciton == "RemoveGameFromStore")
                    {
                        string gameName = cmdArgs[1];
                        string storeName = cmdArgs[2];

                        Console.WriteLine(this.controller.RemoveGameFromStore(gameName, storeName));
                    }
                    else if (aciton == "AllStoresInfo")
                    {
                        Console.WriteLine(this.controller.AllStoresInfo());
                    }
                    else if (aciton == "AddCustomer")
                    {
                        string name = cmdArgs[1];
                        decimal balance = decimal.Parse(cmdArgs[2]);

                        Console.WriteLine(this.controller.AddCustomer(name, balance));
                    }
                    else if (aciton == "AddGameToCart")
                    {
                        string gameName = cmdArgs[1];
                        string customerName = cmdArgs[2];
                        string storeName = cmdArgs[3];

                        Console.WriteLine(this.controller.AddGameToCart(gameName, customerName, storeName));
                    }
                    else if (aciton == "PurchaseProducts")
                    {
                        string customerName = cmdArgs[1];

                        Console.WriteLine(this.controller.PurchaseProducts(customerName));
                    }
                    else if (aciton == "DepositToAccount")
                    {
                        string account = cmdArgs[1];
                        decimal amount = decimal.Parse(cmdArgs[2]);

                        Console.WriteLine(this.controller.DepositToAccount(account, amount));
                    }
                    else
                    {
                        throw new Exception("Invalid command!");
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
        }
    }
}

