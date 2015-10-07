ColecaoTarefas = new Mongo.Collection('tarefas');

if (Meteor.isClient) {
 
  // This code only runs on the client
  angular.module('minhas-tarefas', ['angular-meteor']);

  angular.module('minhas-tarefas').controller('TarefasCtrl', ['$scope', '$meteor',
    function ($scope, $meteor) {

      $scope.tarefas = $meteor.collection(function () {
        return ColecaoTarefas.find({}, { sort: { createdAt: -1 } });
      });

      $scope.addTarefa = function (novaTarefa) {
        $scope.tarefas.push({
          texto: novaTarefa,
          dtaCriacao: new Date()
        });
      };

    }]);
}