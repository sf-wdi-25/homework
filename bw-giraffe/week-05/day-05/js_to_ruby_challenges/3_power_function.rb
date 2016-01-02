def to_the_Nth_pow(num, pow)
	storage = 1
	pow.times do 
		storage *= num
	end
return storage
end

# puts to_the_Nth_pow(4, 5)

# puts to_the_Nth_pow(2, 1)

# puts to_the_Nth_pow(22, 3)

# puts to_the_Nth_pow(6, 4)