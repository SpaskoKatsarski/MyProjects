namespace MyCustomCollection.IO
{
    using Contracts;

    public class ConsoleReader : IReader
    {
        public void ReadLine()
        {
            Console.ReadLine();
        }
    }
}
