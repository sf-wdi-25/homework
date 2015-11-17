cd dev
git clone https://github.com/jroers/command-line-mystery.git
cd command-line-mystery
touch solution.md
cat instructions
cd mystery
grep -r CLUE mystery/
grep -r -B2 -A2 AAA mystery/
grep -r Bostock mystery/
grep -r Annabel *
grep -r "Annabel Church" *
grep -r "Annabel Fuglsang" *
cd streets
head -n 179 Buckingham_Place | tail -n1
head -n 176 Haley_Street | tail -n1
cd ..
cd interviews
cat interview-871877
cat interview-699607
grep -A4 "L337" vehicles
grep "Jeremy Bowers" people
grep "Joe Germuska" people
cd streets
head -n 275 Plainfield_Street | tail -n1
head -n 284 Dunstable_Road | tail -n1
cd ..
cd interviews
cat interview-29741223
cd ..
grep -r "Jeremy Bowers" *
