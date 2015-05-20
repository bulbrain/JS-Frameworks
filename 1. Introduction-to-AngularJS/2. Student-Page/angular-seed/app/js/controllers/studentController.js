app.controller("StudentController", function ($scope) {
    var people = [
        {
            "name": "Pesho",
            "photo": "http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png",
            "grade": 5,
            "school": "High School of Mathematics",
            "teacher": "Gichka Pesheva"
        }
    ];

    $scope.people = people;

    $scope.firstMessage = "First Message";
});