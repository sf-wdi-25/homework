=begin
An Animal class, with the following:

Properties:
kind: A string that holds the type of animal
Instance Methods:
eat: Takes a parameter food to eat and prints out a message that the animal is eating food
sleep & wake: These two methods should NOT be passed any arguments. Instead, they will set
an instance variable @state to the string "asleep" or "awake" respectively.

A Person class, with the following characteristics:

Inherits from Animal
Automatically sets @type to "person"
Adds 3 new instance vars:
age
gender
name
Also, people aren't cannibals! Make sure your Person class 
overrides the existing eat method (in Animal) so that a Person cannot eat a "person"
Stretch Challenges

People can speak, and it's good to be polite. Add an instance method 
called greet that prints out a person's name, age, and gender in the 
following format: "Hi, I'm Teddy. I'm a person, and I'm 156 years old." 
(Hint: look up how to interpolate strings in Ruby)
Add a class variable that keeps track of all the people you create.
=end



class Animal
	@@count = 0
	attr_accessor :kind,  :state


	def initialize(kind, state)
		@kind = kind
		@state = state
		@@count += 1
	end

	def eat(food)
		p "#{@kind} eat #{food}"
	end

	def sleep
		@state = "sleep"
	end

	def wake 
		@state = "wake"
	end

	def self.count
		@@count 
	end 
end

class Person < Animal 
	attr_accessor :kind, :eat, :state, :age, :gender, :name

	def initialize(kind, eat, state, age, gender, name)
		@kind = kind
		@state = state
		@age = age
		@gender = gender
		@name = name
		@@count += 1
	end

	def eat(food)
		if food == "person" || food == "human"
			return "Don't eat people" 
		end	
		p "#{@kind} eats #{food}"
	end	
	
	def greet	
		"Hi, I'm #{@name}. I'm a #{@kind}, and I'm #{@age} years old."
	end
end

p Alex = Person.new("human", "cats", "sleep", 34, "manboy", "Alex")
p Alex.greet

p Animal.count

