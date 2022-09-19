namespace GameStore.Models.Games
{
    public class Fallin76 : VideoGame
    {
        private const string InitialName = "Fallin76";
        private const decimal InitialPrice = 60;
        private const string InitialType = "Shooter";

        public Fallin76()
            : base(InitialName, InitialPrice, InitialType)
        {
        }
    }
}
