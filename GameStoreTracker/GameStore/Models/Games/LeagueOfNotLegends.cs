namespace GameStore.Models.Games
{
    public class LeagueOfNotLegends : VideoGame
    {
        private const string InitialName = "LeagueOfNotLegends";
        private const decimal InitialPrice = 15;
        private const string InitialType = "MMO";

        public LeagueOfNotLegends() 
            : base(InitialName, InitialPrice, InitialType)
        {
        }
    }
}
