namespace GameStore.Models.Games
{
    public class Underwatch : VideoGame
    {
        private const string InitialName = "Underwatch";
        private const decimal InitialPrice = 30;
        private const string InitialType = "Shooter";

        public Underwatch() 
            : base(InitialName, InitialPrice, InitialType)
        {
        }
    }
}
