1. Name Changer
$('a.user-mention').text("anon ymouse")

2. Add some class
$('.btn').addClass("btn-primary")

3. It's Shruggy!
$('.file-wrap a.message').text("¯\(ツ)/¯")
//this version only changes the desciptions in the Notes block, vs my last attempt
//$('a.message').text("shruggy")
//which had also changed the "merge pull request" and "from sf-wdi-25/w01..." text next to anon ymouse's photo/icon

4. I'm the captain now
$('ul.header-nav.user-nav.right').hide()
//couldn't figure out how to use a single command to .removeClass the icons
//update: read the solution, forgot there was a .remove command, and didn't see the #user-links ID

5. One big family
$('a.social-count').text("∞")

6. (stretchy) CookieMonsterHub!
$('.header-logo-invertocat').html("<img src=https://avatars3.githubusercontent.com/u/15662297?v=3&s=40>")
//Don't get why we use .html method to adjust the logo

7. Nuclear Option
$('ul.header-nav.user-nav.right').append($('btn')).text("Delete Repository")
$('ul.header-nav.user-nav.right').html(<img src="http://www.veryicon.com/icon/png/System/Led/nuclear.png>")
//Didn't work

8. Ugh, script kiddies
$("h1.entry-title").append(" / H4X0R3d!")

//Couldn't figure this out on my own