def get_whitespace(rows, current_i)
	whitespace  = rows - current_i
	return whitespace
end

def ascii_pyramid(rows)

for i in 0..rows
	ast = ""
	padding = ""
	line = ""
	whitespace = get_whitespace(rows, i)
	#generate the whitespace
	for pad in 0..whitespace
		padding<<" "
	end	
	#generate the asteriks
	for j in 0..i
		ast<<"* "
	end
	#concat padding then ast into line
	line<<padding<<ast<<"\n"
	puts line 
end
end

#ascii_pyramid(50)