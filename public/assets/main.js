window.onload = function() {
  var viewModel = new ViewModel();
  ko.applyBindings(viewModel);
}

function ViewModel() {

  this.qualify = new QualificationModel();

}

function QualificationModel() {

  var $scope = this;
  $scope.homeOwner = ko.observable(false);

  $scope.yes = ko.computed(function() {
    return $scope.homeOwner();
  });

}
