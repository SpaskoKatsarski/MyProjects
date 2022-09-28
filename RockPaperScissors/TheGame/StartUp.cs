using System;
using System.Collections.Generic;

namespace TheGame
{
    internal class StartUp
    {
        static void Main(string[] args)
        {
            List<string> botPicks = new List<string> { "r", "p", "s" };
            Random rnd = new Random();
            int userScore = 0;
            int botScore = 0;

            Console.Write($"Hey friend! Enter your name please: ");
            string username = Console.ReadLine();  
            Console.WriteLine();

            Console.WriteLine("Choose: Rock['r'], Paper['p'] or Scissors['s']");

            string userPick;

            while ((userPick = Console.ReadLine().ToLower()) != "stop")
            {
                try
                {
                    ValidateOption(userPick);

                    string botPick = botPicks[rnd.Next(0, botPicks.Count - 1)];

                    Console.WriteLine($"AI's pick: '{botPick}'");
                    Console.WriteLine();
                    ChooseWinner(userPick, botPick, ref userScore, ref botScore, username);
                }
                catch (InvalidChoiceException)
                {
                    InvalidChoiceException invalidChoiceException = new InvalidChoiceException("Please enter a valid pick: 'r', 'p' or 's'.");
                    Console.WriteLine(invalidChoiceException.Message);
                }
                finally
                {
                    Console.WriteLine("Choose: Rock['r'], Paper['p'] or Scissors['s'] or type 'Stop' to end the game.");
                }
            }

            Console.WriteLine("GG! :)");

            if (userScore > botScore)
            {
                Console.WriteLine($"{username} wins!");
            }
            else if (botScore > userScore)
            {
                Console.WriteLine("Bot wins.");
            }
            else if (userScore == botScore)
            {
                Console.WriteLine("No one wins.");
            }

            Console.WriteLine($"{username}: {userScore} points - Bot: {botScore} points");
        }

        static void ValidateOption(string option)
        {
            if (option != "r" && option != "p" && option != "s")
            {
                throw new InvalidChoiceException();
            }
        }

        static void ChooseWinner(string userPick, string botPick, ref int userScore, ref int botScore, string username)
        {
            if (userPick == "r")
            {
                if (botPick == "r")
                {
                    Console.WriteLine("Tie.");
                }
                else if (botPick == "p")
                {
                    Console.WriteLine("Bot wins.");
                    botScore++;
                }
                else if (botPick == "s")
                {
                    Console.WriteLine($"{username} wins!");
                    userScore++;
                }
            }
            else if (userPick == "p")
            {
                if (botPick == "r")
                {
                    Console.WriteLine($"{username} wins!");
                    userScore++;
                }
                else if (botPick == "p")
                {
                    Console.WriteLine("Tie.");
                }
                else if (botPick == "s")
                {
                    Console.WriteLine("Bot wins.");
                    botScore++;
                }
            }
            else if (userPick == "s")
            {
                if (botPick == "r")
                {
                    Console.WriteLine($"Bot wins.");
                    botScore++;
                }
                else if (botPick == "p")
                {
                    Console.WriteLine($"{username} wins!");
                    userScore++;
                }
                else if (botPick == "s")
                {
                    Console.WriteLine("Tie.");
                }
            }
        }
    }
}
