using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GameStore.Core.Contracts
{
    public interface IController
    {
        string AddGame(string type);

        string AddCustomer(string name, decimal balance);

        string AddStore(string name);

        string AddGameToCart(string gameName, string customerName, string storeName);

        string DepositToAccount(string accountName, decimal amount);

        string PurchaseProducts(string customerName);

        string AddGameToStore(string gameName, string store);

        string RemoveGameFromStore(string gameName, string storeName);

        string AllStoresInfo();
    }
}
