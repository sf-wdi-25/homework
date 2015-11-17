started searching for "Annabel" in people
grep "Annabel" people
recorded all the female Annabels, their streets, and lines
used head -n 40 Hunt_Place (line and respective street for each)
was able to use a shortcut
head -n 179 Buckingham_Place | tail -n 1
grabbed the interview numbers 669607 and 47246024
cd interviews
head -n 20 interview-699607
head -n 20 interview-47246024
Got the license plate
grep "L337" vehicles
grep -A 5 "L337" vehicles
recorded the suspects
They are Jeremy Bowers and Joe Gremenska
Looked at their memberships
cd memberships
grep -r "Jeremy Bowers" *
grep -r "Joe Germuska" *
discovered Jeremy had memberships to AAA, DeltaSky, Museum of Bash, and the library
Jeremy is the culprit

