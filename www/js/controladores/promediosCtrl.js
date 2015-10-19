angular.module('promedius.promediosCtrl',[])

    .controller('PromediosCtrl', function($scope, $ionicModal) {

    $scope.promedios = [
        { nota: 2, perc: 10, valor:0 },
        { nota: 4, perc: 20, valor:0 },
        { nota: 5, perc: 30, valor:0 },
        { nota: 2, perc: 40, valor:0 },
        { nota: 3, perc: 30, valor:0 },
        { nota: 4, perc: 20, valor:0 }
    ];

    $scope.matrizMaterias = [
        {nombre: 'Matematica', notas:[{nota: 2, perc: 10, valor: 0},{nota: 3, perc: 20, valor: 0}, {nota: 4, perc: 20, valor: 0}]},
        {nombre: 'Sociales', notas:[{nota: 2, perc: 10, valor: 0},{nota: 3, perc: 20, valor: 0}]}
    ];

    $scope.nuevaMateria = function() {
        $scope.materiaModal.show();
    };
    // Se llama cuando se envía el formulario
    $scope.crearNota = function(materia) {
        /*if($scope.hasOwnProperty("materias") !== true) {
            $scope.matrizMaterias = [];
        }*/
        
        var tarea_index = $scope.matrizMaterias.indexOf(materia); $scope.matrizMaterias[tarea_index].notas.push({
            nota: 0,
            perc: 0,
            valor: 0
        });
        console.log($scope.matrizMaterias);
        //$scope.materiaModal.hide();
        //tarea.titulo = "";
    };
    
    $scope.crearMateria = function(materia) {
        /*if($scope.hasOwnProperty("materias") !== true) {
            $scope.matrizMaterias = [];
        }*/
        
        var tarea_index = $scope.matrizMaterias.push({
            nombre: materia.nombre,
            notas: []
        });
        console.log($scope.matrizMaterias);
        $scope.materiaModal.hide();
        tarea.titulo = "";
    };
    
    $scope.cerrarNuevaMateria = function() {
        $scope.materiaModal.hide();
    };

    $ionicModal.fromTemplateUrl('templates/nueva-materia.html', function(modal) {
        $scope.materiaModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

});