app.controller("VideoController", function($scope) {
    var movies = [
        {
        title: 'Course introduction',
        pictureUrl: 'https://softuni.bg/Files/Publications/2015/04/softuni-news_185559167.png',
        length: '3:32',
        category: 'IT',
        subscribers: 3,
        date: new Date(2014, 12, 15),
        haveSubtitles: false,
        comments: [
            {
                username: 'Pesho Peshev',
                content: 'Congratulations Nakov',
                date: new Date(2014, 12, 15, 12, 30, 0),
                likes: 3,
                websiteUrl: 'http://pesho.com/'
            }
        ]
        }
    ];
    $scope.movies = movies;

    $scope.submitForm = function() {
        if ($scope.movieForm.$valid) {
            movies.push({
                title: $scope.movieTitle,
                pictureUrl: $scope.pictureUrl,
                length: $scope.length,
                category: $scope.category,
                date: $scope.date,
                haveSubtitles: $scope.haveSubtitles
            });
        }
    };
});