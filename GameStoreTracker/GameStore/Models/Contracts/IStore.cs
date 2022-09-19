namespace GameStore.Models.Contracts
{
    using Games;

    public interface IStore
    {
        public string Name { get; }

        public bool IsOpen { get; }

        public string AddItem(VideoGame game);

        public string RemoveItem(string name);
    }
}
