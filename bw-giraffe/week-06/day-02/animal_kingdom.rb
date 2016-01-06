class Animal
	attr_accessor :kind

	def initialize(kind)
		@kind = kind
		@state = "awake"
	end

	def eat(food)
		p "This #{@kind} is eating #{food}"
	end

	def sleep 
		@state = "asleep"
		p "Shhhh, the precious #{@kind} is #{@state}"
	end

	def awake 
		@state = "awake"
		p "The #{kind} is #{@state}!"
	end
end

class Person < Animal 
	attr_accessor :kind, :age, :gender, :name
	@@count = 0

	def initialize(kind, age, gender, name)
		@kind = kind
		@type = "person"
		@age = age
		@gender = gender
		@name = name
		@@count = @@count + 1
	end

	def eat(food)
		if(food == "people" || food == "person")
			return "You can't eat people!"
		end
			p "#{@name} is eating #{food}"
	end

	def greet
		p "Hi, I'm #{@name}. I'm a #{@type} and I'm #{@age} years old."
	end	

	def self.count
		@@count
	end
end
