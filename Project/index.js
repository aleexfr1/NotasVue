var app = new Vue({
    el: '#miAplicacion',
    data: {
      nuevoRecordatorio: "",
      listaRecordatorio: [],
      isButtonDisabled: true
    },

    methods:{
        anadirRecordatorio: function(){
            this.listaRecordatorio.push({
                titulo:this.nuevoRecordatorio,
                prioridad: 0,
                fechaCreacion: new Date(),
                completado: false,});
                this.nuevoRecordatorio = "";
            },
        cambiarEstadoTarea: function(posicion){
            // Muestra posicion de los elementos
            /*console.log(posicion)*/

            
        },
        eliminarTarea: function(posicion){
            // Borrar elementos lista
            this.listaRecordatorio.splice(posicion,1);
        },

        cambiarCompletado: function(posicion) {
            
            if(this.listaRecordatorio[posicion].completado){
                this.listaRecordatorio[posicion].completado=false;
            } else {this.listaRecordatorio[posicion].completado=true};

            console.log(this.listaRecordatorio[posicion].completado);
                
            
        },

        /*teclaPulsada: function() {
            if (this.nuevoRecordatorio.length>0)
                this.isButtonDisabled = false;
                else
                    this.isButtonDisabled = true;
    }, */
        
        eliminarTareasCompletadas: function(posicion) {

        for (i=0; i<this.listaRecordatorio.length; i++)
            if(this.listaRecordatorio[i].completado)
            this.listaRecordatorio.splice(i,1)
        }
},

    computed:{
       totalTareas: function(){

          return this.listaRecordatorio.length;
       },

        totalPendientes: function(){
        let total = 0;
        
        for (i=0; i<this.listaRecordatorio.length; i++)
            if(!this.listaRecordatorio[i].completado) total++;
        
        
        return total;
    }
    }
  })