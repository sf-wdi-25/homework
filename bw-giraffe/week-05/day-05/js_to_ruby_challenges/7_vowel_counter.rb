def vowel_count(word)
	return word.scan(/[aeouiAEIOU]/).count
end

# puts vowel_count("supercalifragilisticexpialidocious")