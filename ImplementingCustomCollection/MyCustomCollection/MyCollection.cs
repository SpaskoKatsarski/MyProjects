namespace MyCustomCollection
{
    using IO;
    using IO.Contracts;

    using System.Collections;

    public class MyCollection<T> : IEnumerable<T>
    {
        private const int InitialCapacity = 4;

        private T[] elements;

        private readonly IWriter writer;
        private readonly IReader reader;

        public MyCollection()
        {
            elements = new T[InitialCapacity];

            this.reader = new ConsoleReader();
            this.writer = new ConsoleWriter();
        }

        public int Count { get; private set; }

        public void Add(T element)
        {
            if (this.Count == this.elements.Length)
            {
                this.elements = this.ResizeArray();
            }

            this.elements[this.Count++] = element;
        }

        public bool Remove(T element)
        {
            bool containsEl = false;

            for (int i = 0; i < this.Count; i++)
            {
                if (this.elements[i]!.Equals(element))
                {
                    containsEl = true;
                    this.RepairArrayAfterRemove(i);

                    break;
                }
            }

            if (!containsEl)
            {
                return false;
            }

            this.Count--;

            return true;
        }

        public void RemoveAt(int index)
        {
            if (!this.IsIndexValid(index))
            {
                throw new ArgumentOutOfRangeException("Cannot remove element at invalid index!");
            }

            this.Remove(this.elements[index]);
        }

        public void PrintElements()
        {
            this.writer.WriteLine("Elements:");

            for (int i = 0; i < this.Count; i++)
            {
                this.writer.WriteLine($"arr[{i}] = {this.elements[i]}");
            }
        }

        public T this[int index]
        {
            get
            {
                if (!this.IsIndexValid(index))
                {
                    throw new ArgumentOutOfRangeException("Cannot access value at invalid index!");
                }

                return this.elements[index];
            }
            set
            {
                if (value == null)
                {
                    throw new ArgumentException("Value cannot be null!");
                }

                this.elements[index] = value;
            }
        }

        private bool IsIndexValid(int index)
        {
            return index >= 0 && index < this.Count;
        }

        private T[] ResizeArray()
        {
            int newSize = this.Count * 2;
            T[] newArray = new T[newSize];

            for (int i = 0; i < this.Count; i++)
            {
                newArray[i] = this.elements[i];
            }

            return newArray;
        }

        private void RepairArrayAfterRemove(int indexToRemove)
        {
            T[] newArray = new T[this.elements.Length];

            bool hasPassed = false;

            for (int i = 0; i < this.Count; i++)
            {
                // This will happen when we want to remove at index '2' in an integer array:
                // 9 25 123 51
                // index to remove = 2
                // i = 0, arr[0] = 9
                // i = 1, arr[1] = 25
                // i = 2, continue
                // i = 3, must happen: arr[2] = 51
                // Break of the cycle and the method should change the current array to new int[] { 9, 25, 51 }

                if (i == indexToRemove)
                {
                    hasPassed = true;

                    continue;
                }

                if (hasPassed)
                {
                    newArray[i - 1] = this.elements[i];

                    hasPassed = false;
                }
                else
                {
                    newArray[i] = this.elements[i];
                }
            }

            this.elements = newArray;
        }

        public IEnumerator<T> GetEnumerator()
        {
            for (int i = 0; i < this.elements.Length; i++)
            {
                yield return this.elements[i];
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return this.GetEnumerator();
        }
    }
}
