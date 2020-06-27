export DCL="https://dcl.bibliocommons.com/v2/search?searchType=smart&query="
export GR="https://www.goodreads.com/search?q="
export IMDB="https://www.imdb.com/find?s=all&q="
export LT="https://www.librarything.com/search.php?search="
export WIKI="https://en.wikipedia.org/wiki/"

open ${DCL}"${1}"
open ${GR}"${1}"
open ${IMDB}"${1}"
open ${LT}"${1}"
open ${WIKI}"${1}"