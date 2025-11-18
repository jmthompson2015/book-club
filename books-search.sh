export GR="https://www.goodreads.com/search?q="

# 2026
export books=( 
 'The Ghostwriter by Julie Clark'
 'The Impossible Fortune by Richard Osman'
 'The Proving Ground by Michael Connelly'
 'Gone Before Goodbye by Reese Witherspoon & Harlan Coben'
 'My Husbands Wife by Alice Feeney'
 'The Widow by John Grisham'
)

for b in "${books[@]}"; do
   open ${GR}"${b}"
done

