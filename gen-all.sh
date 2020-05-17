mkdir -p dist
cd dist

node ../app/MasterBookList.js
node ../app/MasterMovieList.js
node ../app/MasterTVSeriesList.js
node ../app/CaseFiles.js

node ../app/MovieFromBookList.js
node ../app/NotableMovieList.js
node ../app/TVSeriesFromBookList.js
node ../app/NotableTVSeriesList.js
