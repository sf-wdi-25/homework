def ascii_triangle(rows) 
	puts "expecting rows to be an integer #{rows}"
	for i in 0..rows-1
		ast = ""
		for j in 0..i
			ast<<"*"
		end
		ast<<"\n"
		puts ast
	end
end

#ascii_triangle(5)