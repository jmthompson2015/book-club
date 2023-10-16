export USE_SEARCH1=false
export USE_SEARCH2=true

mkdir -p dist
cd dist

node ../app/MasterBookList.js ${USE_SEARCH1}
node ../app/MasterMovieList.js ${USE_SEARCH1}
node ../app/MasterPersonList.js ${USE_SEARCH1}
node ../app/MasterSeriesList.js ${USE_SEARCH1}
node ../app/MasterTVSeriesList.js ${USE_SEARCH1}

node ../app/MostReadAuthorsList.js ${USE_SEARCH2}
node ../app/MostReadSeriesList.js ${USE_SEARCH2}
node ../app/MostWantedBooksList.js ${USE_SEARCH2}
node ../app/MostWantedMoviesList.js ${USE_SEARCH2}
node ../app/MostWantedTVSeriesList.js ${USE_SEARCH2}

node ../app/CaseFiles.js ${USE_SEARCH2} 2022
node ../app/CaseFiles.js ${USE_SEARCH2} 2023
node ../app/CaseFiles.js ${USE_SEARCH2} 2024
