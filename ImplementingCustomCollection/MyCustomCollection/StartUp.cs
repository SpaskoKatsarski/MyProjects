using MyCustomCollection;

var myCollection = new MyCollection<int>();

myCollection.Add(1);
myCollection.Add(123);
myCollection.Add(3);

foreach (var item in myCollection)
{
    Console.WriteLine(item);
}

myCollection.Remove(123);

foreach (var item in myCollection)
{
    Console.WriteLine(item);
}

myCollection.PrintElements();
myCollection.Add(234);
myCollection.PrintElements();
Console.WriteLine(myCollection.Remove(213132));

var myStringCollection = new MyCollection<string>();

myStringCollection.Add("Hello");
myStringCollection.Add("Toy");
myStringCollection.Add("Truck");
myStringCollection.Add("Programmer");

myStringCollection.PrintElements();
try
{
    myStringCollection.RemoveAt(123);
}
catch (ArgumentOutOfRangeException ae)
{
    Console.WriteLine(ae.Message);
}

Console.WriteLine(myStringCollection[2]);
