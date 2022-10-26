using ChessCompetitors.Contracts;
using ChessCompetitors.Models;

var competitors = new List<IPlayer>();

var player1 = new Player("Vasko");
var player2 = new Player("Dimitrichko");
var player3 = new Player("Mary");
var player4 = new Player("Ivan");

competitors.Add(player1);
competitors.Add(player2);
competitors.Add(player3);
competitors.Add(player4);

Console.WriteLine("Commands:");
Console.WriteLine("fight");
Console.WriteLine("stats");
Console.WriteLine("remove");
Console.WriteLine("add");
Console.WriteLine("end");

string command;

while ((command = Console.ReadLine()!).ToLower() != "end")
{
	if (command == "fight")
	{
		foreach (Player player in competitors)
		{
			foreach (Player playerToFight in competitors)
			{
				if (player.Name == playerToFight.Name)
				{
					continue;
				}

				player.ChallengePlayer(playerToFight);
			}
		}
	}
	else if (command == "stats")
	{
		foreach (var player in competitors)
		{
			Console.WriteLine(player);
		}
	}
	else if (command.Contains("remove"))
	{
		string playerNameToRemove = command
			.Split(" ", StringSplitOptions.RemoveEmptyEntries)[1];

		Player playerToRemove = (Player)competitors.First(c => c.Name == playerNameToRemove);

		competitors.Remove(playerToRemove);

		Console.WriteLine($"Player with the name {playerNameToRemove} was disqualified from the competition!");
	}
	else if (command.Contains("add"))
	{
		string playerNameToAdd = command
			.Split(" ", StringSplitOptions.RemoveEmptyEntries)[1];

		competitors.Add(new Player(playerNameToAdd));

		Console.WriteLine($"Player with the name {playerNameToAdd} was added to the competition!");
	}
	else
	{
		Console.WriteLine($"Command with the name '{command}' is not represented in the list above!");
	}
}

var winner = competitors.OrderByDescending(c => c.Wins).First();
Console.WriteLine($"Player with most wins is {winner.Name} ({winner.Wins} wins)!");