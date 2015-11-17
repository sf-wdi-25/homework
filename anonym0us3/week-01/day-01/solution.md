cat instructions || to read thru the instructions

ls -a || to verify the existence of the /mystery directory

ls -a || to view the contents of the directory

grep CLUE * || to read thru the 'real' clues marked by the sergeant

**Clues:**

1. Footage from an ATM security camera is blurry but shows that the perpetrator is a tall male, at least 6'.
2. Found a wallet believed to belong to the killer: no ID, just loose change, and membership cards for AAA, Delta SkyMiles, the local library, and the Museum of Bash History. The cards are totally untraceable and have no name, for some reason.
3. Questioned the barista at the local coffee shop. He said a woman left right before they heard the shots. The name on her latte was Annabel, she had blond spiky hair and a New Zealand accent.
  1. From grep Annabel people, we're looking for a female Annabel. There are two matches:
    * Annabel Sun	F	26	Hart Place, line 40
    * Annabel Church	F	38	Buckingham Place, line 179


ls -a || to view directory contents

cd mystery || navigating to mystery directory

grep Museum crimescene || trying to see if there were any other clues in the crimescene file (based on the sergeant's highlighted important clues)
" .. Delta ..  "
" .. AAA .. "
" .. barista .. "

less people || seeing who the people are

grep Annabel people || finding any Annabel matches in people

less people || getting instructions on how to interview people

cd streets || going to streets

ls -a || view directory contents

grep 40 Hart Place || attempting to _just_ get the data from Line 40 of the Hart_Place file, to correspond with the first Annabel //failure, no such file or directory

grep Annabel ~/dev/command-line-mystery/mystery/people || Manually scrolling thru the Annabel Sun & Annabel Church addresses revealed nothing but gibberish. Went back to the people file to check out the other Annabels:

* Oluwasegun Annabel	M	37	Mattapan Street, line 173
* Annabel Fuglsang	M	40	Haley Street, line 176

less Haley Street || trying to find information to "investigate" this Annabel. Led me to "SEE INTERVIEW #871877

cd .. || go up a directory

cd interviews || navigate to interviews directory

less interview-871877 || reading the interview, which nets us: Mr. Fuglsang is male and has brown hair.  Not the witness from the cafe. Off to check the interview for the other male Annabel

less ~/dev/command-line-mystery/mystery/streets/Mattapan_Street || nets us SEE INTERVIEW #9437737

cd streets || less typing

grep INTERVIEW Hart Place || gives us SEE INTERVIEW #47246024

grep INTERVIEW Buckingham Place || SEE INTERVIEW #699607

cd ..

cd interviews

less interview-9437737 || Doesn't appear to be the witness from the cafe, who is female.

less interview-47246024 || Ms. Sun has brown hair and is not from New Zealand.  Not the witness from the cafe.

less interview-699607 || Interviewed Ms. Church at 2:04 pm.  Witness stated that she did not see anyone she could identify as the shooter, that she ran away as soon as the shots were fired. However, she reports seeing the car that fled the scene.  Describes it as a blue Honda, with a license plate that starts with "L337" and ends with "9"

cd ..

grep Honda vehicles || that was not what I wanted...

grep L337 vehicles || to find the list of vehicles w/matching plates

1. License Plate L337ZR9
2. License Plate L337P89
3 .License Plate L337GX9
4. License Plate L337QE9
5. License Plate L337GB9
6. License Plate L337OI9
7. License Plate L337X19
8. License Plate L337539
9. License Plate L3373U9
10 License Plate L337369
11. License Plate L337DV9
12. License Plate L3375A9
13. License Plate L337WR9


less vehicles || to see the vehicles file format

grep -b5 L337ZR9 vehicles
.
thru
.
grep -b5 L337WR9 vehicles || searching all matching plate entries for matching cars

L337P89: Mike Bostock; teal Honda; 6' 4"
L337DV9: Joe Germuska; blue Honda; 6'2"
L3375A9: Jeremy Bowers; blue Honda; 6'1"

//Now I have 3 suspects

cd memberships

grep //suspects' last name// //membership place// || Mike Bostock is a member everywhere. Joe Germuska was **not** in Delta, removed as suspect. Jeremy Bowers also listed in all places.

2 Suspects remain: Mike Bostock & Jeremy Bowers. Since Mike is driving a *teal* car specifically and not "blue", removing him from suspect pool, <h1>**leaving Jeremy Bowers as the dastardly killer, with the Revolver in the Billiard Room**</h1>