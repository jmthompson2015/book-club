export DCL="https://dcl.bibliocommons.com/v2/search?searchType=smart&query="
export GR="https://www.goodreads.com/search?q="

# 2026
export books=( 
 'Judge Stone by Viola Davis & James Patterson'
 'Last One Out by Jane Harper'
 'We Are All Guilty Here by Karin Slaughter'
 'The Unknown by Riley Sager'
 'We Chase Shadows by Richard Osman'
 'A Killer Christmas by Jessica Fletcher & Terrie Farley Moran'
)

for b in "${books[@]}"; do
   open ${DCL}"${b}"
   open ${GR}"${b}"
done

