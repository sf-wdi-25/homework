cd mystery

grep CLUE crimescene
CLUE: Footage from an ATM security camera is blurry but shows that the perpetrator is a tall male, at least 6'.
CLUE: Found a wallet believed to belong to the killer: no ID, just loose change, and membership cards for AAA, Delta SkyMiles, the local library, and the Museum of Bash History. The cards are totally untraceable and have no name, for some reason.
CLUE: Questioned the barista at the local coffee shop. He said a woman left right before they heard the shots. The name on her latte was Annabel, she had blond spiky hair and a New Zealand accent.

grep Annabel people
Annabel Sun	F	26	Hart Place, line 40
Oluwasegun Annabel	M	37	Mattapan Street, line 173
Annabel Church	F	38	Buckingham Place, line 179
Annabel Fuglsang	M	40	Haley Street, line 176

cd memberships

grep "Annabel" AAA
Annabel Church

grep Annabel Delta_Skymiles

grep "Annabel" Terminal_City_Library 

cd ..

cd interviews

cat interview-000296
was trying to fix on one, the cook took the cauldron of soup off the
fire, and at once set to work throwing everything within her reach at
the Duchess and the baby--the fire-irons came first; then followed a
shower of saucepans, plates, and dishes. The Duchess took no notice of
them even when they hit her; and the baby was howling so much already,
that it was quite impossible to say whether the blows hurt it or not.

'Oh, PLEASE mind what you're doing!' cried Alice, jumping up and down in
an agony of terror. 'Oh, there goes his PRECIOUS nose'; as an unusually
large saucepan flew close by it, and very nearly carried it off.

cat interview-000296

cd ..

# Openned hint #1
cat hint1
Try poking around what's in a file by using the 'head' command:

  head -n 20 people

This will show you the first 20 lines of the 'people' file.

# Opened mystery folder
cd mystery

# Poked around the people file
head -n 20 people
***************
To go to the street someone lives on, use the file
for that street name in the 'streets' subdirectory.
To knock on their door and investigate, read the line number
they live on from the file.  If a line looks like gibberish, you're at the wrong house.
***************

NAME	GENDER	AGE	ADDRESS
Alicia Fuentes	F	48	Walton Street, line 433
Jo-Ting Losev	F	46	Hemenway Street, line 390
Elena Edmonds	F	58	Elmwood Avenue, line 123
Naydene Cabral	F	46	Winthrop Street, line 454
Dato Rosengren	M	22	Mystic Street, line 477
Fernanda Serrano	F	37	Redlands Road, line 392
Emiliano Wenk	M	90	Paulding Street, line 490
Larry Lapin	M	71	Atwill Road, line 298
Jakub Gondos	M	61	Mitchell Street, line 187
Derek Kazanin	M	55	Tennis Road, line 440
Jens Tuimalealiifano	M	83	Rockwood Street, line 205
Nikola Kadhi	M	75	Glenville Avenue, line 226

# Searched for Annabel in people
grep "Annabel" people
Annabel Sun	F	26	Hart Place, line 40
Oluwasegun Annabel	M	37	Mattapan Street, line 173
Annabel Church	F	38	Buckingham Place, line 179
Annabel Fuglsang	M	40	Haley Street, line 176

# "Knocked" on door of Annabel Sun
head -n 40 Hart_Place | tail -n 1
SEE INTERVIEW #47246024

# Knocked on door of Annabel Church
head -n 179 Buckingham_Place | tail -1
SEE INTERVIEW #699607

# Saw interview #699607
cat interview-699607
Interviewed Ms. Church at 2:04 pm.  Witness stated that she did not see anyone she could identify as the shooter, that she ran away as soon as the shots were fired.

However, she reports seeing the car that fled the scene.  Describes it as a blue Honda, with a license plate that starts with "L337" and ends with "9"

# Searched for license plate
grep -C 4 "L337" vehicles
Owner: Bruno Oliver
Height: 6'4"
Weight: 238 lbs

License Plate L337ZR9
Make: Honda
Color: Red
Owner: Katie Park
Height: 6'2"
--
--
Owner: Deni Iovu
Height: 5'0"
Weight: 150 lbs

License Plate L337P89
Make: Honda
Color: Teal
Owner: Mike Bostock
Height: 6'4"
--
--
Owner: Yasemin Voronova
Height: 5'4"
Weight: 164 lbs

License Plate L337GX9
Make: Mazda
Color: Orange
Owner: John Keefe
Height: 6'4"
--
--
Owner: Yunlei Xu
Height: 5'0"
Weight: 214 lbs

License Plate L337QE9
Make: Honda
Color: Blue
Owner: Erika Owens
Height: 6'5"
--
--
Owner: Dieter Schooling
Height: 6'2"
Weight: 226 lbs

License Plate L337GB9
Make: Toyota
Color: Blue
Owner: Matt Waite
Height: 6'1"
--
--
Owner: Agnieszka Skhirtladze
Height: 5'4"
Weight: 240 lbs

License Plate L337OI9
Make: Jaguar
Color: Blue
Owner: Brian Boyer
Height: 6'6"
--
--
Owner: Rosie Fredricson
Height: 6'0"
Weight: 175 lbs

License Plate L337X19
Make: Fiat
Color: Blue
Owner: Al Shaw
Height: 6'5"
--
--
Owner: Mohamed Onuora
Height: 5'8"
Weight: 181 lbs

License Plate L337539
Make: Honda
Color: Blue
Owner: Aron Pilhofer
Height: 5'3"
--
--
Owner: Maksim Acuff
Height: 5'5"
Weight: 143 lbs

License Plate L3373U9
Make: Ford
Color: Blue
Owner: Miranda Mulligan
Height: 6'6"
--
--
Owner: Flor Magnini
Height: 5'2"
Weight: 239 lbs

License Plate L337369
Make: Honda
Color: Blue
Owner: Heather Billings
Height: 5'2"
--
--
Owner: Robyn Sigmond
Height: 6'3"
Weight: 137 lbs

License Plate L337DV9
Make: Honda
Color: Blue
Owner: Joe Germuska
Height: 6'2"
--
--
Owner: Bridgitte Bale
Height: 5'11"
Weight: 176 lbs

License Plate L3375A9
Make: Honda
Color: Blue
Owner: Jeremy Bowers
Height: 6'1"
--
--
Owner: Joseph Last
Height: 6'1"
Weight: 224 lbs

License Plate L337WR9
Make: Honda
Color: Blue
Owner: Jacqui Maher
Height: 6'2"

# Searched memberships for Joe Germuska
grep -r "Joe Germuska" *
AAA:Joe Germuska
Terminal_City_Library:Joe Germuska

# Searched memberships for Jeremy Bowers
grep -r "Jeremy Bowers" *
AAA:Jeremy Bowers
Delta_SkyMiles:Jeremy Bowers
Museum_of_Bash_History:Jeremy Bowers
Terminal_City_Library:Jeremy Bowers

Jeremy Bowers is the killer!