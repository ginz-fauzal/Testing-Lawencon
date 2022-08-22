# Logic Test

Anagram adalah istilah dimana suatu string jika dibolak balik ordernya maka akan   sama eg. 
'aku' dan 'kua' adalah Anagram, 'aku' dan 'aka' bukan Anagram


Buatlah function yang dapat  menerima list of array dan
bisa memisahkan datanya  sesuai anagramnya


Contoh
Input: ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'] 

Expected Outputs 
[
 ["kita", "atik", "tika"],  ["aku", "kua"],  ["makan"],  ["kia"] 
]


## Project Movie
buat  simple Angular app untuk movie list , gunakan http://www.omdbapi.com  untuk consume data nya

API key: 715289b

Contoh API  Get: http://www.omdbapi.com?apikey=faf7e5bb&s=Batman&page=1

Fitur yang di nilai:
•	Menampilkan List of movies secara horizontal  max 4 movie per baris
•	Use Infinite Scroll tanpa plugin (jika sudah sampai row yang paling bawah get page berikutnya)
•	Single Page for Single Movie Detail
•	Show Movie Poster in a popup modal window when image from the list is clicked
•	Autocomplete searchbox implementation is a big plus

Project must use/have : 
•	Angular
•	RxJS redux (is a big plus)
•	Good, sensible file structuring
•	Unit test (is a big plus)
•	Showing some display of Angular Hooks knowledge (is a big plus)
