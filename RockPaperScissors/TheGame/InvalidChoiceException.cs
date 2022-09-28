using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheGame
{
    internal class InvalidChoiceException : Exception
    {
        public InvalidChoiceException()
        {

        }

        public InvalidChoiceException(string message)
            : base(message)
        {
            
        }
    }
}
