export DCL="https://dcl.bibliocommons.com/v2/search?searchType=smart&query="
export GR="https://www.goodreads.com/search?q="
export IMDB="https://www.imdb.com/find?s=all&q="
export LT="https://www.librarything.com/search.php?search="
export WIKI="https://en.wikipedia.org/wiki/"

#open ${DCL}"${1}"
#open ${GR}"${1}"
#open ${IMDB}"${1}"
#open ${LT}"${1}"
#open ${WIKI}"${1}"

export books=( 
'Resurrection Walk by Michael Connelly'
'Lone Wolf by Gregg Hurwitz'
'The Edge by David Baldacci'
'Blind Vigil by Matt Coyle'
'Strange Sally Diamond by Liz Nugent'
'Dead End Girl by LT Vargus'
'Listen for the Lie by Amy Tintera'
'Holly by Stephen King'
'Razorblade Tears by SA Cosby'
'His and Hers by Alice Feeney'
'The Last word by Elly Griffiths'
)

for b in "${books[@]}"; do
   open ${GR}"${b}"
done

