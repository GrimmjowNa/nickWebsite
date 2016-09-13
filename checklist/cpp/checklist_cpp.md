# C++ Development Knowledge Checklist

## Programming
 * Basic Facilities
	* Types and Declarations 
    	* Primitive Built-in Types
    			* Arithmetic Types
    			* Type Conversions
    			* Literals
    	* Variables
			* Variable Definitions
			* Variable Declarations and Definitions
			* Identifiers
			* Scope of a Name
		* const Qualifier
			* References to const
			* Pointers and const
			* Top-Level const
			* constexpr and Constant Expressions
	* Pointers, Arrays, and References 
		* Pointers
    	* Arrays
    		* Defining and Initializing Built-in Arrays
    		* Accessing the Elements of an Array
    		* Pointers and Arrays
    		* C-Style Character Strings
    		* Interfacing to Older Code			
		* References
	* Structures, Unions, and Enumerations 
	* Statements 
    	* Simple Statements
    	* Statement Scope
    	* Conditional Statements
    			* The if Statement
    			* The switch Statement
    	* Iterative Statements
    			* The while Statement
    			* Traditional for Statement
    			* Range for Statement
    			* The do while Statement
    	* Jump Statements
    			* The break Statement
    			* The continue Statement
    			* The goto Statement
    	* try Blocks and Exception Handling
    			* A throw Expression
    			* The try Block
    			* Standard Exceptions
	* Expressions
		* Fundamentals
			* Basic Concepts
			* Precedence and Associativity
			* Order of Evaluation
    	* Arithmetic Operators
    	* Logical and Relational Operators
    	* Assignment Operators
    	* Increment and Decrement Operators
    	* The Member Access Operators
    	* The Conditional Operator
    	* The Bitwise Operators
    	* The sizeof Operator
    	* Comma Operator
    	* Type Conversions
    		* The Arithmetic Conversions
    		* Other Implicit Conversions
    		* Explicit Conversions
    	* Operator Precedence Table
	* Select Operations 
	* Functions
    	* Function Basics
    		* Local Objects
    		* Function Declarations
    		* Separate Compilation
    	* Argument Passing
    		* Passing Arguments by Value
    		* Passing Arguments by Reference
    		* const Parameters and Arguments
    		* Array Parameters
    		* main: Handling Command-Line Options
    		* Functions with Varying Parameters
    	* Return Types and the return Statement
    		* Functions with No Return Value
    		* Functions That Return a Value
    		* Returning a Pointer to an Array
    	* Overloaded Functions
    		* Overloading and Scope
    	* Features for Specialized Uses
    		* Default Arguments
    		* Inline and constexpr Functions
    		* Aids for Debugging
    	* Function Matching
    		* Argument Type Conversions
    	* Pointers to Functions
	* Exception Handling
		* Throwing an Exception
		* Catching an Exception
		* Function try Blocks and Constructors
		* The noexcept Exception Specification
		* Exception Class Hierarchies
	* Namespaces 
		* Namespace Definitions
		* Using Namespace Members
		* Classes, Namespaces, and Scope
		* Overloading and Namespaces
	* Source Files and Programs 
 * Abstraction Mechanisms
	* Classes
    	* Defining Abstract Data Types
			* Designing the Sales_data Class
			* Defining the Revised Sales_data Class
			* Defining Nonmember Class-Related Functions
			* Constructors
			* Copy, Assignment, and Destruction
    	* Access Control and Encapsulation
    			* Friends
    	* Additional Class Features
    			* Class Members Revisited
    			* Functions That Return *this
    			* Class Types
    			* Friendship Revisited
    	* Class Scope
    			* Name Lookup and Class Scope
    	* Constructors Revisited
    			* Constructor Initializer List
    			* Delegating Constructors
    			* The Role of the Default Constructor
    			* Implicit Class-Type Conversions
    			* Aggregate Classes
    			* Literal Classes
    	* static Class Members
	* Copy Control 
    	* Copy, Assign, and Destroy
    		* The Copy Constructor
    		* The Copy-Assignment Operator
    		* The Destructor
    		* The Rule of Three/Five
    		* Using = default
    		* Preventing Copies
    	* Copy Control and Resource Management
    		* Classes That Act Like Values
    		* Defining Classes That Act Like Pointers
    	* Swap
    	* A Copy-Control Example
    	* Classes That Manage Dynamic Memory
    	* Moving Objects
    		* Rvalue References
    		* Move Constructor and Move Assignment
    		* Rvalue References and Member Functions
    * Overloaded Operations and Conversions
    	* Basic Concepts
    	* Input and Output Operators
    		* Overloading the Output Operator <<
    		* Overloading the Input Operator >>
    	* Arithmetic and Relational Operators
    		* Equality Operators
    		* Relational Operators
    	* Assignment Operators
    	* Subscript Operator
    	* Increment and Decrement Operators
    	* Member Access Operators
    	* Function-Call Operator
    		* Lambdas Are Function Objects
    		* Library-Defined Function Objects
    		* Callable Objects and function
    	* Overloading, Conversions, and Operators
    		* Conversion Operators
    		* Avoiding Ambiguous Conversions
    		* Function Matching and Overloaded Operators
    * Object-Oriented Programming
    	* OOP: An Overview
    	* Defining Base and Derived Classes
    		* Defining a Base Class
    		* Defining a Derived Class
    		* Conversions and Inheritance
    	* Virtual Functions
    	* Abstract Base Classes
    	* Access Control and Inheritance
    	* Class Scope under Inheritance
    	* Constructors and Copy Control
    		* Virtual Destructors
    		* Synthesized Copy Control and Inheritance
    		* Derived-Class Copy-Control Members
    		* Inherited Constructors
    	* Containers and Inheritance
    		* Writing a Basket Class
    	* Text Queries Revisited
    		* An Object-Oriented Solution
    		* The Query_base and Query Classes
    		* The Derived Classes
    		* The eval Functions
    	* Multiple and Virtual Inheritance
    		* Multiple Inheritance
    		* Conversions and Multiple Base Classes
    		* Class Scope under Multiple Inheritance
    		* Virtual Inheritance
    		* Constructors and Virtual Inheritance
    * Templates and Generic Programming
    	* Defining a Template
    		* Function Templates
    		* Class Templates
    		* Template Parameters
    		* Member Templates
    		* Controlling Instantiations
    		* Efficiency and Flexibility
    	* Template Argument Deduction
    		* Conversions and Template Type Parameters
    		* Function-Template Explicit Arguments
    		* Trailing Return Types and Type Transformation
    		* Function Pointers and Argument Deduction
    		* Template Argument Deduction and References
    		* Understanding std::move
    		* Forwarding
    	* Overloading and Templates
    	* Variadic Templates
    		* Writing a Variadic Function Template
    		* Pack Expansion
    		* Forwarding Parameter Packs
    	* Template Specializations
    * Specialized Tools and Techniques
    	* Controlling Memory Allocation
    		* Overloading new and delete
    		* Placement new Expressions
    	* Run-Time Type Identification
    		* The dynamic_cast Operator
    		* The typeid Operator
    		* Using RTTI
    		* The type_info Class
    	* Enumerations
    	* Pointer to Class Member
    		* Pointers to Data Members
    		* Pointers to Member Functions
    		* Using Member Functions as Callable Objects
    	* Nested Classes
    	* union: A Space-Saving Class
    	* Local Classes
    	* Inherently Nonportable Features
    		* Bit-fields
    		* volatile Qualifier
    		* Linkage Directives: extern "C"
 * The Standard Library
	* STL Containers 
        * Sequential Containers
        	* Overview of the Sequential Containers
        	* Container Library Overview
        		* Iterators
        		* Container Type Members
        		* begin and end Members
        		* Defining and Initializing a Container
        		* Assignment and swap
        		* Container Size Operations
        		* Relational Operators
        	* Sequential Container Operations
        		* Adding Elements to a Sequential Container
        		* Accessing Elements
        		* Erasing Elements
        		* Specialized forward_list Operations
        		* Resizing a Container
        		* Container Operations May Invalidate Iterators
        	* How a vector Grows
        	* Additional string Operations
        		* Other Ways to Construct strings
        		* Other Ways to Change a string
        		* string Search Operations
        		* The compare Functions
        		* Numeric Conversions
        	* Container Adaptors
        * Associative Containers
        	* Using an Associative Container
        	* Overview of the Associative Containers
        		* Defining an Associative Container
        		* Requirements on Key Type
        		* The pair Type
        	* Operations on Associative Containers
        		* Associative Container Iterators
        		* Adding Elements
        		* Erasing Elements
        		* Subscripting a map
        		* Accessing Elements
        		* A Word Transformation Map
        	* The Unordered Containers
	* STL Algorithms 
    	* Generic Algorithms
        	* Overview
        	* A First Look at the Algorithms
        		* Read-Only Algorithms
        		* Algorithms That Write Container Elements
        		* Algorithms That Reorder Container Elements
        	* Customizing Operations
        		* Passing a Function to an Algorithm
        		* Lambda Expressions
        		* Lambda Captures and Returns
        		* Binding Arguments
        	* Revisiting Iterators
        		* Insert Iterators
        		* iostream Iterators
        		* Reverse Iterators
        	* Structure of Generic Algorithms
        		* The Five Iterator Categories
        		* Algorithm Parameter Patterns
        		* Algorithm Naming Conventions
        	* Container-Specific Algorithms
	* STL Iterators 
	* Memory and Resources
    	* Dynamic Memory
        	* Dynamic Memory and Smart Pointers
        		* The shared_ptr Class
        		* Managing Memory Directly
        		* Using shared_ptrs with new
        		* Smart Pointers and Exceptions
        		* unique_ptr
        		* weak_ptr
        	* Dynamic Arrays
        		* new and Arrays
        		* The allocator Class
        	* Using the Library: A Text-Query Program
        		* Design of the Query Program
        		* Defining the Query Program Classes
    * Specialized Tools and Techniques
    	* Controlling Memory Allocation
    		* Overloading new and delete
    		* Placement new Expressions
    	* Run-Time Type Identification
    		* The dynamic_cast Operator
    		* The typeid Operator
    		* Using RTTI
    		* The type_info Class
    	* Enumerations
    	* Pointer to Class Member
    		* Pointers to Data Members
    		* Pointers to Member Functions
    		* Using Member Functions as Callable Objects
    	* Nested Classes
    	* union: A Space-Saving Class
    	* Local Classes
    	* Inherently Nonportable Features
    		* Bit-fields
    		* volatile Qualifier
    		* Linkage Directives: extern "C"
    * The IO Library
    	* The IO Classes
    		* No Copy or Assign for IO Objects
    		* Condition States
    		* Managing the Output Buffer
    	* File Input and Output
    		* Using File Stream Objects
    		* File Modes
    	* string Streams
    		* Using an istringstream
    		* Using ostringstreams
    * Specialized Library Facilities
    	* The tuple Type
    		* Defining and Initializing tuples
    		* Using a tuple to Return Multiple Values
    	* The bitset Type
    		* Defining and Initializing bitsets
    		* Operations on bitsets
    	* Regular Expressions
    		* Using the Regular Expression Library
    		* The Match and Regex Iterator Types
    		* Using Subexpressions
    		* Using regex_replace
    	* Random Numbers
    		* Random-Number Engines and Distribution
    		* Other Kinds of Distributions
    	* The IO Library Revisited
    		* Formatted Input and Output
    		* Unformatted Input/Output Operations
    		* Random Access to a Stream
 * New Features in C++11
	* long long Type
	* List Initialization
	* nullptr Literal
	* constexpr Variables
	* Type Alias Declarations
	* The auto Type Specifier
	* The decltype Type Specifier
	* In-Class Initializers
	* Using auto or decltype for Type Abbreviation
	* Range for Statement
	* Defining a vector of vectors
		* List Initialization for vectors
		* Container cbegin and cend Functions
		* Library begin and end Functions
	* Using auto or decltype to Simplify Declarations
	* Rounding Rules for Division
	* Assignment from a Braced List of Values
	* sizeof Applied to a Class Member
		* Range for Statement
		* Library initializer_list Class
		* List Initializing a Return Value
		* Declaring a Trailing Return Type
		* Using decltype to Simplify Return Type Declarations
		* constexpr Functions
		* Using = default to Generate a Default Constructor
		* In-class Initializers for Members of Class Type
		* Delegating Constructors
		* constexpr Constructors
		* Using strings for File Names
	* The array and forward_list Containers
		* Container cbegin and cend Functions
		* List Initialization for Containers
		* Container Nonmember swap Functions
		* Return Type for Container insert Members
		* Container emplace Members
	* shrink_to_fit
		* Numeric Conversion Functions for strings
		* Lambda Expressions
		* Trailing Return Type in Lambda Expressions
		* The Library bind Function
		* List Initialization of an Associative Container
		* List Initializing pair Return Type
		* List Initialization of a pair
	* The Unordered Containers
	* Smart Pointers
		* The shared_ptr Class
		* List Initialization of Dynamically Allocated Objects
		* auto and Dynamic Allocation
		* The unique_ptr Class
		* The weak_ptr Class
		* Range for Doesn’t Apply to Dynamically Allocated Arrays .
		* List Initialization of Dynamically Allocated Arrays
		* auto Can’t Be Used to Allocate an Array
		* allocator::construct Can Use any Constructor
		* Using = default for Copy-Control Members
		* Using = delete to Prevent Copying Class Objects
	* Moving Instead of Copying Class Objects
		* Rvalue References
		* The Library move Function
		* Move Constructor and Move Assignment
		* Move Constructors Usually Should Be noexcept
		* Move Iterators
		* Reference Qualified Member Functions
		* The function Class Template
		* explicit Conversion Operators
		* override Specifier for Virtual Functions
		* Preventing Inheritance by Defining a Class as final
	* override and final Specifiers for Virtual Functions
		* Deleted Copy Control and Inheritance
		* Inherited Constructors
		* Declaring a Template Type Parameter as a Friend
		* Template Type Aliases
		* Default Template Arguments for Template Functions
		* Explicit Control of Instantiation
		* Template Functions and Trailing Return Types
		* Reference Collapsing Rules
		* static_cast from an Lvalue to an Rvalue
		* The Library forward Function
	* Variadic Templates
	* The sizeof... Operator
		* Variadic Templates and Forwarding
	* The Library Tuple Class Template
		* New bitset Operations
	* The Regular Expression Library
	* The Random Number Library
		* Floating-Point Format Control
		* The noexcept Exception Specifier
		* The noexcept Operator
		* Inline Namespaces
		* Inherited Constructors and Multiple Inheritance
	* Scoped enums
	* Specifying the Type Used to Hold an enum
	* Forward Declarations for enums
		* The Library mem_fn Class Template
	* Union Members of Class Types
	
## Dev tools
 * [GCC](https://gcc.gnu.org)
 * [Eclipse CDT](http://eclipse.org/)
 * [Automake](http://www.gnu.org/software/automake/)
 * [Autoconf](http://www.gnu.org/software/autoconf/autoconf.html)
 * [Libtool](http://www.gnu.org/software/libtool/)
 * [Make](http://www.gnu.org/software/make/)

## Libs & Frameworks
 * [boost](http://junit.org/)
 * [log4cpp](http://log4cpp.sourceforge.net/)
 * [RabbitMQ C client](https://github.com/alanxz/rabbitmq-c)
 * [SimpleAmpqClient](https://github.com/alanxz/SimpleAmqpClient)
 * [RapidJSON](http://rapidjson.org/)
