namespace GameStore.Models.Games
{
    public class SuperLario : VideoGame
    {
        private const string InitialName = "SuperLario";
        private const decimal InitialPrice = 35;
        private const string InitialType = "Adventure";

        public SuperLario() 
            : base(InitialName, InitialPrice, InitialType)
        {
        }
    }
}
