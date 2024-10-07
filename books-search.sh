export GR="https://www.goodreads.com/search?q="

# 2025
export books=( 
 'We Solve Murders by Richard Osman'
 'The New Couple in 5B by Lisa Unger'
 'Middle of the Night by Riley Sager'
 'Here One Moment by Liane Moriarty'
 'Beautiful Ugly by Alice Feeney'
 'The Waiting by Michael Connelly'
 'Everyone This Christmas Has a Secret by Benjamin Stevenson'
)

for b in "${books[@]}"; do
   open ${GR}"${b}"
done

