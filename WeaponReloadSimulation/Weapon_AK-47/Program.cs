using System;

namespace Weapon_AK_47
{
    internal class Program
    {
        static void Main(string[] args)
        {
            const int ReloadingAndRemovingAmmo = 30;
            const int FullPackage = 90;

            // Make a program that tracks the ammo in the weapon AK-47

            int magazineAmmo = 30;
            int restAmmo = 90;

            // TODO: Do the following commands:
            // Add the rest of the commands.

            //  Shooting x30
            //  Ammo: 30 / 60
            //  Shooting x30
            //  Ammo: 30 / 30
            //  Reload
            //  Magazine state: Full
            //  Shooting x3
            //  Ammo: 27 / 30
            //  Reload
            //  Ammo: 57 / 0

            Console.WriteLine("Commands:");
            Console.WriteLine("Shoot - Remove 1 ammo from the magazine:");
            Console.WriteLine("Shooting x{ n - Times}");
            Console.WriteLine("-Remove { n}");
            Console.WriteLine("bullets from the magazine");
            Console.WriteLine("Reload - Reloads the magazine back to 30 and removes the taken ammo from the storage");
            Console.WriteLine("Playtime - Remove all ammo from the magazine");
            Console.WriteLine("Buy new AK- 47 - Refill all ammo");

            Console.WriteLine("Copy (if you want): Shooting x30");

            string command = Console.ReadLine();
            while (true)
            {
                string[] cmdArgs = command.Split(' ', StringSplitOptions.RemoveEmptyEntries);

                string action = cmdArgs[0];

                if (action.ToLower() == "shoot" && cmdArgs.Length == 1)
                {
                    if (magazineAmmo == 0)
                    {
                        Console.WriteLine("Reload is required!");
                    }
                    else
                    {
                        magazineAmmo -= 1;
                    }
                }
                else if (action.ToLower() == "shooting")
                {
                    string times = cmdArgs[1];

                    string shootTimes = string.Empty;

                    for (int i = 0; i < times.Length; i++)
                    {
                        if (char.IsDigit(times[i]))
                        {
                            shootTimes += times[i];
                        }
                    }

                    int shootTimesAsInt = int.Parse(shootTimes);
                    // Here we have (Shooting x) >>12<< times (the number 12).

                    if (magazineAmmo - shootTimesAsInt < 0)
                    {
                        Console.WriteLine($"Cannot shoot {shootTimesAsInt} times!");
                    }
                    else
                    {
                        magazineAmmo -= shootTimesAsInt;
                    }
                }
                else if (action.ToLower() == "reload")
                {
                    if (magazineAmmo == 30)
                    {
                        Console.WriteLine($"Magazine state: Full");

                        command = Console.ReadLine();
                        continue;
                    }

                    if (magazineAmmo < 30 && restAmmo == 0)
                    {
                        Console.WriteLine($"Not enough bullets to reload");

                        command = Console.ReadLine();
                        continue;
                    }
                    else if (restAmmo - ReloadingAndRemovingAmmo < 0)
                    {
                        magazineAmmo = ReloadingAndRemovingAmmo;
                        restAmmo = 0;
                    }
                    else
                    {
                        restAmmo -= ReloadingAndRemovingAmmo - magazineAmmo;
                        magazineAmmo = ReloadingAndRemovingAmmo;
                    }
                }
                else if (action.ToLower() == "playtime")
                {
                    magazineAmmo = 0;
                }
                else if (action.ToLower() == "buy" && cmdArgs[1].ToLower() == "new" && cmdArgs[2].ToLower() == "ak-47")
                {
                    magazineAmmo = ReloadingAndRemovingAmmo;
                    restAmmo = FullPackage;

                    Console.WriteLine("You have bought AK-47.");
                    command = Console.ReadLine();
                    continue;
                }
                else
                {
                    Console.WriteLine($"Invalid command!");
                    command = Console.ReadLine();
                    continue;
                }

                if (magazineAmmo == 0)
                {
                    // Here comes the auto reload:

                    // restAmo = 26

                    if (restAmmo - ReloadingAndRemovingAmmo <= 0)
                    {
                        magazineAmmo += restAmmo;
                        restAmmo = 0;
                    }
                    else
                    {
                        magazineAmmo += ReloadingAndRemovingAmmo;
                        restAmmo -= ReloadingAndRemovingAmmo;
                    }
                }

                if (restAmmo == 0 && magazineAmmo == 0)
                {
                    break;
                }

                Console.WriteLine($"Ammo: {magazineAmmo} / {restAmmo}");
                command = Console.ReadLine();
            }

            Console.WriteLine();
            Console.WriteLine($"Magazine State: Empty");
            Console.WriteLine($"Nice shooting!{Environment.NewLine}Kills: 20{Environment.NewLine}:D");
        }
    }
}
